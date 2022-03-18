// 同步所有模型
const sequelize = require('./db');

const Admin = require('./Admin');

sequelize.sync({
    alter: true
}).then(() => {
    console.log('所有模型都已同步！')
})