const Category = require('../models/category.js');

// 分类

/**
 * 添加一个分类
 * @param {分类内容} categoryObj 
 * @returns 
 */
const addCategory = async function(categoryObj) {
    const res = await Category.create(categoryObj);
    return res.toJSON();
}


/**
 * 分页查询分类
 * @param {*} offset 每页多少数据量
 * @param {*} limit 第几页
 */
const selectCategory = async function(offset = 0, limit = 10) {
    const res = await Category.findAndCountAll({
        offset,
        limit
    })
    return {
        total: res.count,
        rows: JSON.parse(JSON.stringify(res.rows)),
    };
}

/**
 * 通过ID查询分类
 * @param {*} id 分类ID
 * @returns 
 */
const selectCategoryById = async function(id) {
    const res = await Category.findByPk(id);
    if (!res) {
        // 查不到数据
        return null;
    }
    return res.toJSON();
}

/**
 * 更新分类内容
 * @param {*} CategoryId 分类ID
 * @param {*} CategoryObj 分类内容
 * @returns 
 */
const updateCategory = async function(categoryId, categoryObj) {
    return await Category.update(categoryObj, {
        where: {
            id: categoryId
        }
    })
};

/**
 * 删除分类
 * @param {*} id 分类id
 * @returns 
 */
const deleteCategory = async function(id) {
    return await Category.destroy({
        where: {
            id,
        }
    })
}

module.exports = {
    addCategory,
    selectCategory,
    selectCategoryById,
    updateCategory,
    deleteCategory
}