// 班级的增删改

const Class = require('../models/Class');

/**
 * 班级的新增
 * @param {object} ClassObj 班级信息
 */
const addClass = async function(ClassObj) {
    const ins = await Class.create(ClassObj);
    return ins.toJSON();
}

/**
 * 删除班级
 * @param {number} ClassId 班级id
 */
const deleteClass = async function(ClassId) {
    await Class.destroy({
        where: {
            id: ClassId,
        }
    })
}

/**
 * 更新班级信息
 * @param {number} ClassId 班级id
 * @param {object} ClassObj 班级信息
 */

const updateClass = async function(ClassId, ClassObj) {
    await Class.update(ClassObj, {
        where: {
            id: ClassId,
        }
    })
}


module.exports = {
    addClass,
    deleteClass,
    updateClass,
}