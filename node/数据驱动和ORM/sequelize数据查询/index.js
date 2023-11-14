const AdminService = require('./services/adminService');

AdminService.selectAdmins().then(resp => {
    console.log(resp)
})