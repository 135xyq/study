// 同步所有模型
const sequelize = require('./db');

require('./Admin');
require('./Comments');
require('./Article');
require('./ArticleImages');

sequelize.sync({
    alter: true
}).then(() => {
    console.log('所有模型都已同步！')
})