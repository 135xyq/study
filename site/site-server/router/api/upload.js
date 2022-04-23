// 文件上传

const express = require('express');
const multer = require('multer');
const path = require('path');
const getMsg = require('../getSendResult');

const router = express.Router();

/**
 * 要存储的文件地址和文件名
 */
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const distName = path.resolve(__dirname, '../../public/upload');
        cb(null, distName)
    },
    filename: function(req, file, cb) {
        // 文件名等于时间戳-xyqihsz后缀名
        const filename = Date.now() + '-xyqihsz' + path.extname(file.originalname);
        cb(null, filename)
    }
})


function fileFilter(req, file, cb) {
    // 允许上传的文件类型
    const whiteList = ['.jpg', '.png', '.jpeg', '.gif', '.pdf', '.doc'];
    if (whiteList.includes(path.extname(file.originalname))) {
        cb(null, true);
    } else {
        //处理异常
        cb(new Error(`you upload file extname '${path.extname(file.originalname)}' is not support!`))
    }
}

const upload = multer({
    storage,
    limits: {
        fileSize: 20000 * 1024,
    }, //限制文件大小
    fileFilter
})


router.post('/', upload.single('img'), (req, res) => {
    res.send(getMsg.getResult({
        url: 'upload/' + req.file.filename,
    }))
})

module.exports = router;