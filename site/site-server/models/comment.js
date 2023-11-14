const sequelize = require('./db');
const { DataTypes } = require('sequelize');

// 评论表
const Comment = sequelize.define('Comment', {
    //昵称
    nickName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 评论内容
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // 头像
    avatar: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true,
    paranoid: true
})
module.exports = Comment;