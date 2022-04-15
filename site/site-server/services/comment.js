const Comment = require('../models/comment.js');
const Article = require('../models/article.js');

// 评论

/**
 * 添加一个评论
 * @param {评论内容} commentObj 
 * @returns 
 */
const addComment = async function(commentObj) {
    const res = await Comment.create({
        ...commentObj,
        include: [Article]
    });
    return res.toJSON();
}


/**
 * 分页查询评论
 * @param {*} offset 每页多少数据量
 * @param {*} limit 第几页
 */
const selectComment = async function(offset = 0, limit = 10) {
    const res = await Comment.findAndCountAll({
        offset,
        limit
    })
    return {
        total: res.count,
        rows: JSON.parse(JSON.stringify(res.rows)),
    };
}

/**
 * 通过ID查询评论
 * @param {*} id 评论ID
 * @returns 
 */
const selectCommentById = async function(id) {
    const res = await Comment.findByPk(id);
    if (!res) {
        // 查不到数据
        return null;
    }
    return res.toJSON();
}

/**
 * 更新评论内容
 * @param {*} commentId 评论ID
 * @param {*} commentObj 评论内容
 * @returns 
 */
const updateComment = async function(commentId, commentObj) {
    return await Comment.update(commentObj, {
        where: {
            id: commentId
        }
    })
};

/**
 * 删除评论
 * @param {*} id 评论id
 * @returns 
 */
const deleteComment = async function(id) {
    return await Comment.destroy({
        where: {
            id,
        }
    })
}

module.exports = {
    addComment,
    deleteComment,
    selectComment,
    selectCommentById,
    updateComment
}