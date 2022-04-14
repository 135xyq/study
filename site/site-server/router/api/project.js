const express = require('express');
const projectServices = require('../../services/project');
const getMsg = require('../getSendResult');

const router = express.Router();

//分页获取项目
router.get('/', async(req, res) => {
    const page = req.query.page ? req.query.page : 1;
    const limit = req.query.limit ? req.query.limit : 10;
    const result = await projectServices.selectProject(parseInt((page - 1) * limit), parseInt(limit));
    res.send(getMsg.getResult(result))
})


// 新增一个项目

router.post('/', async(req, res) => {
    const articlesObj = req.body;
    const result = await projectServices.addProject(articlesObj);
    res.send(getMsg.getResult(result));
})

// 删除一个项目

router.delete('/:id', async(req, res) => {
    const result = await projectServices.deleteProject(req.params.id);
    let data;
    if (result > 0) {
        data = '删除成功！'
    } else {
        data = '删除失败！'
    }
    res.send(getMsg.getResult(data))
})

// 修改项目

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const content = req.body;
    const result = await projectServices.updateProject(id, content);
    let data = '';
    if (result[0] > 0) {
        data = '修改成功!'
    } else {
        data = '修改失败'
    }
    res.send(getMsg.getResult(data));
})

module.exports = router;