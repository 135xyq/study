(function() {
    // 程序入口
    var checkName = null;
    var init = function() {
        initEvents();
    }

    // 事件入口函数
    var initEvents = function() {
            userName.addEventListener('focus', onUserNameFocus, false);
            userName.addEventListener('blur', onUserNameBlur, false);
            registerForm.addEventListener('submit', onRegisterFormSubmit);
        }
        /* 表单提交 */
    var onRegisterFormSubmit = function(e) {
        e.preventDefault()
            /* 数据的收集 */
            /* TODO 前端验证 */
        if (checkName) {
            window.alert(checkName)
            return
        }
        /* 接口的调用 */
        ajax({
            url: 'https://api.duyiedu.com/api/student/stuRegister', // 跟后端通信的地址，找到后端
            type: 'POST', // 后端告诉我写的
            params: { // 给后端的内容
                appkey: 'XYQ__1628040258622',
                account: userAccount.value,
                username: userName.value,
                password: userPassword.value,
                rePassword: confirmPassword.value
            },
            success: function(res) { // 获取后端数据的回调函数
                res = JSON.parse(res)
                window.alert(res.msg)
                if (res.status === 'success') {
                    window.location.href = '../login/login.html'
                }
            }
        })
    }

    // 用户名获得焦点事件函数
    var onUserNameFocus = function() {
        // var tipMessage = document.querySelector('.tip-message');
        tipMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        this.className = '';
    }

    var onUserNameBlur = function() {
        tipMessage.style.display = 'none';
        this.value = this.value.replace(/\s/g, '');
        // console.log(this.value);
        if (!this.value) return;
        /* 做验证
        不能为纯数字
        不能超过14位数
        一个汉字可以看作是2个字符
        */
        /* 用户名的检测 */
        checkName = checkUserName(this.value);
        // console.log(checkName);
        if (checkName) {
            errorMessage.style.display = 'block';
            errorMessage.innerHTML = checkName;
            this.className = 'error-inp';
        }


    }
    var checkUserName = function(str) {
            var total = 0; //字符数
            var reg1 = /[a-zA-Z0-9_\u4e00-\u9fa5]/;
            var reg2 = /[\u4e00-\u9fa5]/; //检验中文个数

            for (var i = 0; i < str.length; i++) {
                if (!reg1.test(str[i])) {
                    return '输入的字符不合法，请重新输入';
                } else {
                    reg2.test(str[i]) ? total += 2 : total += 1;
                }
            }
            switch (true) {
                case !!Number(str): //输入为纯数字
                    return '用户名不能全是数字';
                case total > 14: //输入字符过多
                    return '用户名超过14个英文或7个汉字'
                default: //输入无误
                    return '';
            }
        }
        // console.log(checkMyself.value)
    init();
})()