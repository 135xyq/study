const express = require('express');
const aboutServices = require('../../services/about');
const getMsg = require('../getSendResult');

const router = express.Router();

//获取关于我
router.get('/', async(req, res) => {
    const result = await aboutServices.selectAbout();
    res.send(getMsg.getResult(result))
})


// 新增一个关于我

router.post('/', async(req, res) => {
    const aboutObj = req.body;
    // const CategoryId = req.body.CategoryId;
    const result = await aboutServices.addAbout(aboutObj);
    res.send(getMsg.getResult(result));
})

// 删除一个关于我

router.delete('/:id', async(req, res) => {
    const result = await aboutServices.deleteAbout(req.params.id);
    let data;
    if (result > 0) {
        data = '删除成功！'
    } else {
        data = '删除失败！'
    }
    res.send(getMsg.getResult(data))
})

// 修改关于我

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const content = req.body;
    const result = await aboutServices.updateAbout(id, content);
    let data = '';
    if (result[0] > 0) {
        data = '修改成功!'
    } else {
        data = '修改失败'
    }
    res.send(getMsg.getResult(data));
})


module.exports = router;