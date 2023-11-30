import { Table, Image } from 'antd';
import featureOverviewData from '../data/featureOverviewData';
import { useLocalObservable } from 'mobx-react';
import { store } from '../store/store';
import { tableData } from '../data/dataList';
import PDP_0 from '../data/pictures/PDP_0.png';
import PDP_1 from '../data/pictures/PDP_1.png';
import PDP_2 from '../data/pictures/PDP_2.png';
import PDP_3 from '../data/pictures/PDP_3.png';
import PDP_4 from '../data/pictures/PDP_4.png';
import PDP_5 from '../data/pictures/PDP_5.png';
import PDP_6 from '../data/pictures/PDP_6.png';
import PDP_7 from '../data/pictures/PDP_7.png';
import PDP_8 from '../data/pictures/PDP_8.png';
import PDP_9 from '../data/pictures/PDP_9.png';
import PDP_10 from '../data/pictures/PDP_10.png';
import PDP_11 from '../data/pictures/PDP_11.png';
import PDP_12 from '../data/pictures/PDP_12.png';
import PDP_13 from '../data/pictures/PDP_13.png';
import PDP_14 from '../data/pictures/PDP_14.png';
import PDP_15 from '../data/pictures/PDP_15.png';
import PDP_16 from '../data/pictures/PDP_16.png';
import PDP_17 from '../data/pictures/PDP_17.png';
import PDP_18 from '../data/pictures/PDP_18.png';
import PDP_19 from '../data/pictures/PDP_19.png';
import PDP_20 from '../data/pictures/PDP_20.png';
import PDP_21 from '../data/pictures/PDP_21.png';
import PDP_22 from '../data/pictures/PDP_22.png';
import PDP_23 from '../data/pictures/PDP_23.png';
import PDP_24 from '../data/pictures/PDP_24.png';
import PDP_25 from '../data/pictures/PDP_25.png';
import PDP_26 from '../data/pictures/PDP_26.png';
import PDP_27 from '../data/pictures/PDP_27.png';
import PDP_28 from '../data/pictures/PDP_28.png';
import PDP_29 from '../data/pictures/PDP_29.png';
import PDP_30 from '../data/pictures/PDP_30.png';
import PDP_31 from '../data/pictures/PDP_31.png';
import PDP_32 from '../data/pictures/PDP_32.png';
import PDP_33 from '../data/pictures/PDP_33.png';

const PDPs = [PDP_0, PDP_1, PDP_2, PDP_3, PDP_4, PDP_5, PDP_6, PDP_7, PDP_8, PDP_9, PDP_10, PDP_11, PDP_12, PDP_13, PDP_14, PDP_15, PDP_16, PDP_17, PDP_18, PDP_19, PDP_20, PDP_21, PDP_22, PDP_23, PDP_24, PDP_25, PDP_26, PDP_27, PDP_28, PDP_29, PDP_30, PDP_31, PDP_32, PDP_33];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        align: 'center',
        filters: [
            {
                text: 'Ad',
                value: 'Ad',
                children: tableData[0]
            },
            {
                text: 'User',
                value: 'User',
                children: tableData[1]
            },
            {
                text: 'Media',
                value: 'Media',
                children: tableData[2]
            }
        ],
        filterMode: 'tree',
        filterSearch: true,
        onFilter: (value, record) => record.name.includes(value),
        width: '25%',
    },
    {
        title: 'Score',
        dataIndex: 'importance',
        align: 'center',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.importance - b.importance,
    },
    {
        title: 'PDP',
        dataIndex: 'key',
        align: 'center',
        width: '55%',
        render: (value) => (
            <Image width={200} src={PDPs[Number(value)]} />
        ),
    },
];

function FeatureOverview() {
    const myStore = useLocalObservable(() => store);

    return (
        <Table columns={columns} dataSource={featureOverviewData}
            size='small' pagination={false} scroll={{ y: 590 }}
            onRow={() => {
                return {
                    onClick: (event) => { // 点击行
                        const clickedFeature = event.target.innerText;
                        myStore.setSelectedFeature(clickedFeature);
                        console.log('selectedFeature:', myStore.selectedFeature);
                    }
                };
            }} />
    );
}
export default FeatureOverview;