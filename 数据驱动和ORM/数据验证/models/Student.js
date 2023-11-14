const sequelize = require('./db');

const { DataTypes } = require('sequelize');

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDay: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sex: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    freezeTableName: true,
    paranoid: true,
});

module.exports = Student;