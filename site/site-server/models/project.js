const sequelize = require('./db');
const { DataTypes } = require('sequelize');

// 项目表
const Project = sequelize.define('Project', {
    //项目名称
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 项目描述
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 项目链接
    linkUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 项目缩略图
    thumb: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // github地址
    github: {
        type: DataTypes.STRING,
    },
    // 排序
    order: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
}, {
    freezeTableName: true,
    paranoid: true
})
module.exports = Project;