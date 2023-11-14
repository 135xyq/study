// 模拟项目数据
import Mock from 'mockjs';
Mock.mock('/api/project', 'get', {
    code: 0,
    msg: '',
    "data|15-30": [{
        id: "@guid",
        name: "@ctitle(5,10)",
        "url|1": ["@url", null],
        "github|1": ["@url", null],
        "description|3-5": ["@csentence()"],
        thumb: "@image('300x250',@color,@color,Random)",
        order: 1
    }, ]
})