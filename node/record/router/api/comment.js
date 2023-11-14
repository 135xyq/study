const express = require('express');
const commentServices = require('../../services/commentServices');
const formatDate = require('../../utils/formatDate');
const getMsg = require('../getSendResult');

const router = express.Router();

//获取评论
router.get('/', async(req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const result = await commentServices.getComments(page, limit);
    res.send(getMsg.getResult(result))
})


// 新增一个评论

router.post('/', async(req, res) => {
    const commentsObj = req.body;
    commentsObj.publishDate = formatDate();
    const result = await commentServices.addComments(commentsObj);
    res.send(getMsg.getResult(result))
})

// 删除一个评论

router.delete('/:id', async(req, res) => {
    const result = await commentServices.deleteComments(req.params.id);
    res.send(getMsg.getResult(result))
})


module.exports = router;