const Admin = require('../models/Admin');
const md5 = require('md5');

/**
 * 新增一个管理员
 * @param {*} adminObj 管理员数据
 */
const addAdmin = async function(adminObj) {
    adminObj.loginPwd = md5(adminObj.loginPwd);
    const resp = await Admin.create(adminObj);
    return resp.toJSON();
}

/**
 * 删除一个管理员
 * @param {*} adminId 管理员ID
 * @returns 删除的用户数量
 */
const deleteAdmin = async function(adminId) {
    const resp = await Admin.destroy({
        where: {
            id: adminId
        }
    })
    return resp;
}

/**
 * 修改管理员信息
 * @param {*} adminId 管理员id
 * @param {*} adminObj 管理员信息
 * @returns 
 */
const updateAdmin = async function(adminId, adminObj) {
    if (adminObj.loginPwd) {
        adminObj.loginPwd = md5(adminObj.loginPwd);
    }
    const resp = await Admin.update(adminObj, {
        where: {
            id: adminId,
        }
    })
    return resp;
}

const login = async function(loginId, loginPwd) {
    loginPwd = md5(loginPwd);
    const result = await Admin.findOne({
        where: {
            loginId,
            loginPwd
        }
    });
    if (result && result.loginId === loginId) {
        return result.toJSON();
    }
    return null
}



module.exports = {
    addAdmin,
    deleteAdmin,
    updateAdmin,
    login
}