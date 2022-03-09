require('./init');

const adminSer = require('./services/adminService');

adminSer.addAdmin({
    name: '爱',
    loginId: 'test',
    loginPwd: '111'
})