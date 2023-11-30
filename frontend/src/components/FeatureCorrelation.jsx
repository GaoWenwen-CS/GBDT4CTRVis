import * as d3 from 'd3';
import { useEffect, useState, useRef } from 'react';
import { Observer, useLocalObservable } from 'mobx-react';
import { store } from '../store/store';
// eslint-disable-next-line
import { allCor, inClassCor } from '../data/featureCorData';

function FeatureCorrelation() {
    const myStore = useLocalObservable(() => store);

    return (
        <Observer>
            {() => <Net selectedFeature={myStore.selectedFeature} />}
        </Observer>
    );
}
export default FeatureCorrelation;

function Net(props) {
    const elementRef = useRef(null);
    const tooltipRef = useRef(null);
    // eslint-disable-next-line
    const [data, setData] = useState(inClassCor);//inclassCor allCor inClassCor

    useEffect(() => {
        // 获取DOM及其宽高
        const element = d3.select(elementRef.current);
        const tooltip = d3.select(tooltipRef.current);
        const rect = elementRef.current.getBoundingClientRect();
        const [width, height] = [rect.width, rect.height];

        // Draw the chart

        // 清除已有svg
        if (element.selectAll('svg')) {
            element.selectAll('svg').remove();
        }
        // 新建svg
        const svg = element
            .append('svg')
            .attr("width", width)
            .attr("height", height);

        let [nodes, links] = [data.nodes, data.links];

        //links = links.filter(d => Math.abs(d.value) > 0.3);

        // const color = d3.scaleOrdinal(d3.schemeCategory10);
        const myColor = ['#ffa39e', '#ffd666', '#87e8de'] //red-3 gold-4 cyan-3

        // Create a new simulation to layout a graph
        const simulation = d3.forceSimulation()
            // (d) => d.id 识别id（string），而不是默认的数值 d.index，参考：https://github.com/d3/d3-force#link_id
            .force("link", d3.forceLink().id((d) => d.id))
            .force("charge", d3.forceManyBody().strength(-5)) // 节点之间的斥力，default -30, inclass -8or10, all -50
            // .force("x", d3.forceX(width / 2, height / 2))
            // .force("y", d3.forceY(width / 2, height / 2))
            .force("center", d3.forceCenter(width / 2, height / 2));

        let selectedLink = null;
        const link = svg.append("g")
            .selectAll("line")
            .data(links)
            .join("line")
            .attr("stroke", "#999")
            .attr("stroke-opacity", d => Math.abs(d.value) * 0.5)
            .attr("stroke-width", d => Math.abs(d.value) * 10)
            // link 提示框交互
            .on("mousedown", (event, d) => {
                let coordinates = [event.offsetX, event.offsetY]
                tooltip
                    .style("left", coordinates[0] + 10 + "px")
                    .style("top", coordinates[1] + 30 + "px")
                    .html("Link between <br>" +
                        d.source.id + "<br>" +
                        " and <br>" +
                        d.target.id + "<br>" +
                        "Correlation:" + d.value)
                    .style("display", "inline-block");
                selectedLink = event.target;
                selectedLink.setAttribute("stroke", "lightgrey");
            })
            .on("mouseup", () => {
                tooltip.style("display", "none");
                selectedLink.setAttribute("stroke", "#999");
            });

        let selectedNode = null;
        //console.log(nodes)
        const node = svg.append("g")
            .selectAll("circle")
            .data(nodes)
            .join("circle")
            .attr("class", d => d.id)
            //.attr("fill", d => color(d.group))
            .attr("fill", d => myColor[d.group - 1])
            .attr("stroke", "#fff")
            .attr("stroke-opacity", 1)
            .attr("stroke-width", 1.5)
            .attr("r", 8)
            .call(drag(simulation)) // 拖拽交互
            // node 提示框
            .on("mouseover", (event, d) => {
                let coordinates = [event.offsetX, event.offsetY]
                //console.log(coordinates);
                tooltip
                    .style("left", coordinates[0] + "px")
                    .style("top", coordinates[1] + "px")
                    .html(d.id)
                    .style("display", "inline-block");
                selectedNode = event.target;
                selectedNode.setAttribute("r", 12);
            })
            .on("mouseout", () => { // mouseleave 不会冒泡；mouseout 会冒泡   
                tooltip.style("display", "none");
                selectedNode.setAttribute("r", 8);
            });

        // 把上面绘制出来的node和link模拟出来（+交互）
        simulation.nodes(nodes).on('tick', ticked);
        simulation.force('link')
            .links(links)
            .distance(d => (1 / (Math.abs(d.value) + 1)) * 80)
            //.distance(100)
            .strength(d => Math.abs(d.value) * 0.8) // 链接节点之间的引力

        // 图例legend
        const legeng_data = [
            { color: myColor[0], label: "ad" },
            { color: myColor[1], label: "user" },
            { color: myColor[2], label: "media" }
        ];

        // 绘制图例
        const legend = svg.append("g")
            .selectAll("g")
            .data(legeng_data)
            .join("g")
            .attr("transform", function (d, i) { return "translate(0," + i * 30 + ")"; })

        legend.append("rect")
            .attr("x", 10)
            .attr("y", 10)
            .attr("width", 20)
            .attr("height", 15)
            .style("fill", function (d) { return d.color; });

        legend.append("text")
            .attr("x", 35)
            .attr("y", 20)
            .style("text-anchor", "start")
            .text(function (d) { return d.label; });


        // D3 交互函数
        function ticked() {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        }

        function drag(simulation) {
            function dragstarted(event) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
            }

            function dragged(event) {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
            }

            function dragended(event) {
                if (!event.active) simulation.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
            }

            return d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended);
        }
    }, [data]);

    // 更改selectedFeature后联动放大相应的node
    useEffect(() => {
        const feature = props.selectedFeature;
        if (feature) {
            const node = d3.select(elementRef.current).select(`.${feature}`);
            node.attr("r", 12);
            d3.select(tooltipRef.current)
                .style("top", node.attr('cy') + "px")
                .style("left", node.attr('cx') + "px")
                .html(feature)
                .style("display", "inline-block");
        }
    }, [props])

    return (
        <div style={{ height: '100%' }} ref={elementRef}>
            <div className="tooltip" ref={tooltipRef}></div>
        </div>
    )
}

