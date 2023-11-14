// 学生的增删改

const Student = require('../models/Student');
const Class = require('../models/Class');
const { Op } = require("sequelize");

/**
 * 学生的新增
 * @param {object} studentObj 学生信息
 */
const addStudent = async function(studentObj) {
    const ins = await Student.create(studentObj);
    return ins.toJSON();
}

/**
 * 删除学生
 * @param {number} studentId 学生id
 */
const deleteStudent = async function(studentId) {
    return await Student.destroy({
        where: {
            id: studentId,
        }
    })
}

/**
 * 更新学生信息
 * @param {number} studentId 学生id
 * @param {object} studentObj 学生信息
 */

const updateStudent = async function(studentId, studentObj) {
    return await Student.update(studentObj, {
        where: {
            id: studentId,
        }
    })
}

/**
 * 根据学生Id查询学生信息
 * @param {学生Id} id 
 * @returns 
 */
const getStudentById = async function(id) {
    const result = await Student.findOne({
        attributes: ['id', 'name', 'birthDay', 'sex', 'phone', 'ClassId'],
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
 * 分页获取学生
 * @param {*} page 
 * @param {*} limit 
 * @param {*} sex 
 * @param {*} name 
 * @returns 
 */
const getStudents = async function(page = 1, limit = 10, sex = -1, name = "") {
    const where = {};
    if (sex !== -1) {
        where.sex = !!sex;
    }
    if (name) {
        where.name = {
            [Op.like]: `%${name}%`
        }
    }

    const result = await Student.findAndCountAll({
        attributes: ["id", "name", "sex", "birthDay", "age"],
        where,
        include: [Class],
        offset: (page - 1) * limit,
        limit: +limit,

    })

    return {
        total: result.count,
        data: JSON.parse(JSON.stringify(result.rows))

    }

}


module.exports = {
    addStudent,
    deleteStudent,
    updateStudent,
    getStudentById,
    getStudents,
}