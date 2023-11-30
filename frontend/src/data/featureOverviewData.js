const feature_importances = {
    "task_id": 519,
    "material_id": 507,
    "creative_type": 64,
    "advertiser_id": 227,
    "developer_id": 107,
    "display_type": 70,
    "slot_id": 241,
    "app_id": 184,
    "app_tag": 64,
    "app_first_class": 11,
    "app_second_class": 53,
    "age": 145,
    "city": 16,
    "city_rank": 19,
    "device_name": 51,
    "device_size": 28,
    "career": 38,
    "gender": 26,
    "net_type": 63,
    "residence": 33,
    "app_size": 93,
    "app_release_time": 18,
    "app_score": 12,
    "emui_version": 62,
    "device_release_time": 37,
    "device_price": 88,
    "lifecycle": 24,
    "membership_grade": 8,
    "purchase_tag": 17,
    "daily_active_time": 32,
    "industry_name": 88,
    "display_date": 55
}

const feature_names = ['user_id', 'task_id', 'material_id', 'creative_type', 'advertiser_id',
    'developer_id', 'display_type', 'slot_id', 'app_id', 'app_tag',
    'app_first_class', 'app_second_class', 'age', 'city', 'city_rank',
    'device_name', 'device_size', 'career', 'gender', 'net_type',
    'residence', 'app_size', 'app_release_time', 'app_score',
    'emui_version', 'device_release_time', 'device_price', 'lifecycle',
    'membership_grade', 'membership_lifecycle', 'purchase_tag',
    'daily_active_time', 'industry_name', 'display_date']

const featureOverviewData = []
for (let i = 0; i < feature_names.length; i++) {
    let feature = feature_names[i];
    let obj = {
        key: String(i),
        name: feature,
        importance: feature_importances[feature] ? feature_importances[feature] : 0,
    }
    featureOverviewData.push(obj);
}

export default featureOverviewData;