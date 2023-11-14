// 学生的增删改

const Student = require('../models/Student');

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
    await Student.destroy({
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
    await Student.update(studentObj, {
        where: {
            id: studentId,
        }
    })
}


module.exports = {
    addStudent,
    deleteStudent,
    updateStudent,
}