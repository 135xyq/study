// 书本的增删改

const Book = require('../models/Book');

/**
 * 书本的新增
 * @param {object} BookObj 书本信息
 */
const addBook = async function(BookObj) {
    const ins = await Book.create(BookObj);
    return ins.toJSON();
}

/**
 * 删除书本
 * @param {number} BookId 书本id
 */
const deleteBook = async function(BookId) {
    await Book.destroy({
        where: {
            id: BookId,
        }
    })
}

/**
 * 更新书本信息
 * @param {number} BookId 书本id
 * @param {object} BookObj 书本信息
 */

const updateBook = async function(BookId, BookObj) {
    await Book.update(BookObj, {
        where: {
            id: BookId,
        }
    })
}


module.exports = {
    addBook,
    deleteBook,
    updateBook,
}