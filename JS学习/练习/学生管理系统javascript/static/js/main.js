(function() {
    var page = 1;
    var size = 3;
    var totalAmount = 0;
    var obj = {}; //保存学号和信息的对应关系
    var contentItemLists = document.querySelectorAll('.content-item')
    var navLists = document.querySelectorAll('.nav-container-item'); //导航栏集合
    // 程序入口
    var init = function() {
        initLists();
        initEvents();
    }

    var initEvents = function() {
        // 点击指定页号到达页面
        paginationContainer.addEventListener('click', onPageClickTo);

        //点击向后跳转按钮事件
        next.addEventListener('click', onClickNext);

        //点击向后前跳转按钮事件
        previous.addEventListener('click', onClickPrevious);

        //表格点击事件
        tableContainer.addEventListener('click', onTableContainerClick)

        // 导航栏事件绑定
        navLists.forEach(function(node, index) {
                node.addEventListener('click', onClickNavList.bind(node, index));
            })
            //添加新的学生
        addBtn.addEventListener('click', onSubmitNewStudent);

        /* 修改内容事件绑定 */
        updateBtn.addEventListener('click', onUpdateBtnClick);

        //查找学生
        searchBtn.addEventListener('click', onSubmitSearchStudent);

    }

    var onSubmitSearchStudent = function(e) {
        e.preventDefault();
        if (!searchKeyword.value) {
            alert("请输入入学生的学号、邮箱或地址");
            return;
        }
        ajax({
            url: "https://api.duyiedu.com/api/student/searchStudent",
            type: "GET",
            params: {
                appkey: "XYQ__1628040258622",
                sex: selectSex.value,
                search: searchKeyword.value,
                page: selectPage.value,
                size: selectSize.value,
            },
            success: function(res) {
                var res = JSON.parse(res);
                searchKeyword.value = "";
                // console.log(res);
                var number = res.data.cont;
                console.log(number);
                //渲染表格
                renderTableList(res.data.searchList, selectTableContainer);
                console.log(res.data.searchList)
                    // 渲染分页
                renderPageList(number);
                // console.log(res);
            }

        })
    }

    // 添加新的学生
    var onSubmitNewStudent = function() {
        ajax({
            url: "https://api.duyiedu.com/api/student/addStudent",
            type: "GET",
            params: {
                appkey: "XYQ__1628040258622",
                sNo: userSNo.value,
                name: document.getElementById('userName').value,
                sex: userSex.value,
                birth: userBirth.value,
                phone: userPhone.value,
                address: userAddress.value,
                email: userEmail.value,
            },
            success: function(res) {
                var res = JSON.parse(res);
                if (res.status === 'success') {
                    alert('添加成功！');
                    initLists();
                    userSNo.value = '';
                    document.getElementById('userName').value = '';
                    userBirth.value = '';
                    userPhone.value = '';
                    userAddress.value = '';
                    userEmail.value = '';
                    return;
                }
                if (res.msg == '学号必须为4-16位的数字组成') {
                    alert('学号必须为4-16位的数字组成');
                    return;
                }
                if (res.status == '该学生已经存在') {
                    alert('该学生已经存在');
                    return;
                }
            }
        })
    }

    /* 表格点击事件函数 */
    var onTableContainerClick = function(e) {
        if (e.target.className === 'edit') {
            editListItem(e.target)
        } else if (e.target.className === 'del') {
            deleteListItem(e.target)
        }
    }

    /* 删除事件函数 */
    var deleteListItem = function(currentNode) {
        var uId = currentNode.getAttribute('uId')
        var isConfirm = window.confirm('确认是否删除')
        if (!isConfirm) return
        ajax({
            url: 'https://api.duyiedu.com/api/student/delBySno',
            params: {
                appkey: "XYQ__1628040258622",
                sNo: uId,
            },
            success: function(res) {
                res = JSON.parse(res)
                window.alert(res.msg)
                    // dialogContainer.style.display = 'none'
                    // /* 重新进行数据的渲染 */
                if (page * size - size === totalAmount - 1) {
                    page -= 1
                }
                initLists()
            },
        })
    }

    /* 发送修改请求函数 */
    var onUpdateBtnClick = function() {
        /* TODO  非空验证 */
        ajax({
            url: "https://api.duyiedu.com/api/student/updateStudent",
            type: "GET",
            params: {
                appkey: "XYQ__1628040258622",
                sNo: tempId,
                name: document.getElementById('name').value,
                sex: sex.value,
                birth: birth.value,
                phone: phone.value,
                address: address.value,
                email: email.value,
            },
            success: function(res) {
                res = JSON.parse(res)
                window.alert(res.msg)
                dialogContainer.style.display = 'none'
                    /* 重新进行数据的渲染 */
                initLists()
            },
        })
    }

    /* 编辑函数 */
    var editListItem = function(currentNode) {
        tempId = currentNode.getAttribute('uId')
        for (var key in obj[tempId]) {
            document.getElementById(key) && (document.getElementById(key).value = obj[tempId][key])
        }
        dialogContainer.style.display = 'block'
    }

    /* 发送修改请求函数 */
    var onUpdateBtnClick = function() {
        /* TODO  非空验证 */
        ajax({
            url: "https://api.duyiedu.com/api/student/updateStudent",
            type: "GET",
            params: {
                appkey: "XYQ__1628040258622",
                sNo: tempId,
                name: document.getElementById('name').value,
                sex: sex.value,
                birth: birth.value,
                phone: phone.value,
                address: address.value,
                email: email.value,
            },
            success: function(res) {
                res = JSON.parse(res)
                window.alert(res.msg)
                dialogContainer.style.display = 'none'
                    /* 重新进行数据的渲染 */
                initLists()
            },
        })
    }


    /* 导航栏的点击事件 */
    var onClickNavList = function(index) {
        contentItemLists.forEach(function(node, contentIndex) {
            node.className = contentIndex === index ? 'content-item active' : 'content-item';
            navLists[contentIndex].className = 'nav-container-item';
        })
        this.className = 'nav-container-item active';
    }

    // 点击向后跳转的按钮
    var onClickNext = function() {
        if (page == paginationContainer.children.length) {
            alert('已经是最后一页了！');
            return
        } else {
            page++;
        }
        paginationContainer.children[page - 1].click(); //不懂啥意思
        // fillActive()
    }

    // 点击向前跳转的按钮
    var onClickPrevious = function() {
        if (page == 1) {
            alert('已经是第一页了！');
            return
        } else {
            page--;
        }
        paginationContainer.children[page - 1].click(); //不懂啥意思
        // fillActive()
    }

    //点击索引到达指定的页面 
    var onPageClickTo = function(e) {
        var target = e.target;
        if (target.id === 'paginationContainer') {
            return;
        }
        page = target.innerHTML;
        // console.log(page);
        initLists()
    }


    // 表格的数据获取
    var initLists = function() {
        ajax({
            url: "https://api.duyiedu.com/api/student/findByPage",
            type: "GET",
            params: {
                appkey: "XYQ__1628040258622",
                page: page,
                size: size,
            },
            success: function(res) {
                var res = JSON.parse(res);
                // console.log(res);
                totalAmount = res.data.cont;
                //渲染表格
                renderTableList(res.data.findByPage, tableContainer);
                // 渲染分页
                renderPageList(totalAmount);
            }
        })
    }

    // 渲染分页函数
    var renderPageList = function(num) {
        var pageNumber = Math.ceil(num / size);
        var arr = [];
        for (var i = 1; i <= pageNumber; i++) {
            arr.push('<div class = "page-item">' + i + '</div>');
        }
        paginationContainer.innerHTML = arr.join('');
        fillActive();
    }

    /* 添加分页的高亮状态 */
    var fillActive = function() {
        document.querySelectorAll('.page-item').forEach(function(node) {
            node.innerHTML == page && (node.className = 'page-item active')
        })
    }

    //渲染表格函数
    var renderTableList = function(arr, dom) {
        var arrTemp = [];

        if (!arr.length) {
            dom.innerHTML = '<tr><td colspan="8">暂无数据</td></tr>'
            return
        }

        arr.forEach(function(ele, index, self) {
            arrTemp.push(
                '<tr>' +
                '<td>' + ele.sNo + '</td>' +
                '<td>' + ele.name + '</td>' +
                '<td>' + (ele.sex === 0 ? '男' : '女') + '</td>' +
                '<td>' + (new Date().getFullYear() - ele.birth) + '</td>' +
                '<td>' + ele.phone + '</td>' +
                '<td>' + ele.email + '</td>' +
                '<td>' + ele.address + '</td>' +
                ' <td> <span uId="' + ele.sNo + '" class="edit" index="0">编辑</span> <span uId="' + ele.sNo + '" class="del" index="0">删除</span> </td>' +
                '</tr>'
            )
            obj[ele.sNo] = ele;
        })
        dom.innerHTML = arrTemp.join('');
    }
    init();
})()