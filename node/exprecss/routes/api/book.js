// 针对书籍的路由处理
const express = require('express');
const bookService = require('../../services/bookService');
const getMsg = require('../getSendResult');

const router = express.Router();

// 分页获取书籍
router.get('/', async(req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const keyword = req.query.keyword || '';
    res.send(getMsg.getResult(await bookService.getBooks(page, limit, keyword)))
})

// 根据ID获取书籍
router.get('/:id', async(req, res) => {
    const id = req.params.id;
    res.send(getMsg.getResult(await bookService.getBookById(id)))
})

// 修改书籍信息
router.put('/:id', async(req, res) => {
    const bookObj = req.body; //书籍信息
    const id = req.params.id;
    await bookService.updateBook(id, bookObj)
    res.send(getMsg.getResult(bookObj));
})

// 新增书籍
router.post('/', async(req, res) => {
    const bookObj = req.body; //书籍信息
    res.send(getMsg.getResult(await bookService.addBook(bookObj)));
})

// 删除书籍
router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    let msg = `成功删除id为${id}的书籍`;
    const result = await bookService.deleteBook(id);
    if (result == 0) {
        msg = '书籍不存在！'
    }
    res.send(getMsg.getResult(msg))
})


module.exports = router;