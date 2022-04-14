const Article = require('../models/article.js');

// 文章

/**
 * 添加一个文章
 * @param {文章内容} articleObj 
 * @returns 
 */
const addArticle = async function(articleObj) {
    const res = await Article.create(articleObj);
    return res.toJSON();
}


/**
 * 分页查询文章
 * @param {*} offset 每页多少数据量
 * @param {*} limit 第几页
 */
const selectArticle = async function(offset = 0, limit = 10) {
    const res = await Article.findAndCountAll({
        offset,
        limit
    })
    return {
        total: res.count,
        rows: JSON.parse(JSON.stringify(res.rows)),
    };
}

/**
 * 通过ID查询文章
 * @param {*} id 文章ID
 * @returns 
 */
const selectArticleById = async function(id) {
    const res = await Article.findByPk(id);
    if (!res) {
        // 查不到数据
        return null;
    }
    return res.toJSON();
}

/**
 * 更新文章内容
 * @param {*} articleId 文章ID
 * @param {*} articleObj 文章内容
 * @returns 
 */
const updateArticle = async function(articleId, articleObj) {
    return await Article.update(articleObj, {
        where: {
            id: articleId
        }
    })
};

/**
 * 删除文章
 * @param {*} id 文章id
 * @returns 
 */
const deleteArticle = async function(id) {
    return await Article.destroy({
        where: {
            id,
        }
    })
}

module.exports = {
    addArticle,
    deleteArticle,
    selectArticle,
    selectArticleById,
    updateArticle
}