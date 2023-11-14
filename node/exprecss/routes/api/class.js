// 针对班级的路由处理
const express = require('express');
const classService = require('../../services/classService');
const getMsg = require('../getSendResult');

const router = express.Router();

// 分页获取班级
router.get('/', async(req, res) => {
    res.send(getMsg.getResult(await classService.getClasses()))
})

//根据Id获取班级
router.get('/:id', async(req, res) => {
    const id = req.params.id;
    res.send(getMsg.getResult(await classService.getClassById(id)))
})

//修改班级信息
router.put('/:id', async(req, res) => {
    const classObj = req.body; //班级信息
    const id = req.params.id;
    await classService.updateClass(id, classObj);
    res.send(getMsg.getResult(classObj));
})

// 新增一个班级
router.post('/', async(req, res) => {
    const classObj = req.body; //班级信息
    res.send(getMsg.getResult(await classService.addClass(classObj)));
})

// 删除一个班级
router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    let msg = `成功删除id为${id}的班级`;
    const result = (await classService.deleteClass(id));
    if (result == 0) {
        msg = '班级不存在！'
    }
    res.send(getMsg.getResult(msg))
})


module.exports = router;