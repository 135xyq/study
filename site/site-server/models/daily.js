const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Daily = sequelize.define('Daily', {
    //用户名
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    paranoid: true,
})
module.exports = Daily;