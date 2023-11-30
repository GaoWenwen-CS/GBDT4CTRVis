
import { InputNumber, Row, Col, TreeSelect, Button } from 'antd';
import { selectData } from '../data/dataList';
import { useState } from 'react';

function ControlPanel() {

    const [value, setValue] = useState();

    const style = {
        padding: '5px 18px', //top&bottom left&right
        display: 'flex',
        alignItems: 'center',//cross axis
        justifyContent: 'center'//main axis (default row)
    };
    const onChange = (value) => {
        console.log('changed', value);
    };

    const treeData = [
        {
            value: 'Ad',
            title: (<b style={{ color: '#ffa39e' }}>Ad</b>),
            children: selectData[0]
        },
        {
            value: 'User',
            title: (<b style={{ color: '#ffd666' }}>User</b>),
            children: selectData[1]
        },
        {
            value: 'Media',
            title: (<b style={{ color: '#87e8de' }}>Media</b>),
            children: selectData[2]
        },
    ];

    return (
        <>
            <Row gutter={5}>
                <Col className="gutter-row" span={12}>
                    <div style={style}>
                        <InputNumber addonBefore={'num_leaves'} min={1} max={120} defaultValue={31} onChange={onChange} size='small' />
                    </div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <div style={style}>
                        <InputNumber addonBefore={'max_depth'} min={1} max={12} defaultValue={-1} onChange={onChange} size='small' />
                    </div>
                </Col>
            </Row>
            <Row gutter={5}>
                <Col className="gutter-row" span={12}>
                    <div style={style}>
                        <InputNumber addonBefore={'learning_rate'} min={0} max={1} defaultValue={0.1} onChange={onChange} size='small' />
                    </div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <div style={style}>
                        <InputNumber addonBefore={'n_estimators'} min={1} max={1000} defaultValue={100} onChange={onChange} size='small' />
                    </div>
                </Col>
            </Row>
            <Row gutter={5}>
                <Col className="gutter-row" span={12}>
                    <div style={style}>
                        <InputNumber addonBefore={'Clusters (K)'} min={1} max={9} defaultValue={6} onChange={onChange} size='small' />
                    </div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <div style={style}>
                        {/* <InputNumber addonBefore={'Unselected Features'} min={1} max={9} defaultValue={6} onChange={onChange} style={{ width: '220px' }} /> */}
                        <TreeSelect
                            showSearch
                            style={{ width: '100%' }}
                            value={value}
                            dropdownStyle={{
                                maxHeight: 300,
                                overflow: 'auto',
                            }}
                            placeholder="Select features to remove" //be removed
                            allowClear
                            multiple
                            onChange={(newValue) => {
                                console.log(newValue);
                                setValue(newValue);
                            }}
                            treeData={treeData}
                            size='small'
                        />
                    </div>
                </Col>


            </Row>
            <Row gutter={10}>
                <Col className="gutter-row" span={6}>
                    <div style={style}><Button type="primary" size='small'> Apply </Button></div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}><Button size='small'>AUC: 0.718</Button></div>
                </Col>
                <Col className="gutter-row" span={5}>
                    <div style={style}><Button size='small'>AUPR: 0.720</Button></div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}><Button size='small'>ACC: 0.664</Button></div>
                </Col>
            </Row>

        </>
    );

}
export default ControlPanel;
