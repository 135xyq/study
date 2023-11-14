const Project = require('../models/project.js');

// 项目

/**
 * 添加一个项目
 * @param {项目内容} projectObj 
 * @returns 
 */
const addProject = async function(projectObj) {
    const res = await Project.create(projectObj);
    return res.toJSON();
}


/**
 * 分页查询项目
 * @param {*} offset 每页多少数据量
 * @param {*} limit 第几页
 */
const selectProject = async function(offset = 0, limit = 10) {
    const res = await Project.findAndCountAll({
        offset,
        limit
    })
    return {
        total: res.count,
        rows: JSON.parse(JSON.stringify(res.rows)),
    };
}

/**
 * 通过ID查询项目
 * @param {*} id 项目ID
 * @returns 
 */
const selectProjectById = async function(id) {
    const res = await Project.findByPk(id);
    if (!res) {
        // 查不到数据
        return null;
    }
    return res.toJSON();
}

/**
 * 更新项目内容
 * @param {*} projectId 项目ID
 * @param {*} projectObj 项目内容
 * @returns 
 */
const updateProject = async function(projectId, projectObj) {
    return await Project.update(projectObj, {
        where: {
            id: projectId
        }
    })
};

/**
 * 删除项目
 * @param {*} id 项目id
 * @returns 
 */
const deleteProject = async function(id) {
    return await Project.destroy({
        where: {
            id,
        }
    })
}

module.exports = {
    addProject,
    deleteProject,
    selectProject,
    selectProjectById,
    updateProject
}