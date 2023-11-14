const { Sequelize } = require('sequelize');
const log = require('../logger');

// 创建一个实例

const sequelize = new Sequelize('my_school_db', 'root', 'xyq2386152296', {
    host: 'localhost',
    dialect: 'mysql',
    logging: (msg) => {
        log.sqlLogger.info(msg)
    }
});

module.exports = sequelize;