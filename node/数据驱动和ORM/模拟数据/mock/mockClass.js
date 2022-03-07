// 模拟班级
const Mock = require('mockjs');

const result = Mock.mock({
    'datas|24': [{
        'id|+1': 1,
        'name': '前端第 @id 期',
        startData: '@date'
    }]
}).datas;

const Class = require('../models/Class');

Class.bulkCreate(result);