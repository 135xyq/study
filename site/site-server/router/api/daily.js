const express = require('express');
const dailyServices = require('../../services/daily');
const getMsg = require('../getSendResult');

const router = express.Router();

//获取每日一句
router.get('/', async(req, res) => {
    const result = await dailyServices.selectDaily();
    res.send(getMsg.getResult(result))
})


// 新增一个每日一句

router.post('/', async(req, res) => {
    const dailyObj = req.body;
    // const CategoryId = req.body.CategoryId;
    const result = await dailyServices.addDaily(dailyObj);
    res.send(getMsg.getResult(result));
})

// 删除一个每日一句

router.delete('/:id', async(req, res) => {
    const result = await dailyServices.deleteDaily(req.params.id);
    let data;
    if (result > 0) {
        data = '删除成功！'
    } else {
        data = '删除失败！'
    }
    res.send(getMsg.getResult(data))
})

// 修改每日一句

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const content = req.body;
    const result = await dailyServices.updateDaily(id, content);
    let data = '';
    if (result[0] > 0) {
        data = '修改成功!'
    } else {
        data = '修改失败'
    }
    res.send(getMsg.getResult(data));
})


module.exports = router;