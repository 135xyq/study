(function() {

    var init = function() {
        initEvents()
    }
    var initEvents = function() {
        loginForm.addEventListener('submit', onLoginFormSubmit, false);
    }

    //事件监听
    var onLoginFormSubmit = function(e) {
        e.preventDefault(); //阻止默认表单提交
        if (!userName.value.trim() || !userPassword.value.trim()) {
            window.alert('用户名或密码不能为空！');
            return;
        }
        ajax({
            url: 'https://api.duyiedu.com/api/student/stuLogin', // 商店的地址
            type: "POST", // 怎么去到这个商店，骑车，坐车
            params: { // 我要给售货员钱
                appkey: 'XYQ__1628040258622',
                account: userName.value,
                password: userPassword.value,
            },
            success: function(res) { // 他给我商品
                res = JSON.parse(res) // 拿到这双鞋，打开包装

                window.alert(res.msg)
                if (res.status === 'success') {
                    window.location.href = '../main/main.html?name=' + userName.value
                }
            }
        })
    }
    init()
})()