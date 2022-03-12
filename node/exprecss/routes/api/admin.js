// 针对管理员的路由处理
const express = require('express');
const adminService = require('../../services/adminService');
const getMsg = require('../getSendResult');

const router = express.Router();

// 获取全部管理员
router.get('/', async(req, res) => {
    res.send(getMsg.getResult(await adminService.getAdmins()))
})

//获取单个管理员
router.get('/:id', async(req, res) => {
    const id = req.params.id;
    res.send(getMsg.getResult(await adminService.getAdminById(id)))
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


module.exports = router;