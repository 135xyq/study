const Comments = require('../models/Comments');
const formatDate = require('../utils/formatDate');

/**
 * 新增一个评论
 * @param {*} commentsObj 评论数据
 */
const addComments = async function(commentsObj) {
    const resp = await Comments.create(commentsObj);
    return resp.toJSON();
}

/**
 * 删除一个评论
 * @param {*} CommentsId 评论ID
 * @returns 删除的评论数量
 */
const deleteComments = async function(commentsId) {
    const resp = await Comments.destroy({
        where: {
            id: commentsId
        }
    })
    return resp;
}

/**
 * 修改评论信息
 * @param {*} CommentsId 评论id
 * @param {*} CommentsObj 评论信息
 * @returns 
 */
const updateComments = async function(commentsId, commentsObj) {
    const resp = await Comments.update(commentsObj, {
        where: {
            id: commentsId,
        }
    })
    return resp;
}


/**
 * 分页获取评论
 * @param {*} page 
 * @param {*} limit 
 * @returns 
 */
const getComments = async function(page = 1, limit = 10) {
    const result = await Comments.findAndCountAll({
        attributes: ["id", "userName", "content", "avatar", "publishDate"],
        offset: (page - 1) * limit,
        limit: +limit,

    })

    return {
        total: result.count,
        data: JSON.parse(JSON.stringify(result.rows))

    }

}

module.exports = {
    addComments,
    deleteComments,
    updateComments,
    getComments
}