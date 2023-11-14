// 管理员的增删改

const Admin = require('../models/Admin');

/**
 * 新增一个管理员
 * @param {object} adminObj 管理员的信息
 */
exports.addAdmin = async function(adminObj) {
    const ins = await Admin.create(adminObj);
    return ins.toJSON();
}

/**
 * 删除一个管理员
 * @param {string} adminId 管理员的id
 */

exports.deleteAdmin = async function(adminId) {
    //方法一
    // const ins = await Admin.findByPk(adminId);

    // if (ins) {
    //     ins.destroy();
    // } else {
    //     console.log('管理员不存在！')
    // }


    // 方法二

    await Admin.destroy({
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
    //方法一
    // const ins = await Admin.findByPk(id);
    // ins.loginId = adminObj.loginId;
    // ins.save();

    // 方法二

    await Admin.update(adminObj, {
        where: {
            id,
        }
    })

}