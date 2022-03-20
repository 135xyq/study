// 文章

const { DataTypes } = require('sequelize');

const sequelize = require('./db');

const Article = sequelize.define('Article', {
    // 发布时间
    publishDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    adminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    paranoid: true
});

module.exports = Article;