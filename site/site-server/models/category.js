const sequelize = require('./db');
const { DataTypes } = require('sequelize');

// 分类表
const Category = sequelize.define('Category', {
    //分类名称
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    paranoid: true,
})
module.exports = Category;