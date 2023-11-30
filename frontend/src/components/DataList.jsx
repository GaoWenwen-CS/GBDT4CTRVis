import '../styles/dataList.css';
import * as d3 from 'd3';
import { Table } from 'antd';
import { columns } from '../data/dataList';
import { data5000 } from '../data/dataListData5000';
import { Observer, useLocalObservable } from 'mobx-react';
import { store } from '../store/store';
import { useEffect } from 'react';

function DataList() {
    const myStore = useLocalObservable(() => store);
    return (
        <Observer>{() =>
            <MyTable keys={myStore.keys} store={myStore}></MyTable>
        }
        </Observer>
    )
}
export default DataList;

function MyTable(props) {
    const myStore = props.store;
    const keys = props.keys;

    const color = d3.interpolateBrBG; //使用 interpolateBrBG 插值来设置颜色比例尺（单元格背景颜色根据数据的概率值进行插值映射）

    //根据传入的keys筛选出符合条件的数据，存储在data数组中。
    let data = [];
    if (keys) {
        data5000.forEach(d => {
            if (keys.includes(d.key)) data.push(d);
        })
    }

    //处理表格单元格的样式，根据概率值设置背景颜色
    //通过D3.js选中所有类名为.probability的元素，然后根据概率值设置其样式，包括文本居中和背景颜色
    useEffect(() => {
        const firstCol = d3.selectAll('.probability'); 
        const firstCols = firstCol._groups[0];
        //console.log('col', firstCol, firstCols)
        for (let i = 1; i < firstCols.length; i++) {
            let e = firstCols[i];
            let probability = Number(e.innerText);
            e.setAttribute("style", `text-align: center; background-color: ${color(probability)}`);
        }
    })

    /* 
    返回一个Table组件，其中包含了一些属性设置，包括：
    列定义(columns)、数据源(dataSource)、表格大小(size)、分页设置(pagination)、滚动设置(scroll)以及行点击事件(onRow)。
    点击行时，将触发一个事件，将点击的样本值存储在myStore.sample中。
    */
    return (
        <Table columns={columns} dataSource={data}
            size='small' pagination={false}
            scroll={{
                x: 2800,
                y: 200,
            }}
            onRow={() => {
                return {
                    onClick: (event) => { // 点击行
                        const sample = event.target.innerText;
                        myStore.setSample(sample);
                        console.log('sample:', myStore.sample);
                    }
                };
            }}
        />
    );
}