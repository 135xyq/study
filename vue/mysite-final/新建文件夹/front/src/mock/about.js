// 模拟关于我的页面
import Mock from 'mockjs';

Mock.mock("/api/about", 'get', {
    code: 0,
    msg: '',
    data: "https://baike.baidu.com/item/%E7%A7%A6%E5%A7%8B%E7%9A%87/6164"
})