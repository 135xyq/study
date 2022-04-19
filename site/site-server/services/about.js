const About = require('../models/about.js');


// 关于我

/**
 * 添加一个关于我
 * @param {关于我内容} AboutObj 
 * @returns 
 */
const addAbout = async function(aboutObj) {
    const res = await About.create(aboutObj);
    return res.toJSON();
}


/**
 * 查询关于我

 */
const selectAbout = async function() {
    const res = await About.findAll();
    return res;
}

/**
 * 更新关于我内容
 * @param {*} aboutId 关于我ID
 * @param {*} aboutObj 关于我内容
 * @returns 
 */
const updateAbout = async function(aboutId, aboutObj) {
    return await About.update(aboutObj, {
        where: {
            id: aboutId
        }
    })
};

/**
 * 删除关于我
 * @param {*} id 关于我id
 * @returns 
 */
const deleteAbout = async function(id) {
    return await About.destroy({
        where: {
            id,
        }
    })
}

module.exports = {
    addAbout,
    deleteAbout,
    selectAbout,
    updateAbout
}