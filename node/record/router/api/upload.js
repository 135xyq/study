// 上传图片

const express = require('express');
const multer = require('multer');
const path = require('path');
const getMsg = require('../getSendResult');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/sources'));
    },
    filename: function(req, file, cb) {
        cb(null, 'xyqihsz-' + Date.now() + path.extname(file.originalname));
    }
})

function fileFilter(req, file, cb) {
    whiteList = ['.jpg', 'jpeg', 'png', 'gif'];
    if (whiteList.includes(path.extname(file.originalname))) {
        cb(null, true);
    } else {
        cb(new Error('image upload error! Not support this file!'));
    }
}

const upload = multer({
    storage,
    limits: {
        fileSize: 2 ** 20
    },
    fileFilter,
})

router.post('/', upload.single('images'), (req, res) => {
    res.send(getMsg.getResult({
        url: 'sources/' + req.file.filename
    }))
})

module.exports = router;