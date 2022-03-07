const { Sequelize } = require('sequelize');

// 创建一个实例

const sequelize = new Sequelize('my_school_db', 'root', 'xyq2386152296', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: null
});

module.exports = sequelize;