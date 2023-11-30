const ad = ['task_id', 'material_id', 'creative_type', 'advertiser_id', 'developer_id', 'display_type', 'industry_name', 'display_date']

const media = ['slot_id', 'app_id', 'app_tag', 'app_first_class', 'app_second_class', 'app_size', 'app_release_time', 'app_score']

const user = ['user_id', 'age', 'city', 'city_rank', 'device_name', 'device_size', 'career', 'gender', 'net_type', 'residence', 'emui_version', 'device_release_time', 'device_price', 'lifecycle', 'membership_grade', 'membership_lifecycle', 'purchase_tag', 'daily_active_time']

let columns = [
    {
        title: 'Record ID',
        dataIndex: 'key',
        align: 'center',
        width: 100,
    },
    {
        title: 'Probability',
        dataIndex: 'probability',
        align: 'center',
        width: 110,
        className: 'probability'
    },
    {
        title: 'Label',
        dataIndex: 'label',
        align: 'center',
    },

]

let adTable = [], adSelect = [];
for (let i = 0; i < ad.length; i++) {
    let obj = {
        title: ad[i],
        dataIndex: ad[i],
        align: 'center',
        className: 'ad_col'
    }
    columns.push(obj);

    let objT = {
        text: ad[i],
        value: ad[i]
    }
    adTable.push(objT);

    let objS = {
        value: ad[i],
        title: ad[i]
    }
    adSelect.push(objS);
}

let userTable = [], userSelect = [];
for (let i = 0; i < user.length; i++) {
    let obj = {
        title: user[i],
        dataIndex: user[i],
        align: 'center',
        className: 'user_col'
    }
    columns.push(obj);

    let objT = {
        text: user[i],
        value: user[i]
    }
    userTable.push(objT);

    let objS = {
        value: user[i],
        title: user[i]
    }
    userSelect.push(objS);
}

let mediaTable = [], mediaSelect = [];
for (let i = 0; i < media.length; i++) {
    let obj = {
        title: media[i],
        dataIndex: media[i],
        align: 'center',
        className: 'media_col'
    }
    columns.push(obj);

    let objT = {
        text: media[i],
        value: media[i]
    }
    mediaTable.push(objT);

    let objS = {
        value: media[i],
        title: media[i]
    }
    mediaSelect.push(objS);
}

const tableData = [adTable, userTable, mediaTable];
const selectData = [adSelect, userSelect, mediaSelect];

export { columns, tableData, selectData };