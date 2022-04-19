const sequelize = require('./db');
const { admin } = require('../config/config.default')
const { addAdmin } = require('../services/admin')
require('./project');
require('./category');
require('./comment');
require('./article');
require('./admin');
require('./about');
require('./daily')

// 同步所有模型

sequelize.sync({
    alter: true,
}).then(() => {
    console.log('所有模型同步完成！');
    addAdmin(admin).then(res => {
        console.log('管理员初始化成功')
    })

})