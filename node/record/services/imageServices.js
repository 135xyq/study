// 图片的管理

const ArticleImages = require('../models/ArticleImages');

/**
 * 新增一个图片
 * @param {*} articleId 文章ID
 * @param {*} url 图片地址
 * @returns 
 */
const addArticleImage = async function(articleId, url) {
    const resp = await ArticleImages.create({
        articleId,
        url
    });
    return resp.toJSON();
}


/**
 * 替换图片
 * @param {*} articleId 
 * @param {*} url
 * @returns 
 */
const updateArticleImage = async function(articleId, url) {
    const resp = await ArticleImages.update({
        url
    }, {
        where: {
            id: articleId
        }
    })
    return resp
}

/**
 * 删除图片
 * @param {*} articleId 
 */
const deleteArticleImage = async function(articleId) {
    const resp = await ArticleImages.destroy({
        where: {
            id: articleId
        }
    })
}


module.exports = {
    addArticleImage,
    updateArticleImage,
    deleteArticleImage,
}