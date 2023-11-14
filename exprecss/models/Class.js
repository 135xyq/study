const sequelize = require('./db');
const { DataTypes } = require('sequelize');
const Student = require('./Student');

const Class = sequelize.define('Class', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    paranoid: true,
});


module.exports = Class;