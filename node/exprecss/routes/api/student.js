// 针对学生的路由处理
const express = require('express');
const studentService = require('../../services/studentService');
const getMsg = require('../getSendResult');

const router = express.Router();

// 分页获取学生
router.get('/', async(req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const sex = req.query.sex || -1;
    const name = req.query.name || '';
    res.send(getMsg.getResult(await studentService.getStudents(page, limit, sex, name)))
})

//根据Id获取学生
router.get('/:id', async(req, res) => {
    const id = req.params.id;
    res.send(getMsg.getResult(await studentService.getStudentById(id)))
})

//修改学生信息
router.put('/:id', async(req, res) => {
    const stuObj = req.body; //学生信息
    const id = req.params.id;
    await studentService.updateStudent(id, stuObj);
    res.send(getMsg.getResult(stuObj));
})

// 新增一个学生
router.post('/', async(req, res) => {
    const stuObj = req.body; //学生信息
    res.send(getMsg.getResult(await studentService.addStudent(stuObj)));
})

// 删除一个学生
router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    let msg = `成功删除id为${id}的学生`;
    const result = await studentService.deleteStudent(id);
    if (result == 0) {
        msg = '学生不存在！'
    }
    res.send(getMsg.getResult(msg))
})


module.exports = router;