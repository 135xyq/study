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
    const res = await Admin.create(adminObj);
    return res.toJSON();
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
    return res;
}

module.exports = {
    addAdmin,
    deleteAdmin,
    updateAdmin
}