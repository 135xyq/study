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
    return await Class.destroy({
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


/**
 * 根据班级Id查询班级信息
 * @param {班级Id} id 
 * @returns 
 */
const getClassById = async function(id) {
    const result = await Class.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}

/**
 * 获取班级
 * @returns 
 */
const getClasses = async function() {
    const result = await Class.findAll();
    return {
        total: JSON.parse(JSON.stringify(result)).length,
        data: JSON.parse(JSON.stringify(result))

    }

}


module.exports = {
    addClass,
    deleteClass,
    updateClass,
    getClassById,
    getClasses
}