const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const ArticleImages = sequelize.define('ArticleImages', {
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    paranoid: true
});

module.exports = ArticleImages;