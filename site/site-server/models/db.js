const { Sequelize } = require("sequelize");
const { db } = require('../config/db.default')
const log = require('../logger');
const sequelize = new Sequelize(db.dbName, db.dbUser, db.dbPassword, {
    host: 'localhost',
    dialect: db.dbType,
    logging: (msg) => {
        log.sqlLogger.info(msg);
    }
})

module.exports = sequelize;