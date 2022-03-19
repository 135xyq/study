const express = require('express');
const adminServices = require('../../services/adminServices');
const getMsg = require('../getSendResult');
const jwt = require('../jwt');

const router = express.Router();

router.post('/login', async(req, res) => {
    const loginId = req.body.loginId;
    const loginPwd = req.body.loginPwd;
    const result = await adminServices.login(loginId, loginPwd);
    if (result) {
        jwt.publish(res, { id: result.id })
        res.send(getMsg.getResult(result));
    } else {
        res.send(getMsg.getError('账号或密码错误', 404))
    }
})


module.exports = router;