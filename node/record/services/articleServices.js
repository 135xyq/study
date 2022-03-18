// 文章的管理

// 文章的增删改

const Article = require('../models/Article');
const Admin = require('../models/Admin')
const ArticleImages = require('../models/ArticleImages');
const formatDate = require('../utils/formatDate');

/**
 * 添加一个文章
 * @param {*} adminId 用户ID
 * @param {*} publishDate 发布时间
 * @param {*} content 文章内容
 * @returns 
 */
const addArticle = async function(adminId, publishDate, content) {
    const resp = await Article.create({
        adminId,
        publishDate,
        content
    });
    return resp.toJSON();
}

/**
 * 更新文章内容仅更新文章内容
 * @param {*} articleId 
 * @param {*} content 
 * @returns 
 */
const updateArticle = async function(articleId, content) {
    const resp = await Article.update({
        content,
    }, {
        where: {
            id: articleId
        }
    })
    return resp
}

/**
 * 删除篇文章
 * @param {*} articleId 
 */
const deleteArticle = async function(articleId) {
    const resp = await Article.destroy({
        where: {
            id: articleId
        }
    })
}

/**
 * 分页获取文章
 * @param {*} page 
 * @param {*} limit 
 * @returns 
 */
const getArticles = async function(page = 1, limit = 10) {
    const result = await Article.findAndCountAll({
        attributes: ["id", "publishDate", "content"],
        offset: (page - 1) * limit,
        limit: +limit,

    })
    return {
        total: result.count,
        data: JSON.parse(JSON.stringify(result.rows))

    }

}

module.exports = {
    addArticle,
    updateArticle,
    deleteArticle,
    getArticles
}