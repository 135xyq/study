const sequelize = require('./db');
const { DataTypes } = require('sequelize');

// 管理员表
const Admin = sequelize.define('Admin', {
    //用户名
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 用户密码
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 头像
    avatar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    paranoid: true,
    indexes: [{
        unique: true,
        fields: ['userName']
    }],
})
module.exports = Admin;