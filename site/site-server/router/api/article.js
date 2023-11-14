const express = require('express');
const articleServices = require('../../services/article');
const categoryServices = require('../../services/category');
const getMsg = require('../getSendResult');

const router = express.Router();

//分页获取文章
router.get('/', async(req, res) => {
    const page = req.query.page ? req.query.page : 1;
    const limit = req.query.limit ? req.query.limit : 10;
    const result = await articleServices.selectArticle(parseInt((page - 1) * limit), parseInt(limit));
    // result.rows
    for (let i = 0; i < result.rows.length; i++) {
        result.rows[i].category = await categoryServices.selectCategoryById(result.rows[i].CategoryId);
    }
    res.send(getMsg.getResult(result))
})

//分页获取文章不获取文章内容
router.get('/info', async(req, res) => {
    const page = req.query.page ? req.query.page : 1;
    const limit = req.query.limit ? req.query.limit : 10;
    const categoryId = req.query.categoryId ? req.query.categoryId : -1;
    const result = await articleServices.selectArticleInfo(parseInt((page - 1) * limit), parseInt(limit), categoryId);
    res.send(getMsg.getResult(result))
})


// 新增一个文章

router.post('/', async(req, res) => {
    const articleObj = req.body;
    // console.log(articleObj, req.body)
    // const CategoryId = req.body.CategoryId;
    const result = await articleServices.addArticle(articleObj);
    res.send(getMsg.getResult(result));
})

// 删除一个文章

router.delete('/:id', async(req, res) => {
    const result = await articleServices.deleteArticle(req.params.id);
    let data;
    if (result > 0) {
        data = '删除成功！'
    } else {
        data = '删除失败！'
    }
    res.send(getMsg.getResult(data))
})

// 修改文章

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const content = req.body;
    const result = await articleServices.updateArticle(id, content);
    let data = '';
    if (result[0] > 0) {
        data = '修改成功!'
    } else {
        data = '修改失败'
    }
    res.send(getMsg.getResult(data));
})

// 根据ID获取文章
router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const result = await articleServices.selectArticleById(id);
    const rest = await articleServices.updateArticle(id, {
        readCount: result.readCount + 1,
    })
    res.send(getMsg.getResult(result));
})


module.exports = router;