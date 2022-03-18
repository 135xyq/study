const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_record', 'root', 'xyq2386152296', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;