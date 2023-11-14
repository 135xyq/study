const { Sequelize } = require('sequelize');
const log = require('../logger');

const sequelize = new Sequelize('my_record', 'root', 'xyq2386152296', {
    host: 'localhost',
    dialect: 'mysql',
    logging: (msg) => {
        log.sqlLogger.info(msg)
    }
});

module.exports = sequelize;