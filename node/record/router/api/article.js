const express = require('express');
const articleServices = require('../../services/articleServices');
const formatDate = require('../../utils/formatDate');
const getMsg = require('../getSendResult');

const router = express.Router();

//获取文章
router.get('/', async(req, res) => {
    const result = await articleServices.getAllArticles();
    res.send(getMsg.getResult(result))
})


// 新增一个文章

router.post('/', async(req, res) => {
    const articlesObj = req.body;
    articlesObj.publishDate = formatDate();
    const result = await articleServices.addArticle(articlesObj);
    res.send(getMsg.getResult(result))
})

// 删除一个文章

router.delete('/:id', async(req, res) => {
    const result = await articleServices.deleteArticle(req.params.id);
    // console.log(result)
    res.send(getMsg.getResult(result))
})

// 修改文章

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const content = req.body.content;
    const result = await articleServices.updateArticle(id, content);
    res.send(getMsg.getResult(result[0]));
})


module.exports = router;