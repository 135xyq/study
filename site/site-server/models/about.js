// 关于自己

const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const router = sequelize.define('About', {
    //背景
    bg: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 头像
    avatar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // QQ
    qq: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 微信
    weixin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 邮箱
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 个人介绍
    selfDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // icp
    icp: {
        type: DataTypes.STRING,
    },
    //banner
    banner: {
        type: DataTypes.STRING,
    },
    // 个人标语
    bannerText: {
        type: DataTypes.TEXT,
    },
    // 简历
    resume: {
        type: DataTypes.STRING,
    },
}, {
    freezeTableName: true,
    paranoid: true,
})


module.exports = router;