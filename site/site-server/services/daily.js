const Daily = require('../models/daily.js');


// 每日感悟

/**
 * 添加一个每日感悟
 * @param {每日感悟内容} dailyObj 
 * @returns 
 */
const addDaily = async function(dailyObj) {
    const res = await Daily.create(dailyObj);
    return res.toJSON();
}


/**
 * 查询每日感悟

 */
const selectDaily = async function() {
    const res = await Daily.findAll();
    return res;
}

/**
 * 更新每日感悟内容
 * @param {*} dailyId 每日感悟ID
 * @param {*} dailyObj 每日感悟内容
 * @returns 
 */
const updateDaily = async function(dailyId, dailyObj) {
    return await Daily.update(dailyObj, {
        where: {
            id: dailyId
        }
    })
};

/**
 * 删除每日感悟
 * @param {*} id 每日感悟id
 * @returns 
 */
const deleteDaily = async function(id) {
    return await Daily.destroy({
        where: {
            id,
        }
    })
}

module.exports = {
    addDaily,
    deleteDaily,
    selectDaily,
    updateDaily
}