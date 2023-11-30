import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import { allTrees } from '../data/treeModelInfo';
import { Observer, useLocalObservable } from 'mobx-react';
import { store } from '../store/store';
import { data5000 } from '../data/dataListData5000';

function TreeBoosting() {
    const myStore = useLocalObservable(() => store);

    return (
        <Observer>
            {() => <ICicle selectedFeature={myStore.selectedFeature} sample={myStore.sample} />}
        </Observer>
    );

}

export default TreeBoosting;

// 默认参数
const centers = [60, 79, 82, 43, 49, 74]
const clusters = [[7, 10, 12, 21, 23, 24, 32, 42, 44, 46, 60, 65, 68, 70, 80, 89], [3, 11, 18, 33, 36, 51, 53, 55, 58, 59, 63, 79, 86, 90, 92, 97], [5, 6, 13, 15, 31, 35, 52, 54, 62, 77, 82, 83, 85, 87, 88, 98, 99], [0, 1, 2, 4, 8, 9, 17, 20, 25, 27, 30, 41, 43, 64, 67, 69, 71, 75, 81, 84, 95], [37, 39, 45, 47, 49, 56, 76, 94, 96], [14, 16, 19, 22, 26, 28, 29, 34, 38, 40, 48, 50, 57, 61, 66, 72, 73, 74, 78, 91, 93]]

// const centers = [24, 4, 34, 49, 96, 73]
// const clusters = [[24, 25, 26, 27, 28, 29, 31, 33, 35, 37, 39, 59, 66], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], [30, 32, 34, 36, 38, 40, 41, 42], [43, 45, 47, 49, 51, 53, 54, 56, 58, 60, 61, 63, 65, 67, 68, 70, 74, 76, 77, 79, 81, 82, 88, 92, 94, 97], [72, 78, 84, 86, 89, 90, 91, 93, 96, 98, 99], [44, 46, 48, 50, 52, 55, 57, 62, 64, 69, 71, 73, 75, 80, 83, 85, 87, 95]]

// 4.2节示意效果
// const centers = [29, 9, 38, 49, 91, 80]
// const clusters = [[24, 25, 26, 27, 28, 29, 31, 33, 35, 37, 39, 21, 22, 23], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [30, 32, 34, 36, 38, 40, 41, 42], [43, 45, 47, 49, 51, 53, 54, 56, 58, 60, 61, 63, 65, 67, 68, 70, 74, 76, 77, 79], [72, 78, 84, 86, 89, 90, 91, 93, 96, 98, 99, 85, 87, 95, 81, 82, 88, 92, 94, 97, 59, 66], [44, 46, 48, 50, 52, 55, 57, 62, 64, 69, 71, 73, 75, 80, 83]]

// // 4.2 real last（stream lr0.02）
// const centers = [58, 37, 30, 99, 16, 24]
// const clusters = [[41, 43, 45, 48, 52, 56, 58, 61, 64, 66, 67, 68, 70, 72, 75, 76, 77, 79, 88, 98], [3, 5, 6, 7, 12, 13, 15, 23, 37, 46, 47, 49, 50, 53, 55, 57, 60, 65, 69, 74, 80, 81, 89, 91, 95, 96], [1, 2, 4, 8, 9, 10, 11, 22, 26, 27, 30, 33, 35, 38, 42], [44, 51, 59, 62, 63, 71, 73, 78, 82, 85, 86, 87, 90, 92, 93, 94, 97, 99], [0, 14, 16, 20, 31, 40, 54, 83, 84], [17, 18, 19, 21, 24, 25, 28, 29, 32, 34, 36, 39]]

let map = new Map();
for (let i = 0; i < centers.length; i++) {
    map.set(centers[i], clusters[i]);
}

const sorted_centers = centers.sort((a, b) => a - b);
console.log(sorted_centers, map);

const color = ['#ffa39e', '#ffd666', '#87e8de'] //red-3 gold-4 cyan-3; //ad user media

const feature_names = [
    "user_id",
    "task_id",
    "material_id",
    "creative_type",
    "advertiser_id",
    "developer_id",
    "display_type",
    "slot_id",
    "app_id",
    "app_tag",
    "app_first_class",
    "app_second_class",
    "age",
    "city",
    "city_rank",
    "device_name",
    "device_size",
    "career",
    "gender",
    "net_type",
    "residence",
    "app_size",
    "app_release_time",
    "app_score",
    "emui_version",
    "device_release_time",
    "device_price",
    "lifecycle",
    "membership_grade",
    "membership_lifecycle",
    "purchase_tag",
    "daily_active_time",
    "industry_name",
    "display_date"
]

const ad = ['task_id', 'material_id', 'creative_type', 'advertiser_id', 'developer_id', 'display_type', 'industry_name', 'display_date']

const user = ['user_id', 'age', 'city', 'city_rank', 'device_name', 'device_size', 'career', 'gender', 'net_type', 'residence', 'emui_version', 'device_release_time', 'device_price', 'lifecycle', 'membership_grade', 'membership_lifecycle', 'purchase_tag', 'daily_active_time']

const media = ['slot_id', 'app_id', 'app_tag', 'app_first_class', 'app_second_class', 'app_size', 'app_release_time', 'app_score']

const getFeatureType = (feature) => {
    if (ad.includes(feature)) return 0; // ad
    if (user.includes(feature)) return 1; //user
    if (media.includes(feature)) return 2; // media
}

const getPath = (sample, node) => {
    let path = [];
    while (!node['leaf_index']) {
        const split_feature = feature_names[node['split_feature']];
        const value = node['internal_count'];
        path.push(split_feature + value); // 作为唯一ID，只用特征名会重复

        const split_value = node['threshold'];
        if (sample[split_feature] <= split_value) {
            node = node['left_child'];
        }
        else {
            node = node['right_child'];
        }
    }
    path.push('leaf' + node['leaf_count']);
    return path;
}

const getStreamGains = (sample) => {
    let streamData = [];
    for (let i = 0; i < allTrees.length; i++) {
        let node = allTrees[i]['tree_structure'];
        let ad_g = 0;
        let user_g = 0;
        let media_g = 0;

        while (node['leaf_index'] === undefined) {
            const split_feature = feature_names[node['split_feature']];
            const split_value = node['threshold'];
            const split_gain = node['split_gain'];

            if (ad.includes(split_feature)) ad_g += split_gain;
            if (user.includes(split_feature)) user_g += split_gain;
            if (media.includes(split_feature)) media_g += split_gain;

            if (sample[split_feature] <= split_value) {
                node = node['left_child'];
            }
            else {
                node = node['right_child'];
            }
        }

        let obj = { 'index': i, 'ad': ad_g, 'user': user_g, 'media': media_g };
        streamData.push(obj);
    }
    return streamData;
}

const getTreeSize = (trees) => {
    let treeSize = [];
    for (let i = 0; i < trees.length; i++) {
        let str = JSON.stringify(trees[i]);
        let reg = new RegExp("split_index", "g");
        let non_leaf = str.match(reg).length;
        let leaf = trees[i]["num_leaves"];
        let size = non_leaf + leaf;
        let obj = {
            x: i,
            y: size
        }
        treeSize.push(obj);
    }
    console.log("treesize", treeSize);
    return treeSize;
}

const getLeafValue = (sample) => {
    let leafValue = [];
    for (let i = 0; i < allTrees.length; i++) {
        let node = allTrees[i]['tree_structure'];

        while (node['leaf_index'] === undefined) {
            const split_feature = feature_names[node['split_feature']];
            const split_value = node['threshold'];

            if (sample[split_feature] <= split_value) {
                node = node['left_child'];
            }
            else {
                node = node['right_child'];
            }
        }

        let obj = {
            x: i,
            y: node['leaf_value']
        };
        leafValue.push(obj);
    }
    // let allValue = leafValue.reduce((sum, cur) => sum + cur.y, 0); // 最终的概率值是通过将样本在决策树中的路径上的叶子节点的leaf_value加权求和得到的
    // console.log('allValue:', allValue) 
    return leafValue;
}

function ICicle(props) {
    const elementRef = useRef(null);
    const tooltipRef = useRef(null);

    useEffect(() => {
        // eslint-disable-next-line
        const sample = data5000.filter(d => d.key == props.sample);
        let streamData = null;
        let leafValue = null;
        if (sample.length !== 0) {
            streamData = getStreamGains(sample[0]);
            leafValue = getLeafValue(sample[0]);
        }
        console.log('leafValue', leafValue);

        // 获取DOM及其宽高
        const element = d3.select(elementRef.current);
        const tooltip = d3.select(tooltipRef.current);
        const rect = elementRef.current.getBoundingClientRect();
        const [width, height] = [rect.width, rect.height];
        // 清除已有svg
        if (element.selectAll('svg')) {
            element.selectAll('svg').remove();
        }
        // 新建svg
        let svg = element
            .append('svg')
            .attr("width", width)
            .attr("height", height);

        const textHeight = 20;

        // ------------------Draw the ICicles---------------
        const n = centers.length; // 聚类中心数量

        const treeSvg = svg.append("g");

        // 创建分区布局
        const partition = d3.partition()
            .size([height / 4, width / n]); // 交换x，y以生成水平布局

        // 循环创建n个icicle
        for (let i = 0; i < n; i++) {
            let tree = treeSvg.append("g")
                .attr("class", `tree_${sorted_centers[i]}`)
                .attr("transform", `translate(${i / n * width},0)`);
            drawIcicle(tree, sorted_centers[i], i);
        }

        function drawIcicle(tree, i, index) {
            let data = allTrees[i].tree_structure

            // 绑定数据，并生成层次数据
            let root = d3.hierarchy(data, d => {
                let children = [];
                if (d.left_child) children.push(d.left_child);
                if (d.right_child) children.push(d.right_child);
                return children;
            })
                .sum((d) => d.leaf_count ? d.leaf_count : 0);// 只计算叶子结点数量即可
            //.sort((a, b) => b.height - a.height || b.internal_count - a.internal_count) // 不能按大小来排序，不然就和特征向量的位置对应不上了。也不该用internal_count，这是该节点下包含的总节点数，会重复计算。

            partition(root);
            //console.log("root.descendants()", root.descendants())

            // partition(root
            //     .sum((d) => d.leaf_count ? d.leaf_count : 0) 
            // );

            // 生成rect
            tree.selectAll("rect")
                .data(root.descendants()) //获取所有节点
                .join("rect")
                .attr("transform", d => `translate(${d.y0},${d.x0})`)
                .attr("width", d => d.y1 - d.y0)
                .attr("height", d => d.x1 - d.x0)
                .attr("fill", d => d.height && d.depth ? "lightblue" : "lightgrey") //根和叶子用灰色表示
                .attr("opacity", 0.75)
                .attr("stroke", "white")
                .attr("id", d => d.height ? feature_names[d.data.split_feature] + d.value : 'leaf' + d.value) // id: age703716  因为同一层次也会有相同的特征名
                .attr("class", d => feature_names[d.data.split_feature]) // Bind real feature name
                .on("mouseover", (event, d) => {
                    //console.log(event, d);
                    let coordinates = [event.offsetX, event.offsetY]
                    tooltip
                        .style("left", coordinates[0] + "px")
                        .style("top", coordinates[1] + "px")
                        .html(() => {
                            if (d.height) { //非叶子节点
                                return 'Feature:' + feature_names[d.data.split_feature] + '<br>' +
                                    'Depth:' + d.depth + '<br>' +
                                    'Gain:' + d.data.split_gain.toFixed(2) + '<br>'
                            } else {
                                return 'Leaf Count:' + d.data.leaf_count + '<br>' +
                                    'Depth:' + d.depth + '<br>' +
                                    'Value:' + d.data.leaf_value.toFixed(2)
                            }
                        }
                        )
                        .style("display", "inline-block");
                    event.target.setAttribute("fill", color[getFeatureType(feature_names[d.data.split_feature])]);
                    event.target.setAttribute("opacity", 1);
                })
                .on("mouseout", (event, d) => { // mouseleave 不会冒泡；mouseout 会冒泡   
                    tooltip.style("display", "none");
                    event.target.setAttribute("fill", d.height && d.depth ? "lightblue" : "lightgrey");
                    event.target.setAttribute("opacity", 0.75);
                });

            // Label
            let hoverText = null;
            tree.append("text")// const central = 
                .attr("x", 25)
                .attr("y", height / 4 + textHeight)
                .text(`Central: Tree${i}`)
                .style("cursor", "default")
                .on("mouseover", (event) => {
                    // let coordinates = [event.offsetX, event.offsetY]
                    const xStream = d3.scaleLinear()
                        .domain([0, 99])
                        .range([0, width]);
                    tooltip
                        .style("left", xStream(i) + 10 + "px")
                        .style("top", height / 2 + 20 + "px")
                        .html('Tree:' + i + '<br>' +
                            'Ad Gains:' + streamData[i].ad.toFixed(2) + '<br>' +
                            'User Gains:' + streamData[i].user.toFixed(2) + '<br>' +
                            'Media Gains:' + streamData[i].media.toFixed(2)
                        )
                        .style("display", "inline-block");
                    hoverText = event.target;
                    hoverText.setAttribute("fill", "steelblue");
                    tree.selectAll("rect")
                        .attr("fill", (d) => d.height ? color[getFeatureType(feature_names[d.data.split_feature])] : "lightgrey")
                        .attr("opacity", 1)
                    d3.select(`.line_${i}`).attr("stroke", "#434343");
                })
                .on("mouseout", () => { // mouseleave 不会冒泡；mouseout 会冒泡   
                    tooltip.style("display", "none");
                    hoverText.setAttribute("fill", "black");
                    tree.selectAll("rect")
                        .attr("fill", (d) => d.height && d.depth ? "lightblue" : "lightgrey") //根和叶子用灰色表示
                        .attr("opacity", 0.75)
                    d3.select(`.line_${i}`).attr("stroke", "white");
                });

            const trees_index = map.get(i);
            tree.append("text")// const cluster = 
                .attr("x", 30)
                .attr("y", height / 4 + textHeight * 2)
                .style("cursor", "default")
                .text(`Cluster${index + 1} (${trees_index.length})`) // TODO: 聚类中心的树index
                .on("mouseover", (event) => {
                    let coordinates = [event.offsetX, event.offsetY]
                    tooltip
                        .style("left", coordinates[0] + "px")
                        .style("top", coordinates[1] + 50 + "px")
                        .html(trees_index.join(','))
                        .style("display", "inline-block");
                    hoverText = event.target;
                    hoverText.setAttribute("fill", "steelblue");
                    trees_index.forEach(e => d3.select(`.line_${e}`).attr("stroke", "#434343"));
                })
                .on("mouseout", () => { // mouseleave 不会冒泡；mouseout 会冒泡   
                    tooltip.style("display", "none");
                    hoverText.setAttribute("fill", "black")
                    trees_index.forEach(e => d3.select(`.line_${e}`).attr("stroke", "white"));
                });

            // const bbox = cluster.node().getBBox(); 太麻烦了，后面看情况再加
        }

        // // ------------------Draw the Lines---------------
        const lineSvg = svg.append("g")
            .attr("transform", `translate(0,${height / 4 + textHeight * 2})`);

        const treeSize = getTreeSize(allTrees);

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(treeSize, d => d.x)])
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(treeSize, d => d.y)])
            .range([height / 8, textHeight + 5]);

        // // 那颗线，不要也行
        // // const line = d3.line()
        // //     .x(d => xScale(d.x))
        // //     .y(d => yScale(d.y))
        // //     .curve(d3.curveBasis);

        // // lineSvg.append("path")
        // //     .datum(linesData)
        // //     .attr("fill", "none")
        // //     .attr("stroke", "steelblue")
        // //     .attr("stroke-width", 1.5)
        // //     .attr("d", line);

        const area = d3.area()
            .x(d => xScale(d.x))
            .y0(yScale(0))
            .y1(d => yScale(d.y))
            .curve(d3.curveBasis);

        lineSvg.append("path")
            .datum(treeSize) // allSize
            .attr("fill", "lightgrey")
            .attr("fill-opacity", 0.5)
            .attr("d", area);

        lineSvg.append("text")
            .attr("x", width - 75)
            .attr("y", height / 8 + textHeight + 12)
            .style("text-anchor", "center")
            .text('Tree Index');

        lineSvg.append("text")
            .attr("x", 5)
            .attr("y", yScale(treeSize[0].y) - 5)
            .text('Tree Size');

        // 刻度

        // 创建刻度线
        const xAxis = d3.axisBottom(xScale)
            .ticks(treeSize.length / 10)
            .tickSizeInner(3) // 设置内部刻度线的长度
            .tickFormat((d, i) => {
                if (i === 0) { // 判断是否为第一个刻度值
                    return '0 0'; // 不显示第一个刻度值
                } else {
                    return d; // 显示其他刻度值
                }
            });

        // 将刻度线添加到 SVG 中
        lineSvg.append("g")
            .attr("id", "tickLine")
            .attr("transform", `translate(0, ${height / 8})`) // 定义刻度线的位置
            .call(xAxis);

        lineSvg.select("#tickLine")
            .selectAll("path")
            .attr("stroke", "none");
        // ---------------Leaf Value--------------------
        if (leafValue) {
            const yScale_leaf = d3.scaleLinear()
                .domain([0, d3.max(leafValue, d => d.y)])
                .range([height / 8, textHeight + 10]);

            const area_leaf = d3.area()
                .x(d => xScale(d.x))
                .y0(yScale_leaf(0))
                .y1(d => yScale_leaf(d.y))
                .curve(d3.curveBasis);

            lineSvg.append("path")
                .datum(leafValue) // allSize
                .attr("fill", "lightblue")
                .attr("fill-opacity", 0.5)
                .attr("d", area_leaf);

            lineSvg.append("text")
                .attr("x", 5)
                .attr("y", height / 8 - 20) // yScale_leaf(leafValue[0].y) + textHeight
                .text('Leaf Value');
        }

        // ---------------------Stream---------------------------
        if (streamData) drawStream();
        function drawStream() {
            const categories = ['ad', 'user', 'media']; // Object.keys(streamData[0]).slice(1)

            let streamSvg = svg.append("g")
                .attr("transform", `translate(0,${height * 3 / 8 + textHeight * 3})`); // 3 / 8

            // Define the color scale
            const colorScale = d3.scaleOrdinal()
                .domain(categories)
                .range(color);

            // Define the stack layout
            let stack = d3.stack()
                .keys(categories)
                .offset(d3.stackOffsetWiggle)
                .order(d3.stackOrderInsideOut)
            //.order(d3.stackOrderDescending)

            let xStream = d3.scaleLinear()
                .domain(d3.extent(streamData, d => d.index))
                .range([0, width]);

            let yStream = d3.scaleLinear()
                .domain(
                    [d3.min(stack(streamData), d => d3.min(d, d => d[0])),
                    d3.max(stack(streamData), d => d3.max(d, d => d[1]))])
                .range([height / 2 - 10, 0]);


            // let yStream = d3.scaleLog()
            //     .domain(
            //         [d3.min(stack(streamData), d => d3.min(d, d => d[0]) + 1),
            //         d3.max(stack(streamData), d => d3.max(d, d => d[1]))])
            //     .range([height / 2 - 10, 0]);

            // console.log('stack(streamData):', stack(streamData))

            // Define the area generator
            const streamArea = d3.area()
                .curve(d3.curveBasis)
                .x(d => xStream(d.data.index))
                .y0(d => yStream(d[0]))
                .y1(d => yStream(d[1]));

            // Add the streamgraph layers
            streamSvg.selectAll("path")
                .data(stack(streamData))
                .join("path")
                .attr("d", streamArea)
                .attr("fill", d => colorScale(d.key));

            // Add dashes
            const lines = streamSvg.append("g");
            lines.selectAll("line")
                .data(streamData)
                .join("line")
                .attr("class", d => `line_${d.index}`)
                .attr("x1", d => xStream(d.index))
                .attr("y1", (d, i) => yStream(d3.min(stack(streamData), d => d[i][0])))
                .attr("x2", d => xStream(d.index))
                .attr("y2", (d, i) => yStream(d3.max(stack(streamData), d => d[i][1])))
                .attr("stroke", "white")
                .attr("stroke-dasharray", "5 5")
                .attr("stroke-width", d => centers.includes(d.index) ? 2 : 1)
                .attr("opacity", d => centers.includes(d.index) ? 1 : 0.5)
                .on("mouseover", (event, d) => {
                    let coordinates = [event.offsetX, event.offsetY]
                    tooltip
                        .style("left", coordinates[0] + "px")
                        .style("top", coordinates[1] + 50 + "px")
                        // tooltip
                        //     .style("left", xStream(d.index) + 10 + "px")
                        //     .style("top", height / 2 + 50 + "px")
                        .html('Tree:' + d.index + '<br>' +
                            'Ad Gains:' + d.ad.toFixed(2) + '<br>' +
                            'User Gains:' + d.user.toFixed(2) + '<br>' +
                            'Media Gains:' + d.media.toFixed(2)
                        )
                        .style("display", "inline-block");
                    event.target.setAttribute("stroke", "#434343");
                })
                .on("mouseout", (event) => { // mouseleave 不会冒泡；mouseout 会冒泡   
                    tooltip.style("display", "none");
                    event.target.setAttribute("stroke", "white");
                })
                // 决策路径
                .on("click", (event, d) => {
                    console.log('click', d)
                    const tree = svg.select(`.tree_${d.index}`);
                    console.log('tree', tree)
                    const path = getPath(sample[0], allTrees[d.index]['tree_structure']);
                    tree.selectAll(path.map(d => '#' + d))
                        .attr("opacity", 1)
                        .attr("fill", d => d.height ? color[getFeatureType(feature_names[d.data.split_feature])] : "lightgrey")
                })
        }

        // ------------------ID Label、legend-----------------------
        svg.append("text")
            .attr("x", width - 150)
            .attr("y", height - 30)
            .style("text-anchor", "left")
            .text(`Record ID: ${props.sample}`);

        // 图例legend
        const legeng_data = [
            { color: color[0], label: "ad" },
            { color: color[1], label: "user" },
            { color: color[2], label: "media" }
        ];

        // 绘制图例
        const legend = svg.append("g")
            .selectAll("g")
            .data(legeng_data)
            .join("g")
            .attr("transform", function (d, i) { return `translate(${600 + i * 80}, ${height - 50})` })

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

    }, [props.sample])

    // 更改selectedFeature后联动更新相应rect的颜色类别
    useEffect(() => {
        const feature = props.selectedFeature;
        const rect = d3.select(elementRef.current).selectAll(`.${feature}`);
        rect.attr("fill", color[getFeatureType(feature)])
            .attr("opacity", 1);
    }, [props.selectedFeature])

    return (
        <>
            <div style={{ height: '100%' }} ref={elementRef} >
                <div className="tooltip" ref={tooltipRef}></div>
            </div>
        </>
    );
}