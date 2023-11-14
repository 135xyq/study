// 文件下载

const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/:filename', (req, res) => {
    const filePath = path.resolve(__dirname, '../../public/downloadResource/', req.params.filename);
    // filePath下载文件的路径，req.params.filename下载时默认保存的文件名
    res.download(filePath, req.params.filename);
})

module.exports = router;