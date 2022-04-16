const express = require('express');
const categoryServices = require('../../services/category');
const getMsg = require('../getSendResult');

const router = express.Router();

//分页获取分类
router.get('/', async(req, res) => {
    const page = req.query.page ? req.query.page : 1;
    const limit = req.query.limit ? req.query.limit : 10;
    const result = await categoryServices.selectCategory(parseInt((page - 1) * limit), parseInt(limit));
    res.send(getMsg.getResult(result))
})

// 根据ID获取分类
router.get('/:id', async(req, res) => {

})


// 新增一个分类

router.post('/', async(req, res) => {
    const articlesObj = req.body;
    const result = await categoryServices.addCategory(articlesObj);
    res.send(getMsg.getResult(result));
})

// 删除一个分类

router.delete('/:id', async(req, res) => {
    const result = await categoryServices.deleteCategory(req.params.id);
    let data;
    if (result > 0) {
        data = '删除成功！'
    } else {
        data = '删除失败！'
    }
    res.send(getMsg.getResult(data))
})

// 修改分类

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const content = req.body;
    const result = await categoryServices.updateCategory(id, content);
    let data = '';
    if (result[0] > 0) {
        data = '修改成功!'
    } else {
        data = '修改失败'
    }
    res.send(getMsg.getResult(data));
})

module.exports = router;