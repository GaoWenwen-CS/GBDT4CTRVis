import * as d3 from 'd3';
import * as d3_hexbin from 'd3-hexbin'
import { useEffect, useRef } from 'react';
import { overviewData } from '../data/dataOverview';
import { useLocalObservable } from 'mobx-react'; //trigger，不用Observer都行
import { store } from '../store/store';


function DataOverview() {
    const elementRef = useRef(null);
    const tooltipRef = useRef(null);
    const data = overviewData;
    const myStore = useLocalObservable(() => store);

    //默认状态：首次执行+每次组件更新执行
    useEffect(() => {
        // 获取DOM及其宽高
        const element = d3.select(elementRef.current);
        const tooltip = d3.select(tooltipRef.current);
        const rect = elementRef.current.getBoundingClientRect();
        const [width, height] = [rect.width, rect.height];
        const margin = ({ top: 30, left: 30, right: 0, bottom: 0 })
        const color = d3.interpolateBrBG;
        const confusionMatrixColor = d3.interpolateBlues;

        //console.log("RGB Test:", color(0), color(1));

        // 清除已有svg
        if (element.selectAll('svg')) {
            element.selectAll('svg').remove();
        }
        // 新建svg
        let svg = element
            .append('svg')
            .attr("width", width)
            .attr("height", height);

        // Draw the confusion matrix
        const all = data.length;
        const myColor = [color(0.8), color(0.6), color(0.4), color(0.2)]
        // const myColor = [confusionMatrixColor(0.6), confusionMatrixColor(0.4), confusionMatrixColor(0.2), confusionMatrixColor(0.8)]
        //const myColor = ['red', 'green', 'yellow', 'grey']
        //const myColor = ['#8EC3B0', '#9ED5C5', '#BCEAD5', '#DEF5E5']
        //const myColor = ['#A4EBF3', '#A4EBF5', '#A4EBF7', '#A4EBF9']
        const testMatixData = [
            { color: myColor[0], label: "TP", value: 1874 },
            { color: myColor[1], label: "FP", value: 727 },
            { color: myColor[2], label: "FN", value: 422 },
            { color: myColor[3], label: "TN", value: 1977 },
        ];

        const matrix = svg.append("g")
            .selectAll("g")
            .data(testMatixData)
            .join("g")
            .attr("transform", (d, i) => {
                let sum = 0;
                for (let j = 0; j < i; j++) {
                    sum += testMatixData[j].value;
                }
                return `translate(10,${(height - 20) * (sum / all) + 8})` // -20是空出上下，+8是起点位置
            });

        matrix.append("rect")
            .attr("width", margin.left/1.6)
            .attr("height", (d, i) => (height - 20) * (d.value / all))
            .attr("fill", "lightgray")
            .attr("opacity", 0.75)            
            .attr("stroke", "darkgray")
            .on("mouseover", (event, d) => {
                let coordinates = [event.offsetX, event.offsetY]
                tooltip
                    .style("left", coordinates[0] + "px")
                    .style("top", coordinates[1] + "px")
                    .html(d.label + ': ' + d.value + ` (${(d.value / all * 100).toFixed(2)}%)`)
                    .style("display", "inline-block");
                event.target.setAttribute("opacity", 0.8);
            })
            .on("mouseout", (event, d) => { // mouseleave 不会冒泡；mouseout 会冒泡   
                tooltip.style("display", "none");
                event.target.setAttribute("opacity", 1);
            })

        matrix.append("text")
            .attr("x", 2)
            .attr("y", (d, i) => (height - 20) * (d.value / all) / 2 + 5)
            .attr("text-anchor", "start")
            .text(d => d.label);


        // Draw the score legend
        const legengWidth = width - margin.left - 20;
        const legend = svg.append("g")
            .attr("transform", `translate(${margin.left},0)`);

        const gradient = legend.append("defs") //SVG渐进色linearGradient
            .append("linearGradient")
            .attr("id", "gradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient.selectAll("stop")
            .data(d3.range(100))
            .join("stop")
            .attr("offset", (d) => d + "%")
            .attr("stop-color", (d) => color(d / 100));

        legend.append("rect")
            .attr("x", 10)
            .attr("y", 5)
            .attr("width", legengWidth)
            .attr("height", 10)
            .attr("fill", "url(#gradient)");
        //.attr("fill", `linear-gradient(${color(0)}, ${color(1)})`) 不能直接这样用

        legend.append("text")
            .attr("x", 10)
            .attr("y", 30)
            .text('0');

        legend.append("text")
            .attr("x", legengWidth + 5)
            .attr("y", 30)
            .text('1');

        legend.append("text")
            .attr("x", legengWidth / 2 - 20)
            .attr("y", 30)
            .text('Probability');


        // Draw hexbin scatter
        const scatter = svg.append("g")
            .attr("transform", `translate(${margin.left - 20},${margin.top - 30})`);

        const x = d3.scaleLinear()
            .domain(d3.extent(data, d => d.x)).nice()
            .range([margin.left, width - margin.left])

        const y = d3.scaleLinear()
            .domain(d3.extent(data, d => d.y)).nice()
            .range([height - margin.top, margin.top])

        const hexbin = d3_hexbin.hexbin()
            .x(d => x(d.x)) // 如果用d3 hexbin示例的scaleLog比例尺会显示不出来，因为坐标有负数。
            .y(d => y(d.y))
            .radius(10) // 10 radius * width / (height - 1)
            .extent([[margin.left, margin.top], [width - margin.right, height - margin.bottom]]);

        const bins = hexbin(data);
        const max_length = d3.max(bins, d => d.length); // About 50
        console.log("bins", bins, max_length);

        scatter.append("g")
            .selectAll("path")
            .data(bins)
            .join("path")
            .attr("d", d => hexbin.hexagon(15 * d.length / max_length))
            // .attr("d", d => {
            //     console.log('hexagon', hexbin.hexagon(15))
            //     return hexbin.hexagon(15 * d.length / max_length)
            // })
            .attr("stroke", "#000")
            .attr("stroke-opacity", 0.1)
            .attr("stroke-width", 1)
            .attr("transform", d => `translate(${d.x},${d.y})`)
            //.attr("opacity", d => (d.length / all) * bins.length * 1.5) // 透明度编码数量多少，有色差！
            .attr("fill", d => color(d.reduce((sum, current) => sum + current.probability, 0) / d.length)) // TODO：hex颜色编码内部节点的预测分数均值。 Done
            .on("mouseover", (event, d) => {
                let coordinates = [event.offsetX, event.offsetY]
                tooltip
                    .style("left", coordinates[0] + "px")
                    .style("top", coordinates[1] + "px")
                    .html('Nums:' + d.length + '<br>' +
                        'Mean:' + (d.reduce((sum, current) => sum + current.probability, 0) / d.length).toFixed(2))
                    .style("display", "inline-block");
                event.target.setAttribute("opacity", 0.8);
            })
            .on("mouseout", (event, d) => { // mouseleave 不会冒泡；mouseout 会冒泡   
                tooltip.style("display", "none");
                event.target.setAttribute("opacity", 1);
            })
            .on("click", (event, d) => {
                let indexs = [];
                d.forEach(e => {
                    indexs.push(e.index)
                })
                //console.log(indexs);
                myStore.setKeys(indexs);
                //console.log('myStore.setKeys:', myStore.keys);

                event.target.setAttribute("stroke", "red");
                event.target.setAttribute("stroke-width", 3);
                event.target.setAttribute("stroke-opacity", 0.5);
            })
            .on("dblclick", (event, d) => {
                event.target.setAttribute("stroke", "#000");
                event.target.setAttribute("stroke-width", 1);
                event.target.setAttribute("stroke-opacity", 0.1);
            })
    })

    return (
        <div style={{ height: '100%' }} ref={elementRef} >
            <div className="tooltip" ref={tooltipRef}></div>
        </div>
    );
}

export default DataOverview;