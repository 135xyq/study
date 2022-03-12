// 书本的增删改

const Book = require('../models/Book');
const { Op } = require('sequelize')

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
    return await Book.destroy({
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
    return await Book.update(BookObj, {
        where: {
            id: BookId,
        }
    })
}


/**
 * 根据书本Id查询书本信息
 * @param {书本Id} id 
 * @returns 
 */
const getBookById = async function(id) {
    const result = await Book.findOne({
        attributes: ['id', 'name', 'imgUrl', 'publishDate', 'author'],
        where: {
            id
        }
    });
    if (result) {
        return result.toJSON();
    }
    return null;
}

/**
 * 分页获取书本
 * @param {*} page 
 * @param {*} limit 
 * @param {*} sex 
 * @param {*} name 
 * @returns 
 */
const getBooks = async function(page = 1, limit = 10, keyword = "") {
    const result = await Book.findAndCountAll({
        attributes: ['id', 'name', 'imgUrl', 'publishDate', 'author'],
        where: {
            [Op.or]: [{
                name: {
                    [Op.like]: `%${keyword}%`
                }
            }, {
                author: {
                    [Op.like]: `%${keyword}%`
                }

            }]
        },
        offset: (page - 1) * limit,
        limit: +limit,
    })

    return {
        total: result.count,
        data: JSON.parse(JSON.stringify(result.rows))

    }

}


module.exports = {
    addBook,
    deleteBook,
    updateBook,
    getBookById,
    getBooks
}