const Category = require('../models/category.js');
const Article = require('../models/article')
    // 分类

/**
 * 添加一个分类
 * @param {分类内容} categoryObj 
 * @returns 
 */
const addCategory = async function(categoryObj) {
    try {
        const res = await Category.create(categoryObj);
        return res.toJSON();
    } catch (e) {
        return JSON.parse(JSON.stringify(e))
    }
}


/**
 * 查询分类包含文章
 */
const selectCategory = async function() {
    const res = await Category.findAll({
        include: [Article]
    })
    return res
}

/**
 * 查询分类不包含文章
 */
const getCategory = async function() {
    const res = await Category.findAll()
    return res;
}

/**
 * 通过ID查询分类包括文章
 * @param {*} id 分类ID
 * @returns 
 */
const selectCategoryById = async function(id) {
    const res = await Category.findByPk(id, {
        include: [Article]
    });
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
    deleteCategory,
    getCategory
}