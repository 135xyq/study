const sequelize = require('./db');
const moment = require('moment')

const { DataTypes } = require('sequelize');

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDay: {
        type: DataTypes.DATE,
        allowNull: false,
        get() {
            const birth = this.getDataValue("birthday");
            if (birth) {
                return birth.getTime();
            }
            return undefined;
        }
    },
    age: {
        type: DataTypes.VIRTUAL,
        get() {
            const now = moment.utc();
            const birth = moment.utc(this.birthDay);
            return now.diff(birth, "y"); //得到两个日期的年份的差异
        },
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