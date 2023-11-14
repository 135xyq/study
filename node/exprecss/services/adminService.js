// 管理员的增删改

const Admin = require('../models/Admin');
const md5 = require('md5')

/**
 * 新增一个管理员
 * @param {object} adminObj 管理员的信息
 */
exports.addAdmin = async function(adminObj) {
    adminObj.loginPwd = md5(adminObj.loginPwd)
    const ins = await Admin.create(adminObj);
    return ins.toJSON();
}

/**
 * 删除一个管理员
 * @param {string} adminId 管理员的id
 */

exports.deleteAdmin = async function(adminId) {
    return await Admin.destroy({
        where: {
            id: adminId,
        }
    })
}

/**
 *更新一个管理员信息
 * @param {int} id 管理员id
 * @param {object} adminObj 管理员信息
 */

exports.updateAdmin = async function(id, adminObj) {
    adminObj.loginPwd = md5(adminObj.loginPwd)
    return await Admin.update(adminObj, {
        where: {
            id,
        }
    })

}

/**
 * 根据管理员Id查询管理员信息
 * @param {管理员Id} id 
 * @returns 
 */
exports.getAdminById = async function(id) {
    const result = await Admin.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}

/**
 * 获取管理员
 * @returns 
 */
exports.getAdmins = async function() {
    const result = await Admin.findAll();
    return {
        total: JSON.parse(JSON.stringify(result)).length,
        data: JSON.parse(JSON.stringify(result))
    }
}

/**
 * 登录
 * @param {*} loginId 用户id
 * @param {*} loginPwd 用户密码
 * @returns 
 */
exports.login = async function(loginId, loginPwd) {
    loginPwd = md5(loginPwd);
    const result = await Admin.findOne({
        where: {
            loginId,
            loginPwd
        }
    })
    if (result && result.loginId === loginId) {
        return result.toJSON();
    }
    return null;
}