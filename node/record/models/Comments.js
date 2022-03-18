const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Comments = sequelize.define('Comments', {
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publishDate: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    paranoid: true
});

module.exports = Comments;