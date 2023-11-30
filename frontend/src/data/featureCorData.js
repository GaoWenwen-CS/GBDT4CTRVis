const allCor = {
    "nodes": [
        {
            "id": "task_id",
            "group": 1
        },
        {
            "id": "material_id",
            "group": 1
        },
        {
            "id": "creative_type",
            "group": 1
        },
        {
            "id": "advertiser_id",
            "group": 1
        },
        {
            "id": "developer_id",
            "group": 1
        },
        {
            "id": "display_type",
            "group": 1
        },
        {
            "id": "industry_name",
            "group": 1
        },
        {
            "id": "display_date",
            "group": 1
        },
        {
            "id": "user_id",
            "group": 2
        },
        {
            "id": "age",
            "group": 2
        },
        {
            "id": "city",
            "group": 2
        },
        {
            "id": "city_rank",
            "group": 2
        },
        {
            "id": "device_name",
            "group": 2
        },
        {
            "id": "device_size",
            "group": 2
        },
        {
            "id": "career",
            "group": 2
        },
        {
            "id": "gender",
            "group": 2
        },
        {
            "id": "net_type",
            "group": 2
        },
        {
            "id": "residence",
            "group": 2
        },
        {
            "id": "emui_version",
            "group": 2
        },
        {
            "id": "device_release_time",
            "group": 2
        },
        {
            "id": "device_price",
            "group": 2
        },
        {
            "id": "lifecycle",
            "group": 2
        },
        {
            "id": "membership_grade",
            "group": 2
        },
        {
            "id": "membership_lifecycle",
            "group": 2
        },
        {
            "id": "purchase_tag",
            "group": 2
        },
        {
            "id": "daily_active_time",
            "group": 2
        },
        {
            "id": "slot_id",
            "group": 3
        },
        {
            "id": "app_id",
            "group": 3
        },
        {
            "id": "app_tag",
            "group": 3
        },
        {
            "id": "app_first_class",
            "group": 3
        },
        {
            "id": "app_second_class",
            "group": 3
        },
        {
            "id": "app_size",
            "group": 3
        },
        {
            "id": "app_release_time",
            "group": 3
        },
        {
            "id": "app_score",
            "group": 3
        }
    ],
    "links": [
        {
            "source": "material_id",
            "target": "task_id",
            "value": -0.12
        },
        {
            "source": "creative_type",
            "target": "task_id",
            "value": -0.04
        },
        {
            "source": "creative_type",
            "target": "material_id",
            "value": 0.12
        },
        {
            "source": "advertiser_id",
            "target": "task_id",
            "value": 0.03
        },
        {
            "source": "advertiser_id",
            "target": "material_id",
            "value": 0.28
        },
        {
            "source": "advertiser_id",
            "target": "creative_type",
            "value": 0.15
        },
        {
            "source": "developer_id",
            "target": "task_id",
            "value": -0.06
        },
        {
            "source": "developer_id",
            "target": "material_id",
            "value": -0.2
        },
        {
            "source": "developer_id",
            "target": "creative_type",
            "value": -0.52
        },
        {
            "source": "developer_id",
            "target": "advertiser_id",
            "value": -0.25
        },
        {
            "source": "display_type",
            "target": "task_id",
            "value": 0.02
        },
        {
            "source": "display_type",
            "target": "material_id",
            "value": 0.15
        },
        {
            "source": "display_type",
            "target": "creative_type",
            "value": 0.74
        },
        {
            "source": "display_type",
            "target": "advertiser_id",
            "value": 0.28
        },
        {
            "source": "display_type",
            "target": "developer_id",
            "value": -0.61
        },
        {
            "source": "industry_name",
            "target": "task_id",
            "value": -0.08
        },
        {
            "source": "industry_name",
            "target": "material_id",
            "value": -0.2
        },
        {
            "source": "industry_name",
            "target": "creative_type",
            "value": -0.33
        },
        {
            "source": "industry_name",
            "target": "advertiser_id",
            "value": -0.47
        },
        {
            "source": "industry_name",
            "target": "developer_id",
            "value": 0.27
        },
        {
            "source": "industry_name",
            "target": "display_type",
            "value": -0.37
        },
        {
            "source": "display_date",
            "target": "task_id",
            "value": -0.02
        },
        {
            "source": "display_date",
            "target": "material_id",
            "value": 0.12
        },
        {
            "source": "display_date",
            "target": "creative_type",
            "value": 0.04
        },
        {
            "source": "display_date",
            "target": "advertiser_id",
            "value": 0.06
        },
        {
            "source": "display_date",
            "target": "developer_id",
            "value": -0.06
        },
        {
            "source": "display_date",
            "target": "display_type",
            "value": 0.04
        },
        {
            "source": "display_date",
            "target": "industry_name",
            "value": -0.03
        },
        {
            "source": "user_id",
            "target": "task_id",
            "value": 0.02
        },
        {
            "source": "user_id",
            "target": "material_id",
            "value": -0.01
        },
        {
            "source": "user_id",
            "target": "creative_type",
            "value": -0.02
        },
        {
            "source": "user_id",
            "target": "advertiser_id",
            "value": 0.0
        },
        {
            "source": "user_id",
            "target": "developer_id",
            "value": 0.01
        },
        {
            "source": "user_id",
            "target": "display_type",
            "value": -0.01
        },
        {
            "source": "user_id",
            "target": "industry_name",
            "value": -0.0
        },
        {
            "source": "user_id",
            "target": "display_date",
            "value": -0.0
        },
        {
            "source": "age",
            "target": "task_id",
            "value": -0.13
        },
        {
            "source": "age",
            "target": "material_id",
            "value": 0.06
        },
        {
            "source": "age",
            "target": "creative_type",
            "value": 0.02
        },
        {
            "source": "age",
            "target": "advertiser_id",
            "value": 0.01
        },
        {
            "source": "age",
            "target": "developer_id",
            "value": -0.02
        },
        {
            "source": "age",
            "target": "display_type",
            "value": 0.03
        },
        {
            "source": "age",
            "target": "industry_name",
            "value": 0.05
        },
        {
            "source": "age",
            "target": "display_date",
            "value": 0.14
        },
        {
            "source": "age",
            "target": "user_id",
            "value": -0.01
        },
        {
            "source": "city",
            "target": "task_id",
            "value": 0.02
        },
        {
            "source": "city",
            "target": "material_id",
            "value": 0.0
        },
        {
            "source": "city",
            "target": "creative_type",
            "value": 0.03
        },
        {
            "source": "city",
            "target": "advertiser_id",
            "value": 0.04
        },
        {
            "source": "city",
            "target": "developer_id",
            "value": -0.05
        },
        {
            "source": "city",
            "target": "display_type",
            "value": 0.05
        },
        {
            "source": "city",
            "target": "industry_name",
            "value": -0.06
        },
        {
            "source": "city",
            "target": "display_date",
            "value": -0.02
        },
        {
            "source": "city",
            "target": "user_id",
            "value": -0.01
        },
        {
            "source": "city",
            "target": "age",
            "value": 0.01
        },
        {
            "source": "city_rank",
            "target": "task_id",
            "value": -0.04
        },
        {
            "source": "city_rank",
            "target": "material_id",
            "value": -0.06
        },
        {
            "source": "city_rank",
            "target": "creative_type",
            "value": -0.16
        },
        {
            "source": "city_rank",
            "target": "advertiser_id",
            "value": -0.17
        },
        {
            "source": "city_rank",
            "target": "developer_id",
            "value": 0.26
        },
        {
            "source": "city_rank",
            "target": "display_type",
            "value": -0.22
        },
        {
            "source": "city_rank",
            "target": "industry_name",
            "value": 0.17
        },
        {
            "source": "city_rank",
            "target": "display_date",
            "value": 0.05
        },
        {
            "source": "city_rank",
            "target": "user_id",
            "value": -0.0
        },
        {
            "source": "city_rank",
            "target": "age",
            "value": 0.11
        },
        {
            "source": "city_rank",
            "target": "city",
            "value": -0.06
        },
        {
            "source": "device_name",
            "target": "task_id",
            "value": -0.01
        },
        {
            "source": "device_name",
            "target": "material_id",
            "value": -0.02
        },
        {
            "source": "device_name",
            "target": "creative_type",
            "value": 0.01
        },
        {
            "source": "device_name",
            "target": "advertiser_id",
            "value": -0.02
        },
        {
            "source": "device_name",
            "target": "developer_id",
            "value": 0.0
        },
        {
            "source": "device_name",
            "target": "display_type",
            "value": 0.01
        },
        {
            "source": "device_name",
            "target": "industry_name",
            "value": 0.01
        },
        {
            "source": "device_name",
            "target": "display_date",
            "value": 0.03
        },
        {
            "source": "device_name",
            "target": "user_id",
            "value": 0.0
        },
        {
            "source": "device_name",
            "target": "age",
            "value": 0.0
        },
        {
            "source": "device_name",
            "target": "city",
            "value": -0.02
        },
        {
            "source": "device_name",
            "target": "city_rank",
            "value": -0.0
        },
        {
            "source": "device_size",
            "target": "task_id",
            "value": -0.02
        },
        {
            "source": "device_size",
            "target": "material_id",
            "value": 0.04
        },
        {
            "source": "device_size",
            "target": "creative_type",
            "value": 0.04
        },
        {
            "source": "device_size",
            "target": "advertiser_id",
            "value": 0.11
        },
        {
            "source": "device_size",
            "target": "developer_id",
            "value": -0.11
        },
        {
            "source": "device_size",
            "target": "display_type",
            "value": 0.04
        },
        {
            "source": "device_size",
            "target": "industry_name",
            "value": -0.07
        },
        {
            "source": "device_size",
            "target": "display_date",
            "value": -0.02
        },
        {
            "source": "device_size",
            "target": "user_id",
            "value": -0.0
        },
        {
            "source": "device_size",
            "target": "age",
            "value": 0.09
        },
        {
            "source": "device_size",
            "target": "city",
            "value": -0.01
        },
        {
            "source": "device_size",
            "target": "city_rank",
            "value": -0.12
        },
        {
            "source": "device_size",
            "target": "device_name",
            "value": -0.08
        },
        {
            "source": "career",
            "target": "task_id",
            "value": -0.01
        },
        {
            "source": "career",
            "target": "material_id",
            "value": 0.08
        },
        {
            "source": "career",
            "target": "creative_type",
            "value": 0.18
        },
        {
            "source": "career",
            "target": "advertiser_id",
            "value": 0.18
        },
        {
            "source": "career",
            "target": "developer_id",
            "value": -0.23
        },
        {
            "source": "career",
            "target": "display_type",
            "value": 0.23
        },
        {
            "source": "career",
            "target": "industry_name",
            "value": -0.19
        },
        {
            "source": "career",
            "target": "display_date",
            "value": -0.04
        },
        {
            "source": "career",
            "target": "user_id",
            "value": -0.01
        },
        {
            "source": "career",
            "target": "age",
            "value": 0.19
        },
        {
            "source": "career",
            "target": "city",
            "value": 0.04
        },
        {
            "source": "career",
            "target": "city_rank",
            "value": -0.25
        },
        {
            "source": "career",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "career",
            "target": "device_size",
            "value": 0.17
        },
        {
            "source": "gender",
            "target": "task_id",
            "value": 0.03
        },
        {
            "source": "gender",
            "target": "material_id",
            "value": 0.07
        },
        {
            "source": "gender",
            "target": "creative_type",
            "value": 0.07
        },
        {
            "source": "gender",
            "target": "advertiser_id",
            "value": 0.07
        },
        {
            "source": "gender",
            "target": "developer_id",
            "value": -0.11
        },
        {
            "source": "gender",
            "target": "display_type",
            "value": 0.09
        },
        {
            "source": "gender",
            "target": "industry_name",
            "value": -0.11
        },
        {
            "source": "gender",
            "target": "display_date",
            "value": 0.0
        },
        {
            "source": "gender",
            "target": "user_id",
            "value": -0.01
        },
        {
            "source": "gender",
            "target": "age",
            "value": -0.23
        },
        {
            "source": "gender",
            "target": "city",
            "value": 0.04
        },
        {
            "source": "gender",
            "target": "city_rank",
            "value": -0.17
        },
        {
            "source": "gender",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "gender",
            "target": "device_size",
            "value": 0.02
        },
        {
            "source": "gender",
            "target": "career",
            "value": 0.08
        },
        {
            "source": "net_type",
            "target": "task_id",
            "value": -0.05
        },
        {
            "source": "net_type",
            "target": "material_id",
            "value": -0.11
        },
        {
            "source": "net_type",
            "target": "creative_type",
            "value": -0.43
        },
        {
            "source": "net_type",
            "target": "advertiser_id",
            "value": -0.2
        },
        {
            "source": "net_type",
            "target": "developer_id",
            "value": 0.35
        },
        {
            "source": "net_type",
            "target": "display_type",
            "value": -0.52
        },
        {
            "source": "net_type",
            "target": "industry_name",
            "value": 0.3
        },
        {
            "source": "net_type",
            "target": "display_date",
            "value": -0.08
        },
        {
            "source": "net_type",
            "target": "user_id",
            "value": 0.0
        },
        {
            "source": "net_type",
            "target": "age",
            "value": -0.03
        },
        {
            "source": "net_type",
            "target": "city",
            "value": -0.02
        },
        {
            "source": "net_type",
            "target": "city_rank",
            "value": 0.11
        },
        {
            "source": "net_type",
            "target": "device_name",
            "value": 0.01
        },
        {
            "source": "net_type",
            "target": "device_size",
            "value": -0.02
        },
        {
            "source": "net_type",
            "target": "career",
            "value": -0.13
        },
        {
            "source": "net_type",
            "target": "gender",
            "value": -0.12
        },
        {
            "source": "residence",
            "target": "task_id",
            "value": -0.03
        },
        {
            "source": "residence",
            "target": "material_id",
            "value": 0.05
        },
        {
            "source": "residence",
            "target": "creative_type",
            "value": -0.02
        },
        {
            "source": "residence",
            "target": "advertiser_id",
            "value": 0.02
        },
        {
            "source": "residence",
            "target": "developer_id",
            "value": -0.01
        },
        {
            "source": "residence",
            "target": "display_type",
            "value": -0.01
        },
        {
            "source": "residence",
            "target": "industry_name",
            "value": 0.05
        },
        {
            "source": "residence",
            "target": "display_date",
            "value": 0.03
        },
        {
            "source": "residence",
            "target": "user_id",
            "value": -0.02
        },
        {
            "source": "residence",
            "target": "age",
            "value": 0.2
        },
        {
            "source": "residence",
            "target": "city",
            "value": -0.04
        },
        {
            "source": "residence",
            "target": "city_rank",
            "value": 0.01
        },
        {
            "source": "residence",
            "target": "device_name",
            "value": 0.0
        },
        {
            "source": "residence",
            "target": "device_size",
            "value": -0.02
        },
        {
            "source": "residence",
            "target": "career",
            "value": -0.05
        },
        {
            "source": "residence",
            "target": "gender",
            "value": -0.07
        },
        {
            "source": "residence",
            "target": "net_type",
            "value": -0.0
        },
        {
            "source": "emui_version",
            "target": "task_id",
            "value": 0.02
        },
        {
            "source": "emui_version",
            "target": "material_id",
            "value": -0.06
        },
        {
            "source": "emui_version",
            "target": "creative_type",
            "value": -0.08
        },
        {
            "source": "emui_version",
            "target": "advertiser_id",
            "value": -0.09
        },
        {
            "source": "emui_version",
            "target": "developer_id",
            "value": 0.1
        },
        {
            "source": "emui_version",
            "target": "display_type",
            "value": -0.11
        },
        {
            "source": "emui_version",
            "target": "industry_name",
            "value": 0.04
        },
        {
            "source": "emui_version",
            "target": "display_date",
            "value": 0.03
        },
        {
            "source": "emui_version",
            "target": "user_id",
            "value": 0.0
        },
        {
            "source": "emui_version",
            "target": "age",
            "value": -0.13
        },
        {
            "source": "emui_version",
            "target": "city",
            "value": -0.02
        },
        {
            "source": "emui_version",
            "target": "city_rank",
            "value": 0.06
        },
        {
            "source": "emui_version",
            "target": "device_name",
            "value": 0.33
        },
        {
            "source": "emui_version",
            "target": "device_size",
            "value": -0.14
        },
        {
            "source": "emui_version",
            "target": "career",
            "value": -0.11
        },
        {
            "source": "emui_version",
            "target": "gender",
            "value": 0.03
        },
        {
            "source": "emui_version",
            "target": "net_type",
            "value": 0.07
        },
        {
            "source": "emui_version",
            "target": "residence",
            "value": -0.05
        },
        {
            "source": "device_release_time",
            "target": "task_id",
            "value": -0.01
        },
        {
            "source": "device_release_time",
            "target": "material_id",
            "value": 0.04
        },
        {
            "source": "device_release_time",
            "target": "creative_type",
            "value": 0.08
        },
        {
            "source": "device_release_time",
            "target": "advertiser_id",
            "value": 0.08
        },
        {
            "source": "device_release_time",
            "target": "developer_id",
            "value": -0.09
        },
        {
            "source": "device_release_time",
            "target": "display_type",
            "value": 0.12
        },
        {
            "source": "device_release_time",
            "target": "industry_name",
            "value": -0.03
        },
        {
            "source": "device_release_time",
            "target": "display_date",
            "value": 0.03
        },
        {
            "source": "device_release_time",
            "target": "user_id",
            "value": 0.01
        },
        {
            "source": "device_release_time",
            "target": "age",
            "value": 0.13
        },
        {
            "source": "device_release_time",
            "target": "city",
            "value": -0.02
        },
        {
            "source": "device_release_time",
            "target": "city_rank",
            "value": 0.06
        },
        {
            "source": "device_release_time",
            "target": "device_name",
            "value": 0.13
        },
        {
            "source": "device_release_time",
            "target": "device_size",
            "value": 0.17
        },
        {
            "source": "device_release_time",
            "target": "career",
            "value": 0.07
        },
        {
            "source": "device_release_time",
            "target": "gender",
            "value": -0.04
        },
        {
            "source": "device_release_time",
            "target": "net_type",
            "value": -0.06
        },
        {
            "source": "device_release_time",
            "target": "residence",
            "value": 0.2
        },
        {
            "source": "device_release_time",
            "target": "emui_version",
            "value": -0.14
        },
        {
            "source": "device_price",
            "target": "task_id",
            "value": -0.04
        },
        {
            "source": "device_price",
            "target": "material_id",
            "value": -0.11
        },
        {
            "source": "device_price",
            "target": "creative_type",
            "value": -0.26
        },
        {
            "source": "device_price",
            "target": "advertiser_id",
            "value": -0.22
        },
        {
            "source": "device_price",
            "target": "developer_id",
            "value": 0.34
        },
        {
            "source": "device_price",
            "target": "display_type",
            "value": -0.33
        },
        {
            "source": "device_price",
            "target": "industry_name",
            "value": 0.24
        },
        {
            "source": "device_price",
            "target": "display_date",
            "value": 0.01
        },
        {
            "source": "device_price",
            "target": "user_id",
            "value": -0.0
        },
        {
            "source": "device_price",
            "target": "age",
            "value": -0.04
        },
        {
            "source": "device_price",
            "target": "city",
            "value": -0.08
        },
        {
            "source": "device_price",
            "target": "city_rank",
            "value": 0.38
        },
        {
            "source": "device_price",
            "target": "device_name",
            "value": 0.02
        },
        {
            "source": "device_price",
            "target": "device_size",
            "value": -0.18
        },
        {
            "source": "device_price",
            "target": "career",
            "value": -0.43
        },
        {
            "source": "device_price",
            "target": "gender",
            "value": -0.16
        },
        {
            "source": "device_price",
            "target": "net_type",
            "value": 0.21
        },
        {
            "source": "device_price",
            "target": "residence",
            "value": 0.11
        },
        {
            "source": "device_price",
            "target": "emui_version",
            "value": 0.39
        },
        {
            "source": "device_price",
            "target": "device_release_time",
            "value": -0.06
        },
        {
            "source": "lifecycle",
            "target": "task_id",
            "value": 0.01
        },
        {
            "source": "lifecycle",
            "target": "material_id",
            "value": -0.08
        },
        {
            "source": "lifecycle",
            "target": "creative_type",
            "value": -0.16
        },
        {
            "source": "lifecycle",
            "target": "advertiser_id",
            "value": -0.13
        },
        {
            "source": "lifecycle",
            "target": "developer_id",
            "value": 0.21
        },
        {
            "source": "lifecycle",
            "target": "display_type",
            "value": -0.19
        },
        {
            "source": "lifecycle",
            "target": "industry_name",
            "value": 0.16
        },
        {
            "source": "lifecycle",
            "target": "display_date",
            "value": 0.02
        },
        {
            "source": "lifecycle",
            "target": "user_id",
            "value": 0.01
        },
        {
            "source": "lifecycle",
            "target": "age",
            "value": -0.08
        },
        {
            "source": "lifecycle",
            "target": "city",
            "value": -0.06
        },
        {
            "source": "lifecycle",
            "target": "city_rank",
            "value": 0.25
        },
        {
            "source": "lifecycle",
            "target": "device_name",
            "value": 0.01
        },
        {
            "source": "lifecycle",
            "target": "device_size",
            "value": -0.17
        },
        {
            "source": "lifecycle",
            "target": "career",
            "value": -0.38
        },
        {
            "source": "lifecycle",
            "target": "gender",
            "value": -0.13
        },
        {
            "source": "lifecycle",
            "target": "net_type",
            "value": 0.13
        },
        {
            "source": "lifecycle",
            "target": "residence",
            "value": 0.06
        },
        {
            "source": "lifecycle",
            "target": "emui_version",
            "value": 0.15
        },
        {
            "source": "lifecycle",
            "target": "device_release_time",
            "value": -0.06
        },
        {
            "source": "lifecycle",
            "target": "device_price",
            "value": 0.44
        },
        {
            "source": "membership_grade",
            "target": "task_id",
            "value": -0.01
        },
        {
            "source": "membership_grade",
            "target": "material_id",
            "value": -0.05
        },
        {
            "source": "membership_grade",
            "target": "creative_type",
            "value": -0.07
        },
        {
            "source": "membership_grade",
            "target": "advertiser_id",
            "value": -0.09
        },
        {
            "source": "membership_grade",
            "target": "developer_id",
            "value": 0.11
        },
        {
            "source": "membership_grade",
            "target": "display_type",
            "value": -0.11
        },
        {
            "source": "membership_grade",
            "target": "industry_name",
            "value": 0.07
        },
        {
            "source": "membership_grade",
            "target": "display_date",
            "value": -0.01
        },
        {
            "source": "membership_grade",
            "target": "user_id",
            "value": 0.01
        },
        {
            "source": "membership_grade",
            "target": "age",
            "value": -0.05
        },
        {
            "source": "membership_grade",
            "target": "city",
            "value": -0.04
        },
        {
            "source": "membership_grade",
            "target": "city_rank",
            "value": 0.11
        },
        {
            "source": "membership_grade",
            "target": "device_name",
            "value": 0.04
        },
        {
            "source": "membership_grade",
            "target": "device_size",
            "value": -0.06
        },
        {
            "source": "membership_grade",
            "target": "career",
            "value": -0.19
        },
        {
            "source": "membership_grade",
            "target": "gender",
            "value": -0.12
        },
        {
            "source": "membership_grade",
            "target": "net_type",
            "value": 0.07
        },
        {
            "source": "membership_grade",
            "target": "residence",
            "value": -0.01
        },
        {
            "source": "membership_grade",
            "target": "emui_version",
            "value": 0.09
        },
        {
            "source": "membership_grade",
            "target": "device_release_time",
            "value": -0.03
        },
        {
            "source": "membership_grade",
            "target": "device_price",
            "value": 0.23
        },
        {
            "source": "membership_grade",
            "target": "lifecycle",
            "value": 0.42
        },
        {
            "source": "membership_lifecycle",
            "target": "task_id",
            "value": -0.02
        },
        {
            "source": "membership_lifecycle",
            "target": "material_id",
            "value": 0.0
        },
        {
            "source": "membership_lifecycle",
            "target": "creative_type",
            "value": -0.02
        },
        {
            "source": "membership_lifecycle",
            "target": "advertiser_id",
            "value": -0.0
        },
        {
            "source": "membership_lifecycle",
            "target": "developer_id",
            "value": 0.02
        },
        {
            "source": "membership_lifecycle",
            "target": "display_type",
            "value": -0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "industry_name",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "display_date",
            "value": -0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "user_id",
            "value": 0.02
        },
        {
            "source": "membership_lifecycle",
            "target": "age",
            "value": 0.0
        },
        {
            "source": "membership_lifecycle",
            "target": "city",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "city_rank",
            "value": -0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "device_name",
            "value": 0.02
        },
        {
            "source": "membership_lifecycle",
            "target": "device_size",
            "value": -0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "career",
            "value": -0.0
        },
        {
            "source": "membership_lifecycle",
            "target": "gender",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "net_type",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "residence",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "emui_version",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "device_release_time",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "device_price",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "lifecycle",
            "value": 0.04
        },
        {
            "source": "membership_lifecycle",
            "target": "membership_grade",
            "value": 0.12
        },
        {
            "source": "purchase_tag",
            "target": "task_id",
            "value": 0.04
        },
        {
            "source": "purchase_tag",
            "target": "material_id",
            "value": -0.01
        },
        {
            "source": "purchase_tag",
            "target": "creative_type",
            "value": -0.06
        },
        {
            "source": "purchase_tag",
            "target": "advertiser_id",
            "value": -0.0
        },
        {
            "source": "purchase_tag",
            "target": "developer_id",
            "value": 0.07
        },
        {
            "source": "purchase_tag",
            "target": "display_type",
            "value": -0.07
        },
        {
            "source": "purchase_tag",
            "target": "industry_name",
            "value": 0.05
        },
        {
            "source": "purchase_tag",
            "target": "display_date",
            "value": -0.01
        },
        {
            "source": "purchase_tag",
            "target": "user_id",
            "value": -0.0
        },
        {
            "source": "purchase_tag",
            "target": "age",
            "value": -0.08
        },
        {
            "source": "purchase_tag",
            "target": "city",
            "value": -0.01
        },
        {
            "source": "purchase_tag",
            "target": "city_rank",
            "value": 0.05
        },
        {
            "source": "purchase_tag",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "purchase_tag",
            "target": "device_size",
            "value": -0.04
        },
        {
            "source": "purchase_tag",
            "target": "career",
            "value": -0.14
        },
        {
            "source": "purchase_tag",
            "target": "gender",
            "value": -0.07
        },
        {
            "source": "purchase_tag",
            "target": "net_type",
            "value": 0.06
        },
        {
            "source": "purchase_tag",
            "target": "residence",
            "value": -0.01
        },
        {
            "source": "purchase_tag",
            "target": "emui_version",
            "value": 0.02
        },
        {
            "source": "purchase_tag",
            "target": "device_release_time",
            "value": -0.02
        },
        {
            "source": "purchase_tag",
            "target": "device_price",
            "value": 0.17
        },
        {
            "source": "purchase_tag",
            "target": "lifecycle",
            "value": 0.27
        },
        {
            "source": "purchase_tag",
            "target": "membership_grade",
            "value": 0.14
        },
        {
            "source": "purchase_tag",
            "target": "membership_lifecycle",
            "value": -0.01
        },
        {
            "source": "daily_active_time",
            "target": "task_id",
            "value": -0.04
        },
        {
            "source": "daily_active_time",
            "target": "material_id",
            "value": -0.04
        },
        {
            "source": "daily_active_time",
            "target": "creative_type",
            "value": -0.12
        },
        {
            "source": "daily_active_time",
            "target": "advertiser_id",
            "value": -0.11
        },
        {
            "source": "daily_active_time",
            "target": "developer_id",
            "value": 0.17
        },
        {
            "source": "daily_active_time",
            "target": "display_type",
            "value": -0.13
        },
        {
            "source": "daily_active_time",
            "target": "industry_name",
            "value": 0.15
        },
        {
            "source": "daily_active_time",
            "target": "display_date",
            "value": 0.05
        },
        {
            "source": "daily_active_time",
            "target": "user_id",
            "value": -0.01
        },
        {
            "source": "daily_active_time",
            "target": "age",
            "value": 0.16
        },
        {
            "source": "daily_active_time",
            "target": "city",
            "value": -0.05
        },
        {
            "source": "daily_active_time",
            "target": "city_rank",
            "value": 0.23
        },
        {
            "source": "daily_active_time",
            "target": "device_name",
            "value": 0.01
        },
        {
            "source": "daily_active_time",
            "target": "device_size",
            "value": -0.15
        },
        {
            "source": "daily_active_time",
            "target": "career",
            "value": -0.25
        },
        {
            "source": "daily_active_time",
            "target": "gender",
            "value": -0.19
        },
        {
            "source": "daily_active_time",
            "target": "net_type",
            "value": 0.07
        },
        {
            "source": "daily_active_time",
            "target": "residence",
            "value": 0.11
        },
        {
            "source": "daily_active_time",
            "target": "emui_version",
            "value": 0.02
        },
        {
            "source": "daily_active_time",
            "target": "device_release_time",
            "value": 0.01
        },
        {
            "source": "daily_active_time",
            "target": "device_price",
            "value": 0.34
        },
        {
            "source": "daily_active_time",
            "target": "lifecycle",
            "value": 0.3
        },
        {
            "source": "daily_active_time",
            "target": "membership_grade",
            "value": 0.12
        },
        {
            "source": "daily_active_time",
            "target": "membership_lifecycle",
            "value": -0.0
        },
        {
            "source": "daily_active_time",
            "target": "purchase_tag",
            "value": 0.08
        },
        {
            "source": "slot_id",
            "target": "task_id",
            "value": -0.0
        },
        {
            "source": "slot_id",
            "target": "material_id",
            "value": -0.07
        },
        {
            "source": "slot_id",
            "target": "creative_type",
            "value": -0.04
        },
        {
            "source": "slot_id",
            "target": "advertiser_id",
            "value": -0.18
        },
        {
            "source": "slot_id",
            "target": "developer_id",
            "value": 0.13
        },
        {
            "source": "slot_id",
            "target": "display_type",
            "value": 0.01
        },
        {
            "source": "slot_id",
            "target": "industry_name",
            "value": 0.11
        },
        {
            "source": "slot_id",
            "target": "display_date",
            "value": 0.03
        },
        {
            "source": "slot_id",
            "target": "user_id",
            "value": 0.02
        },
        {
            "source": "slot_id",
            "target": "age",
            "value": -0.11
        },
        {
            "source": "slot_id",
            "target": "city",
            "value": -0.03
        },
        {
            "source": "slot_id",
            "target": "city_rank",
            "value": 0.14
        },
        {
            "source": "slot_id",
            "target": "device_name",
            "value": 0.04
        },
        {
            "source": "slot_id",
            "target": "device_size",
            "value": -0.2
        },
        {
            "source": "slot_id",
            "target": "career",
            "value": -0.25
        },
        {
            "source": "slot_id",
            "target": "gender",
            "value": -0.08
        },
        {
            "source": "slot_id",
            "target": "net_type",
            "value": -0.02
        },
        {
            "source": "slot_id",
            "target": "residence",
            "value": -0.01
        },
        {
            "source": "slot_id",
            "target": "emui_version",
            "value": 0.07
        },
        {
            "source": "slot_id",
            "target": "device_release_time",
            "value": -0.06
        },
        {
            "source": "slot_id",
            "target": "device_price",
            "value": 0.21
        },
        {
            "source": "slot_id",
            "target": "lifecycle",
            "value": 0.19
        },
        {
            "source": "slot_id",
            "target": "membership_grade",
            "value": 0.09
        },
        {
            "source": "slot_id",
            "target": "membership_lifecycle",
            "value": -0.01
        },
        {
            "source": "slot_id",
            "target": "purchase_tag",
            "value": 0.07
        },
        {
            "source": "slot_id",
            "target": "daily_active_time",
            "value": 0.16
        },
        {
            "source": "app_id",
            "target": "task_id",
            "value": -0.06
        },
        {
            "source": "app_id",
            "target": "material_id",
            "value": -0.18
        },
        {
            "source": "app_id",
            "target": "creative_type",
            "value": -0.25
        },
        {
            "source": "app_id",
            "target": "advertiser_id",
            "value": -0.12
        },
        {
            "source": "app_id",
            "target": "developer_id",
            "value": 0.35
        },
        {
            "source": "app_id",
            "target": "display_type",
            "value": -0.25
        },
        {
            "source": "app_id",
            "target": "industry_name",
            "value": 0.13
        },
        {
            "source": "app_id",
            "target": "display_date",
            "value": -0.1
        },
        {
            "source": "app_id",
            "target": "user_id",
            "value": -0.0
        },
        {
            "source": "app_id",
            "target": "age",
            "value": -0.21
        },
        {
            "source": "app_id",
            "target": "city",
            "value": -0.01
        },
        {
            "source": "app_id",
            "target": "city_rank",
            "value": -0.0
        },
        {
            "source": "app_id",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "app_id",
            "target": "device_size",
            "value": -0.03
        },
        {
            "source": "app_id",
            "target": "career",
            "value": -0.03
        },
        {
            "source": "app_id",
            "target": "gender",
            "value": 0.08
        },
        {
            "source": "app_id",
            "target": "net_type",
            "value": 0.2
        },
        {
            "source": "app_id",
            "target": "residence",
            "value": -0.07
        },
        {
            "source": "app_id",
            "target": "emui_version",
            "value": 0.14
        },
        {
            "source": "app_id",
            "target": "device_release_time",
            "value": -0.06
        },
        {
            "source": "app_id",
            "target": "device_price",
            "value": 0.14
        },
        {
            "source": "app_id",
            "target": "lifecycle",
            "value": 0.04
        },
        {
            "source": "app_id",
            "target": "membership_grade",
            "value": 0.03
        },
        {
            "source": "app_id",
            "target": "membership_lifecycle",
            "value": 0.01
        },
        {
            "source": "app_id",
            "target": "purchase_tag",
            "value": 0.0
        },
        {
            "source": "app_id",
            "target": "daily_active_time",
            "value": -0.09
        },
        {
            "source": "app_id",
            "target": "slot_id",
            "value": 0.03
        },
        {
            "source": "app_tag",
            "target": "task_id",
            "value": -0.07
        },
        {
            "source": "app_tag",
            "target": "material_id",
            "value": 0.02
        },
        {
            "source": "app_tag",
            "target": "creative_type",
            "value": 0.33
        },
        {
            "source": "app_tag",
            "target": "advertiser_id",
            "value": 0.25
        },
        {
            "source": "app_tag",
            "target": "developer_id",
            "value": -0.27
        },
        {
            "source": "app_tag",
            "target": "display_type",
            "value": 0.52
        },
        {
            "source": "app_tag",
            "target": "industry_name",
            "value": 0.04
        },
        {
            "source": "app_tag",
            "target": "display_date",
            "value": -0.01
        },
        {
            "source": "app_tag",
            "target": "user_id",
            "value": -0.01
        },
        {
            "source": "app_tag",
            "target": "age",
            "value": 0.11
        },
        {
            "source": "app_tag",
            "target": "city",
            "value": 0.01
        },
        {
            "source": "app_tag",
            "target": "city_rank",
            "value": -0.16
        },
        {
            "source": "app_tag",
            "target": "device_name",
            "value": 0.0
        },
        {
            "source": "app_tag",
            "target": "device_size",
            "value": 0.04
        },
        {
            "source": "app_tag",
            "target": "career",
            "value": 0.17
        },
        {
            "source": "app_tag",
            "target": "gender",
            "value": 0.04
        },
        {
            "source": "app_tag",
            "target": "net_type",
            "value": -0.18
        },
        {
            "source": "app_tag",
            "target": "residence",
            "value": 0.04
        },
        {
            "source": "app_tag",
            "target": "emui_version",
            "value": -0.11
        },
        {
            "source": "app_tag",
            "target": "device_release_time",
            "value": 0.08
        },
        {
            "source": "app_tag",
            "target": "device_price",
            "value": -0.2
        },
        {
            "source": "app_tag",
            "target": "lifecycle",
            "value": -0.1
        },
        {
            "source": "app_tag",
            "target": "membership_grade",
            "value": -0.06
        },
        {
            "source": "app_tag",
            "target": "membership_lifecycle",
            "value": -0.0
        },
        {
            "source": "app_tag",
            "target": "purchase_tag",
            "value": -0.04
        },
        {
            "source": "app_tag",
            "target": "daily_active_time",
            "value": -0.06
        },
        {
            "source": "app_tag",
            "target": "slot_id",
            "value": 0.0
        },
        {
            "source": "app_tag",
            "target": "app_id",
            "value": 0.06
        },
        {
            "source": "app_first_class",
            "target": "task_id",
            "value": -0.01
        },
        {
            "source": "app_first_class",
            "target": "material_id",
            "value": 0.16
        },
        {
            "source": "app_first_class",
            "target": "creative_type",
            "value": 0.58
        },
        {
            "source": "app_first_class",
            "target": "advertiser_id",
            "value": 0.37
        },
        {
            "source": "app_first_class",
            "target": "developer_id",
            "value": -0.58
        },
        {
            "source": "app_first_class",
            "target": "display_type",
            "value": 0.75
        },
        {
            "source": "app_first_class",
            "target": "industry_name",
            "value": -0.39
        },
        {
            "source": "app_first_class",
            "target": "display_date",
            "value": 0.05
        },
        {
            "source": "app_first_class",
            "target": "user_id",
            "value": 0.0
        },
        {
            "source": "app_first_class",
            "target": "age",
            "value": 0.06
        },
        {
            "source": "app_first_class",
            "target": "city",
            "value": 0.06
        },
        {
            "source": "app_first_class",
            "target": "city_rank",
            "value": -0.25
        },
        {
            "source": "app_first_class",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "app_first_class",
            "target": "device_size",
            "value": 0.08
        },
        {
            "source": "app_first_class",
            "target": "career",
            "value": 0.3
        },
        {
            "source": "app_first_class",
            "target": "gender",
            "value": 0.1
        },
        {
            "source": "app_first_class",
            "target": "net_type",
            "value": -0.36
        },
        {
            "source": "app_first_class",
            "target": "residence",
            "value": -0.01
        },
        {
            "source": "app_first_class",
            "target": "emui_version",
            "value": -0.15
        },
        {
            "source": "app_first_class",
            "target": "device_release_time",
            "value": 0.13
        },
        {
            "source": "app_first_class",
            "target": "device_price",
            "value": -0.41
        },
        {
            "source": "app_first_class",
            "target": "lifecycle",
            "value": -0.25
        },
        {
            "source": "app_first_class",
            "target": "membership_grade",
            "value": -0.16
        },
        {
            "source": "app_first_class",
            "target": "membership_lifecycle",
            "value": -0.01
        },
        {
            "source": "app_first_class",
            "target": "purchase_tag",
            "value": -0.08
        },
        {
            "source": "app_first_class",
            "target": "daily_active_time",
            "value": -0.18
        },
        {
            "source": "app_first_class",
            "target": "slot_id",
            "value": -0.08
        },
        {
            "source": "app_first_class",
            "target": "app_id",
            "value": -0.15
        },
        {
            "source": "app_first_class",
            "target": "app_tag",
            "value": 0.55
        },
        {
            "source": "app_second_class",
            "target": "task_id",
            "value": -0.08
        },
        {
            "source": "app_second_class",
            "target": "material_id",
            "value": 0.01
        },
        {
            "source": "app_second_class",
            "target": "creative_type",
            "value": -0.08
        },
        {
            "source": "app_second_class",
            "target": "advertiser_id",
            "value": 0.05
        },
        {
            "source": "app_second_class",
            "target": "developer_id",
            "value": 0.3
        },
        {
            "source": "app_second_class",
            "target": "display_type",
            "value": -0.14
        },
        {
            "source": "app_second_class",
            "target": "industry_name",
            "value": -0.1
        },
        {
            "source": "app_second_class",
            "target": "display_date",
            "value": -0.0
        },
        {
            "source": "app_second_class",
            "target": "user_id",
            "value": 0.0
        },
        {
            "source": "app_second_class",
            "target": "age",
            "value": -0.02
        },
        {
            "source": "app_second_class",
            "target": "city",
            "value": -0.03
        },
        {
            "source": "app_second_class",
            "target": "city_rank",
            "value": 0.1
        },
        {
            "source": "app_second_class",
            "target": "device_name",
            "value": 0.02
        },
        {
            "source": "app_second_class",
            "target": "device_size",
            "value": -0.02
        },
        {
            "source": "app_second_class",
            "target": "career",
            "value": -0.06
        },
        {
            "source": "app_second_class",
            "target": "gender",
            "value": -0.0
        },
        {
            "source": "app_second_class",
            "target": "net_type",
            "value": 0.17
        },
        {
            "source": "app_second_class",
            "target": "residence",
            "value": -0.01
        },
        {
            "source": "app_second_class",
            "target": "emui_version",
            "value": 0.07
        },
        {
            "source": "app_second_class",
            "target": "device_release_time",
            "value": -0.03
        },
        {
            "source": "app_second_class",
            "target": "device_price",
            "value": 0.14
        },
        {
            "source": "app_second_class",
            "target": "lifecycle",
            "value": 0.06
        },
        {
            "source": "app_second_class",
            "target": "membership_grade",
            "value": 0.04
        },
        {
            "source": "app_second_class",
            "target": "membership_lifecycle",
            "value": -0.03
        },
        {
            "source": "app_second_class",
            "target": "purchase_tag",
            "value": 0.03
        },
        {
            "source": "app_second_class",
            "target": "daily_active_time",
            "value": 0.05
        },
        {
            "source": "app_second_class",
            "target": "slot_id",
            "value": 0.05
        },
        {
            "source": "app_second_class",
            "target": "app_id",
            "value": 0.31
        },
        {
            "source": "app_second_class",
            "target": "app_tag",
            "value": 0.12
        },
        {
            "source": "app_second_class",
            "target": "app_first_class",
            "value": 0.02
        },
        {
            "source": "app_size",
            "target": "task_id",
            "value": -0.05
        },
        {
            "source": "app_size",
            "target": "material_id",
            "value": 0.05
        },
        {
            "source": "app_size",
            "target": "creative_type",
            "value": 0.33
        },
        {
            "source": "app_size",
            "target": "advertiser_id",
            "value": 0.11
        },
        {
            "source": "app_size",
            "target": "developer_id",
            "value": -0.02
        },
        {
            "source": "app_size",
            "target": "display_type",
            "value": 0.42
        },
        {
            "source": "app_size",
            "target": "industry_name",
            "value": -0.26
        },
        {
            "source": "app_size",
            "target": "display_date",
            "value": 0.04
        },
        {
            "source": "app_size",
            "target": "user_id",
            "value": 0.01
        },
        {
            "source": "app_size",
            "target": "age",
            "value": 0.1
        },
        {
            "source": "app_size",
            "target": "city",
            "value": 0.03
        },
        {
            "source": "app_size",
            "target": "city_rank",
            "value": -0.05
        },
        {
            "source": "app_size",
            "target": "device_name",
            "value": 0.0
        },
        {
            "source": "app_size",
            "target": "device_size",
            "value": -0.01
        },
        {
            "source": "app_size",
            "target": "career",
            "value": 0.15
        },
        {
            "source": "app_size",
            "target": "gender",
            "value": 0.01
        },
        {
            "source": "app_size",
            "target": "net_type",
            "value": -0.15
        },
        {
            "source": "app_size",
            "target": "residence",
            "value": 0.0
        },
        {
            "source": "app_size",
            "target": "emui_version",
            "value": -0.12
        },
        {
            "source": "app_size",
            "target": "device_release_time",
            "value": 0.08
        },
        {
            "source": "app_size",
            "target": "device_price",
            "value": -0.21
        },
        {
            "source": "app_size",
            "target": "lifecycle",
            "value": -0.11
        },
        {
            "source": "app_size",
            "target": "membership_grade",
            "value": -0.07
        },
        {
            "source": "app_size",
            "target": "membership_lifecycle",
            "value": -0.0
        },
        {
            "source": "app_size",
            "target": "purchase_tag",
            "value": -0.03
        },
        {
            "source": "app_size",
            "target": "daily_active_time",
            "value": -0.04
        },
        {
            "source": "app_size",
            "target": "slot_id",
            "value": 0.06
        },
        {
            "source": "app_size",
            "target": "app_id",
            "value": -0.05
        },
        {
            "source": "app_size",
            "target": "app_tag",
            "value": 0.38
        },
        {
            "source": "app_size",
            "target": "app_first_class",
            "value": 0.73
        },
        {
            "source": "app_size",
            "target": "app_second_class",
            "value": 0.28
        },
        {
            "source": "app_release_time",
            "target": "task_id",
            "value": 0.04
        },
        {
            "source": "app_release_time",
            "target": "material_id",
            "value": 0.12
        },
        {
            "source": "app_release_time",
            "target": "creative_type",
            "value": 0.48
        },
        {
            "source": "app_release_time",
            "target": "advertiser_id",
            "value": 0.42
        },
        {
            "source": "app_release_time",
            "target": "developer_id",
            "value": -0.48
        },
        {
            "source": "app_release_time",
            "target": "display_type",
            "value": 0.61
        },
        {
            "source": "app_release_time",
            "target": "industry_name",
            "value": -0.42
        },
        {
            "source": "app_release_time",
            "target": "display_date",
            "value": 0.09
        },
        {
            "source": "app_release_time",
            "target": "user_id",
            "value": 0.0
        },
        {
            "source": "app_release_time",
            "target": "age",
            "value": 0.02
        },
        {
            "source": "app_release_time",
            "target": "city",
            "value": 0.04
        },
        {
            "source": "app_release_time",
            "target": "city_rank",
            "value": -0.24
        },
        {
            "source": "app_release_time",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "app_release_time",
            "target": "device_size",
            "value": 0.09
        },
        {
            "source": "app_release_time",
            "target": "career",
            "value": 0.29
        },
        {
            "source": "app_release_time",
            "target": "gender",
            "value": 0.12
        },
        {
            "source": "app_release_time",
            "target": "net_type",
            "value": -0.26
        },
        {
            "source": "app_release_time",
            "target": "residence",
            "value": -0.02
        },
        {
            "source": "app_release_time",
            "target": "emui_version",
            "value": -0.1
        },
        {
            "source": "app_release_time",
            "target": "device_release_time",
            "value": 0.11
        },
        {
            "source": "app_release_time",
            "target": "device_price",
            "value": -0.36
        },
        {
            "source": "app_release_time",
            "target": "lifecycle",
            "value": -0.23
        },
        {
            "source": "app_release_time",
            "target": "membership_grade",
            "value": -0.13
        },
        {
            "source": "app_release_time",
            "target": "membership_lifecycle",
            "value": -0.01
        },
        {
            "source": "app_release_time",
            "target": "purchase_tag",
            "value": -0.05
        },
        {
            "source": "app_release_time",
            "target": "daily_active_time",
            "value": -0.2
        },
        {
            "source": "app_release_time",
            "target": "slot_id",
            "value": -0.09
        },
        {
            "source": "app_release_time",
            "target": "app_id",
            "value": 0.01
        },
        {
            "source": "app_release_time",
            "target": "app_tag",
            "value": 0.49
        },
        {
            "source": "app_release_time",
            "target": "app_first_class",
            "value": 0.84
        },
        {
            "source": "app_release_time",
            "target": "app_second_class",
            "value": 0.16
        },
        {
            "source": "app_release_time",
            "target": "app_size",
            "value": 0.61
        },
        {
            "source": "app_score",
            "target": "task_id",
            "value": -0.01
        },
        {
            "source": "app_score",
            "target": "material_id",
            "value": 0.16
        },
        {
            "source": "app_score",
            "target": "creative_type",
            "value": 0.59
        },
        {
            "source": "app_score",
            "target": "advertiser_id",
            "value": 0.37
        },
        {
            "source": "app_score",
            "target": "developer_id",
            "value": -0.57
        },
        {
            "source": "app_score",
            "target": "display_type",
            "value": 0.75
        },
        {
            "source": "app_score",
            "target": "industry_name",
            "value": -0.38
        },
        {
            "source": "app_score",
            "target": "display_date",
            "value": 0.05
        },
        {
            "source": "app_score",
            "target": "user_id",
            "value": 0.0
        },
        {
            "source": "app_score",
            "target": "age",
            "value": 0.06
        },
        {
            "source": "app_score",
            "target": "city",
            "value": 0.06
        },
        {
            "source": "app_score",
            "target": "city_rank",
            "value": -0.26
        },
        {
            "source": "app_score",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "app_score",
            "target": "device_size",
            "value": 0.08
        },
        {
            "source": "app_score",
            "target": "career",
            "value": 0.3
        },
        {
            "source": "app_score",
            "target": "gender",
            "value": 0.1
        },
        {
            "source": "app_score",
            "target": "net_type",
            "value": -0.35
        },
        {
            "source": "app_score",
            "target": "residence",
            "value": -0.01
        },
        {
            "source": "app_score",
            "target": "emui_version",
            "value": -0.15
        },
        {
            "source": "app_score",
            "target": "device_release_time",
            "value": 0.12
        },
        {
            "source": "app_score",
            "target": "device_price",
            "value": -0.41
        },
        {
            "source": "app_score",
            "target": "lifecycle",
            "value": -0.25
        },
        {
            "source": "app_score",
            "target": "membership_grade",
            "value": -0.16
        },
        {
            "source": "app_score",
            "target": "membership_lifecycle",
            "value": -0.01
        },
        {
            "source": "app_score",
            "target": "purchase_tag",
            "value": -0.08
        },
        {
            "source": "app_score",
            "target": "daily_active_time",
            "value": -0.18
        },
        {
            "source": "app_score",
            "target": "slot_id",
            "value": -0.08
        },
        {
            "source": "app_score",
            "target": "app_id",
            "value": -0.15
        },
        {
            "source": "app_score",
            "target": "app_tag",
            "value": 0.54
        },
        {
            "source": "app_score",
            "target": "app_first_class",
            "value": 1.0
        },
        {
            "source": "app_score",
            "target": "app_second_class",
            "value": 0.01
        },
        {
            "source": "app_score",
            "target": "app_size",
            "value": 0.73
        },
        {
            "source": "app_score",
            "target": "app_release_time",
            "value": 0.84
        }
    ]
}

// 类间关联（三个三角形里的数据）+ 代表性类间关联（>0.5的几个）

// 类内 + 类间 >0.4的
const inClassCor = {
    "nodes": [
        {
            "id": "task_id",
            "group": 1
        },
        {
            "id": "material_id",
            "group": 1
        },
        {
            "id": "creative_type",
            "group": 1
        },
        {
            "id": "advertiser_id",
            "group": 1
        },
        {
            "id": "developer_id",
            "group": 1
        },
        {
            "id": "display_type",
            "group": 1
        },
        {
            "id": "industry_name",
            "group": 1
        },
        {
            "id": "display_date",
            "group": 1
        },
        {
            "id": "user_id",
            "group": 2
        },
        {
            "id": "age",
            "group": 2
        },
        {
            "id": "city",
            "group": 2
        },
        {
            "id": "city_rank",
            "group": 2
        },
        {
            "id": "device_name",
            "group": 2
        },
        {
            "id": "device_size",
            "group": 2
        },
        {
            "id": "career",
            "group": 2
        },
        {
            "id": "gender",
            "group": 2
        },
        {
            "id": "net_type",
            "group": 2
        },
        {
            "id": "residence",
            "group": 2
        },
        {
            "id": "emui_version",
            "group": 2
        },
        {
            "id": "device_release_time",
            "group": 2
        },
        {
            "id": "device_price",
            "group": 2
        },
        {
            "id": "lifecycle",
            "group": 2
        },
        {
            "id": "membership_grade",
            "group": 2
        },
        {
            "id": "membership_lifecycle",
            "group": 2
        },
        {
            "id": "purchase_tag",
            "group": 2
        },
        {
            "id": "daily_active_time",
            "group": 2
        },
        {
            "id": "slot_id",
            "group": 3
        },
        {
            "id": "app_id",
            "group": 3
        },
        {
            "id": "app_tag",
            "group": 3
        },
        {
            "id": "app_first_class",
            "group": 3
        },
        {
            "id": "app_second_class",
            "group": 3
        },
        {
            "id": "app_size",
            "group": 3
        },
        {
            "id": "app_release_time",
            "group": 3
        },
        {
            "id": "app_score",
            "group": 3
        }
    ],
    "links": [
        // ad-user
        {
            "source": "net_type",
            "target": "display_type",
            "value": -0.52
        },
        {
            "source": "net_type",
            "target": "creative_type",
            "value": -0.43 // add
        },
        // user-media
        {
            "source": "app_first_class",
            "target": "device_price",
            "value": -0.41
        },
        {
            "source": "app_score",
            "target": "device_price",
            "value": -0.41
        },
        // ad-media 
        {
            "source": "app_tag",
            "target": "display_type",
            "value": 0.52
        },
        {
            "source": "app_first_class",
            "target": "display_type",
            "value": 0.75
        },
        {
            "source": "app_release_time",
            "target": "display_type",
            "value": 0.61
        },
        {
            "source": "app_score",
            "target": "display_type",
            "value": 0.75
        },
        {
            "source": "app_first_class",
            "target": "developer_id",
            "value": -0.58
        },
        {
            "source": "app_score",
            "target": "developer_id",
            "value": -0.57
        },
        {
            "source": "app_first_class",
            "target": "creative_type",
            "value": 0.58
        },
        {
            "source": "app_score",
            "target": "creative_type",
            "value": 0.59
        },
        {
            "source": "app_release_time",
            "target": "creative_type",
            "value": 0.48
        },
        {
            "source": "app_release_time",
            "target": "advertiser_id",
            "value": 0.42
        },
        {
            "source": "app_release_time",
            "target": "developer_id",
            "value": -0.48
        },
        {
            "source": "app_release_time",
            "target": "industry_name",
            "value": -0.42
        },
        {
            "source": "app_size",
            "target": "display_type",
            "value": 0.42
        },

        // in-class
        {
            "source": "material_id",
            "target": "task_id",
            "value": -0.12
        },
        {
            "source": "creative_type",
            "target": "task_id",
            "value": -0.04
        },
        {
            "source": "creative_type",
            "target": "material_id",
            "value": 0.12
        },
        {
            "source": "advertiser_id",
            "target": "task_id",
            "value": 0.03
        },
        {
            "source": "advertiser_id",
            "target": "material_id",
            "value": 0.28
        },
        {
            "source": "advertiser_id",
            "target": "creative_type",
            "value": 0.15
        },
        {
            "source": "developer_id",
            "target": "task_id",
            "value": -0.06
        },
        {
            "source": "developer_id",
            "target": "material_id",
            "value": -0.2
        },
        {
            "source": "developer_id",
            "target": "creative_type",
            "value": -0.52
        },
        {
            "source": "developer_id",
            "target": "advertiser_id",
            "value": -0.25
        },
        {
            "source": "display_type",
            "target": "task_id",
            "value": 0.02
        },
        {
            "source": "display_type",
            "target": "material_id",
            "value": 0.15
        },
        {
            "source": "display_type",
            "target": "creative_type",
            "value": 0.74
        },
        {
            "source": "display_type",
            "target": "advertiser_id",
            "value": 0.28
        },
        {
            "source": "display_type",
            "target": "developer_id",
            "value": -0.61
        },
        {
            "source": "industry_name",
            "target": "task_id",
            "value": -0.08
        },
        {
            "source": "industry_name",
            "target": "material_id",
            "value": -0.2
        },
        {
            "source": "industry_name",
            "target": "creative_type",
            "value": -0.33
        },
        {
            "source": "industry_name",
            "target": "advertiser_id",
            "value": -0.47
        },
        {
            "source": "industry_name",
            "target": "developer_id",
            "value": 0.27
        },
        {
            "source": "industry_name",
            "target": "display_type",
            "value": -0.37
        },
        {
            "source": "display_date",
            "target": "task_id",
            "value": -0.02
        },
        {
            "source": "display_date",
            "target": "material_id",
            "value": 0.12
        },
        {
            "source": "display_date",
            "target": "creative_type",
            "value": 0.04
        },
        {
            "source": "display_date",
            "target": "advertiser_id",
            "value": 0.06
        },
        {
            "source": "display_date",
            "target": "developer_id",
            "value": -0.06
        },
        {
            "source": "display_date",
            "target": "display_type",
            "value": 0.04
        },
        {
            "source": "display_date",
            "target": "industry_name",
            "value": -0.03
        },
        {
            "source": "age",
            "target": "user_id",
            "value": -0.01
        },
        {
            "source": "city",
            "target": "user_id",
            "value": -0.01
        },
        {
            "source": "city",
            "target": "age",
            "value": 0.01
        },
        {
            "source": "city_rank",
            "target": "user_id",
            "value": -0.0
        },
        {
            "source": "city_rank",
            "target": "age",
            "value": 0.11
        },
        {
            "source": "city_rank",
            "target": "city",
            "value": -0.06
        },
        {
            "source": "device_name",
            "target": "user_id",
            "value": 0.0
        },
        {
            "source": "device_name",
            "target": "age",
            "value": 0.0
        },
        {
            "source": "device_name",
            "target": "city",
            "value": -0.02
        },
        {
            "source": "device_name",
            "target": "city_rank",
            "value": -0.0
        },
        {
            "source": "device_size",
            "target": "user_id",
            "value": -0.0
        },
        {
            "source": "device_size",
            "target": "age",
            "value": 0.09
        },
        {
            "source": "device_size",
            "target": "city",
            "value": -0.01
        },
        {
            "source": "device_size",
            "target": "city_rank",
            "value": -0.12
        },
        {
            "source": "device_size",
            "target": "device_name",
            "value": -0.08
        },
        {
            "source": "career",
            "target": "user_id",
            "value": -0.01
        },
        {
            "source": "career",
            "target": "age",
            "value": 0.19
        },
        {
            "source": "career",
            "target": "city",
            "value": 0.04
        },
        {
            "source": "career",
            "target": "city_rank",
            "value": -0.25
        },
        {
            "source": "career",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "career",
            "target": "device_size",
            "value": 0.17
        },
        {
            "source": "gender",
            "target": "user_id",
            "value": -0.01
        },
        {
            "source": "gender",
            "target": "age",
            "value": -0.23
        },
        {
            "source": "gender",
            "target": "city",
            "value": 0.04
        },
        {
            "source": "gender",
            "target": "city_rank",
            "value": -0.17
        },
        {
            "source": "gender",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "gender",
            "target": "device_size",
            "value": 0.02
        },
        {
            "source": "gender",
            "target": "career",
            "value": 0.08
        },
        {
            "source": "net_type",
            "target": "user_id",
            "value": 0.0
        },
        {
            "source": "net_type",
            "target": "age",
            "value": -0.03
        },
        {
            "source": "net_type",
            "target": "city",
            "value": -0.02
        },
        {
            "source": "net_type",
            "target": "city_rank",
            "value": 0.11
        },
        {
            "source": "net_type",
            "target": "device_name",
            "value": 0.01
        },
        {
            "source": "net_type",
            "target": "device_size",
            "value": -0.02
        },
        {
            "source": "net_type",
            "target": "career",
            "value": -0.13
        },
        {
            "source": "net_type",
            "target": "gender",
            "value": -0.12
        },
        {
            "source": "residence",
            "target": "user_id",
            "value": -0.02
        },
        {
            "source": "residence",
            "target": "age",
            "value": 0.2
        },
        {
            "source": "residence",
            "target": "city",
            "value": -0.04
        },
        {
            "source": "residence",
            "target": "city_rank",
            "value": 0.01
        },
        {
            "source": "residence",
            "target": "device_name",
            "value": 0.0
        },
        {
            "source": "residence",
            "target": "device_size",
            "value": -0.02
        },
        {
            "source": "residence",
            "target": "career",
            "value": -0.05
        },
        {
            "source": "residence",
            "target": "gender",
            "value": -0.07
        },
        {
            "source": "residence",
            "target": "net_type",
            "value": -0.0
        },
        {
            "source": "emui_version",
            "target": "user_id",
            "value": 0.0
        },
        {
            "source": "emui_version",
            "target": "age",
            "value": -0.13
        },
        {
            "source": "emui_version",
            "target": "city",
            "value": -0.02
        },
        {
            "source": "emui_version",
            "target": "city_rank",
            "value": 0.06
        },
        {
            "source": "emui_version",
            "target": "device_name",
            "value": 0.33
        },
        {
            "source": "emui_version",
            "target": "device_size",
            "value": -0.14
        },
        {
            "source": "emui_version",
            "target": "career",
            "value": -0.11
        },
        {
            "source": "emui_version",
            "target": "gender",
            "value": 0.03
        },
        {
            "source": "emui_version",
            "target": "net_type",
            "value": 0.07
        },
        {
            "source": "emui_version",
            "target": "residence",
            "value": -0.05
        },
        {
            "source": "device_release_time",
            "target": "user_id",
            "value": 0.01
        },
        {
            "source": "device_release_time",
            "target": "age",
            "value": 0.13
        },
        {
            "source": "device_release_time",
            "target": "city",
            "value": -0.02
        },
        {
            "source": "device_release_time",
            "target": "city_rank",
            "value": 0.06
        },
        {
            "source": "device_release_time",
            "target": "device_name",
            "value": 0.13
        },
        {
            "source": "device_release_time",
            "target": "device_size",
            "value": 0.17
        },
        {
            "source": "device_release_time",
            "target": "career",
            "value": 0.07
        },
        {
            "source": "device_release_time",
            "target": "gender",
            "value": -0.04
        },
        {
            "source": "device_release_time",
            "target": "net_type",
            "value": -0.06
        },
        {
            "source": "device_release_time",
            "target": "residence",
            "value": 0.2
        },
        {
            "source": "device_release_time",
            "target": "emui_version",
            "value": -0.14
        },
        {
            "source": "device_price",
            "target": "user_id",
            "value": -0.0
        },
        {
            "source": "device_price",
            "target": "age",
            "value": -0.04
        },
        {
            "source": "device_price",
            "target": "city",
            "value": -0.08
        },
        {
            "source": "device_price",
            "target": "city_rank",
            "value": 0.38
        },
        {
            "source": "device_price",
            "target": "device_name",
            "value": 0.02
        },
        {
            "source": "device_price",
            "target": "device_size",
            "value": -0.18
        },
        {
            "source": "device_price",
            "target": "career",
            "value": -0.43
        },
        {
            "source": "device_price",
            "target": "gender",
            "value": -0.16
        },
        {
            "source": "device_price",
            "target": "net_type",
            "value": 0.21
        },
        {
            "source": "device_price",
            "target": "residence",
            "value": 0.11
        },
        {
            "source": "device_price",
            "target": "emui_version",
            "value": 0.39
        },
        {
            "source": "device_price",
            "target": "device_release_time",
            "value": -0.06
        },
        {
            "source": "lifecycle",
            "target": "user_id",
            "value": 0.01
        },
        {
            "source": "lifecycle",
            "target": "age",
            "value": -0.08
        },
        {
            "source": "lifecycle",
            "target": "city",
            "value": -0.06
        },
        {
            "source": "lifecycle",
            "target": "city_rank",
            "value": 0.25
        },
        {
            "source": "lifecycle",
            "target": "device_name",
            "value": 0.01
        },
        {
            "source": "lifecycle",
            "target": "device_size",
            "value": -0.17
        },
        {
            "source": "lifecycle",
            "target": "career",
            "value": -0.38
        },
        {
            "source": "lifecycle",
            "target": "gender",
            "value": -0.13
        },
        {
            "source": "lifecycle",
            "target": "net_type",
            "value": 0.13
        },
        {
            "source": "lifecycle",
            "target": "residence",
            "value": 0.06
        },
        {
            "source": "lifecycle",
            "target": "emui_version",
            "value": 0.15
        },
        {
            "source": "lifecycle",
            "target": "device_release_time",
            "value": -0.06
        },
        {
            "source": "lifecycle",
            "target": "device_price",
            "value": 0.44
        },
        {
            "source": "membership_grade",
            "target": "user_id",
            "value": 0.01
        },
        {
            "source": "membership_grade",
            "target": "age",
            "value": -0.05
        },
        {
            "source": "membership_grade",
            "target": "city",
            "value": -0.04
        },
        {
            "source": "membership_grade",
            "target": "city_rank",
            "value": 0.11
        },
        {
            "source": "membership_grade",
            "target": "device_name",
            "value": 0.04
        },
        {
            "source": "membership_grade",
            "target": "device_size",
            "value": -0.06
        },
        {
            "source": "membership_grade",
            "target": "career",
            "value": -0.19
        },
        {
            "source": "membership_grade",
            "target": "gender",
            "value": -0.12
        },
        {
            "source": "membership_grade",
            "target": "net_type",
            "value": 0.07
        },
        {
            "source": "membership_grade",
            "target": "residence",
            "value": -0.01
        },
        {
            "source": "membership_grade",
            "target": "emui_version",
            "value": 0.09
        },
        {
            "source": "membership_grade",
            "target": "device_release_time",
            "value": -0.03
        },
        {
            "source": "membership_grade",
            "target": "device_price",
            "value": 0.23
        },
        {
            "source": "membership_grade",
            "target": "lifecycle",
            "value": 0.42
        },
        {
            "source": "membership_lifecycle",
            "target": "user_id",
            "value": 0.02
        },
        {
            "source": "membership_lifecycle",
            "target": "age",
            "value": 0.0
        },
        {
            "source": "membership_lifecycle",
            "target": "city",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "city_rank",
            "value": -0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "device_name",
            "value": 0.02
        },
        {
            "source": "membership_lifecycle",
            "target": "device_size",
            "value": -0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "career",
            "value": -0.0
        },
        {
            "source": "membership_lifecycle",
            "target": "gender",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "net_type",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "residence",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "emui_version",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "device_release_time",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "device_price",
            "value": 0.01
        },
        {
            "source": "membership_lifecycle",
            "target": "lifecycle",
            "value": 0.04
        },
        {
            "source": "membership_lifecycle",
            "target": "membership_grade",
            "value": 0.12
        },
        {
            "source": "purchase_tag",
            "target": "user_id",
            "value": -0.0
        },
        {
            "source": "purchase_tag",
            "target": "age",
            "value": -0.08
        },
        {
            "source": "purchase_tag",
            "target": "city",
            "value": -0.01
        },
        {
            "source": "purchase_tag",
            "target": "city_rank",
            "value": 0.05
        },
        {
            "source": "purchase_tag",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "purchase_tag",
            "target": "device_size",
            "value": -0.04
        },
        {
            "source": "purchase_tag",
            "target": "career",
            "value": -0.14
        },
        {
            "source": "purchase_tag",
            "target": "gender",
            "value": -0.07
        },
        {
            "source": "purchase_tag",
            "target": "net_type",
            "value": 0.06
        },
        {
            "source": "purchase_tag",
            "target": "residence",
            "value": -0.01
        },
        {
            "source": "purchase_tag",
            "target": "emui_version",
            "value": 0.02
        },
        {
            "source": "purchase_tag",
            "target": "device_release_time",
            "value": -0.02
        },
        {
            "source": "purchase_tag",
            "target": "device_price",
            "value": 0.17
        },
        {
            "source": "purchase_tag",
            "target": "lifecycle",
            "value": 0.27
        },
        {
            "source": "purchase_tag",
            "target": "membership_grade",
            "value": 0.14
        },
        {
            "source": "purchase_tag",
            "target": "membership_lifecycle",
            "value": -0.01
        },
        {
            "source": "daily_active_time",
            "target": "user_id",
            "value": -0.01
        },
        {
            "source": "daily_active_time",
            "target": "age",
            "value": 0.16
        },
        {
            "source": "daily_active_time",
            "target": "city",
            "value": -0.05
        },
        {
            "source": "daily_active_time",
            "target": "city_rank",
            "value": 0.23
        },
        {
            "source": "daily_active_time",
            "target": "device_name",
            "value": 0.01
        },
        {
            "source": "daily_active_time",
            "target": "device_size",
            "value": -0.15
        },
        {
            "source": "daily_active_time",
            "target": "career",
            "value": -0.25
        },
        {
            "source": "daily_active_time",
            "target": "gender",
            "value": -0.19
        },
        {
            "source": "daily_active_time",
            "target": "net_type",
            "value": 0.07
        },
        {
            "source": "daily_active_time",
            "target": "residence",
            "value": 0.11
        },
        {
            "source": "daily_active_time",
            "target": "emui_version",
            "value": 0.02
        },
        {
            "source": "daily_active_time",
            "target": "device_release_time",
            "value": 0.01
        },
        {
            "source": "daily_active_time",
            "target": "device_price",
            "value": 0.34
        },
        {
            "source": "daily_active_time",
            "target": "lifecycle",
            "value": 0.3
        },
        {
            "source": "daily_active_time",
            "target": "membership_grade",
            "value": 0.12
        },
        {
            "source": "daily_active_time",
            "target": "membership_lifecycle",
            "value": -0.0
        },
        {
            "source": "daily_active_time",
            "target": "purchase_tag",
            "value": 0.08
        },
        {
            "source": "app_id",
            "target": "slot_id",
            "value": 0.03
        },
        {
            "source": "app_tag",
            "target": "slot_id",
            "value": 0.0
        },
        {
            "source": "app_tag",
            "target": "app_id",
            "value": 0.06
        },
        {
            "source": "app_first_class",
            "target": "slot_id",
            "value": -0.08
        },
        {
            "source": "app_first_class",
            "target": "app_id",
            "value": -0.15
        },
        {
            "source": "app_first_class",
            "target": "app_tag",
            "value": 0.55
        },
        {
            "source": "app_second_class",
            "target": "slot_id",
            "value": 0.05
        },
        {
            "source": "app_second_class",
            "target": "app_id",
            "value": 0.31
        },
        {
            "source": "app_second_class",
            "target": "app_tag",
            "value": 0.12
        },
        {
            "source": "app_second_class",
            "target": "app_first_class",
            "value": 0.02
        },
        {
            "source": "app_size",
            "target": "slot_id",
            "value": 0.06
        },
        {
            "source": "app_size",
            "target": "app_id",
            "value": -0.05
        },
        {
            "source": "app_size",
            "target": "app_tag",
            "value": 0.38
        },
        {
            "source": "app_size",
            "target": "app_first_class",
            "value": 0.73
        },
        {
            "source": "app_size",
            "target": "app_second_class",
            "value": 0.28
        },
        {
            "source": "app_release_time",
            "target": "slot_id",
            "value": -0.09
        },
        {
            "source": "app_release_time",
            "target": "app_id",
            "value": 0.01
        },
        {
            "source": "app_release_time",
            "target": "app_tag",
            "value": 0.49
        },
        {
            "source": "app_release_time",
            "target": "app_first_class",
            "value": 0.84
        },
        {
            "source": "app_release_time",
            "target": "app_second_class",
            "value": 0.16
        },
        {
            "source": "app_release_time",
            "target": "app_size",
            "value": 0.61
        },
        {
            "source": "app_score",
            "target": "slot_id",
            "value": -0.08
        },
        {
            "source": "app_score",
            "target": "app_id",
            "value": -0.15
        },
        {
            "source": "app_score",
            "target": "app_tag",
            "value": 0.54
        },
        {
            "source": "app_score",
            "target": "app_first_class",
            "value": 1.0
        },
        {
            "source": "app_score",
            "target": "app_second_class",
            "value": 0.01
        },
        {
            "source": "app_score",
            "target": "app_size",
            "value": 0.73
        },
        {
            "source": "app_score",
            "target": "app_release_time",
            "value": 0.84
        }
    ]
}

export { allCor, inClassCor };