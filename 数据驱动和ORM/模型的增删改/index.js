// const sequelize = require('./models/sync.js');

const adminService = require('./services/adminService');
const studentService = require('./services/studentService');
const classService = require('./services/classService');
const bookService = require('./services/bookService');

//管理员

// 新增
// adminService.addAdmin({
//     loginId: 'zmm沃尔ete沃日',
//     loginPwd: '123123',
//     name: '她'
// })


// 删除

// adminService.deleteAdmin(5)


// 修改

// adminService.updateAdmin(3, {
//     loginId: 'lyh'
// })


// 学生

// 新增

// studentService.addStudent({
//     name: '筱12',
//     birthDay: '2002-03-21',
//     sex: '0',
//     phone: '16673227887'
// })

// 删除

// studentService.deleteStudent(3)


// 更新

// studentService.updateStudent(4, {
//     name: '她'
// })


// 班级

// classService.addClass({
//     name: 'HTML',
//     startData: '2002-03-07',
// })
// classService.addClass({
//     name: 'CSS',
//     startData: '2002-03-07',
// })

// classService.updateClass(2, {
//     startData: '2022-03-06'
// })

classService.deleteClass(3)