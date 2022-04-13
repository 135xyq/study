const sequelize = require('./db');

require('./project');
require('./category');
require('./comment');
require('./article')
require('./admin')

// 同步所有模型

sequelize.sync({
    alter: true,
}).then(() => {
    console.log('所有模型同步完成！')
})