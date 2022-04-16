const express = require('express');
const { admin } = require('../../config/config.default');
const adminServices = require('../../services/admin');
const getMsg = require('../getSendResult');
const jwt = require('../jwt');

const router = express.Router();

router.post('/login', async(req, res) => {
    const loginId = req.body.userName;
    const loginPwd = req.body.password;
    const result = await adminServices.login(loginId, loginPwd);
    if (result) {
        jwt.publish(res, { id: result.id })
        res.send(getMsg.getResult(result));
    } else {
        res.send(getMsg.getError('账号或密码错误', 404))
    }
})

router.get('/whoami', async(req, res) => {
    const result = await adminServices.getAdminById(req.userId);
    res.send(getMsg.getResult({
        id: result.id,
        userName: result.userName,
        avatar: result.avatar
    }))
})


router.put('/', async(req, res) => {
    const adminObj = req.body;
    const result = await adminServices.updateAdmin(req.userId, adminObj);
    let data = '';
    if (result[0] > 0) {
        data = '修改成功!'
    } else {
        data = '修改失败'
    }
    res.send(getMsg.getResult(
        data
    ))
})

//退出登录

router.post('/logout', async(req, res) => {
    // console.log(jwt)
    jwt.publish(res, {}, -1)
    res.send(getMsg.getResult('退出成功！'));
})

module.exports = router;