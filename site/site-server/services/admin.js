const Admin = require('../models/admin.js');
const md5 = require('md5');
// 管理员

/**
 * 添加一个管理员
 * @param {管理员内容} adminObj 
 * @returns 
 */
const addAdmin = async function(adminObj) {
    adminObj.password = md5(adminObj.password);
    try {
        const res = await Admin.create(adminObj);
        return res.toJSON();
    } catch (e) {
        return JSON.parse(JSON.stringify(e))
    }
}


/**
 * 更新管理员内容
 * @param {*} adminId 管理员ID
 * @param {*} adminObj 管理员内容
 * @returns 
 */
const updateAdmin = async function(adminId, adminObj) {
    if (adminObj.password) {
        adminObj.password = md5(adminObj.password)
    }
    return await Admin.update(adminObj, {
        where: {
            id: adminId
        }
    })
};

/**
 * 删除管理员
 * @param {*} id 管理员id
 * @returns 
 */
const deleteAdmin = async function(id) {
    return await Admin.destroy({
        where: {
            id,
        }
    })
}

/**
 * 登录
 * @param {*} userName 用户名
 * @param {*} password 密码
 */
const login = async function(userName, password) {
    password = md5(password);
    const res = await Admin.findOne({
        where: {
            userName,
            password
        }
    });
    return JSON.parse(JSON.stringify(res));
}

/**
 * 查找管理员
 * @param {*} id 
 * @returns 
 */
const getAdminById = async function(id) {
    return await Admin.findByPk(id);
}


module.exports = {
    addAdmin,
    deleteAdmin,
    updateAdmin,
    login,
    getAdminById,
}