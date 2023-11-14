// 针对管理员的路由处理
const express = require('express');
const adminService = require('../../services/adminService');
const getMsg = require('../getSendResult');
const crypt = require("../../utils/crypt");
const jwt = require('../jwt');

const router = express.Router();

// 获取全部管理员
router.get('/', async(req, res) => {
        res.send(getMsg.getResult(await adminService.getAdmins()))
    })
    // 修改管理员信息
router.put('/:id', async(req, res) => {
    const adminObj = req.body; //管理员信息
    const id = req.params.id;
    await adminService.updateAdmin(id, adminObj);
    res.send(getMsg.getResult(adminObj));
})

// 新增一个管理员
router.post('/', async(req, res) => {
    const adminObj = req.body; //管理员信息
    res.send(getMsg.getResult(await adminService.addAdmin(adminObj)));
})

// 删除一个管理员
router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    let msg = `成功删除id为${id}的管理员`;
    const result = await adminService.deleteAdmin(id);
    if (result == 0) {
        msg = '管理员不存在！'
    }
    res.send(getMsg.getResult(msg))
})

// 登录

router.post('/login', async(req, res) => {
    const loginId = req.body.loginId;
    const loginPwd = req.body.loginPwd;
    const maxAge = req.body.maxAge ? req.body.maxAge : 24 * 3600;
    const result = await adminService.login(loginId, loginPwd)
    if (result) {
        let value = result.id;
        // value = crypt.encrypt(value.toString())
        // res.cookie('token', value, {
        //     path: '/',
        //     domain: 'localhost',
        //     maxAge: 1000 * 3600 * 24, //单位是毫秒
        // });
        // res.header("authorization", value); // 适配其他终端
        jwt.publish(res, maxAge, { id: value });
        res.send(getMsg.getResult(result));
    } else {
        res.send('登录失败,账号或密码错误！')
    }
})

// 获取当前登录者的信息
router.get('/whoami', async(req, res) => {
    const result = await adminService.getAdminById(9);
    res.send(getMsg.getResult(result));
})


module.exports = router;