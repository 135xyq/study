const Mock = require('mockjs');

const Student = require('../models/Student');

const result = Mock.mock({
    'data|700-900': [{
        name: '@cname',
        birthDay: '@date',
        'sex|1': true,
        phone: /1\d{10}/,
        'ClassId|1-24': 1,
    }]
}).data;

console.log(result)

Student.bulkCreate(result);