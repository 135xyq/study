const sequelize = require('./db');
const { DataTypes } = require('sequelize');
const path = require('path');

// 文章表
const Article = sequelize.define('Article', {
    //文章名称
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 文章内容
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // 浏览次数
    readCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    // 文章描述
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 文章缩略图
    thumb: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    freezeTableName: true,
    paranoid: true
})
module.exports = Article;