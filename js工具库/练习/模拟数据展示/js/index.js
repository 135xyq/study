(function() {
    var init = function() {
        addEvents();
    }

    var addEvents = function() {
        $('.show').on('click', showPage);
        $('.hidden').on('click', hiddenPage);
    }

    var showPage = function() {
        // console.log(1);
        getDataToBackEnd();
        // $('#dataContainer').css('display', 'inline');
        $('.show').css('display', 'none');
        $('.hidden').css('display', 'block');
    }

    var hiddenPage = function() {
        // console.log('2');
        // $('#dataContainer').css('display', 'none');
        $('.hidden').css('display', 'none');
        $('#dataContainer').remove();
        $('.show').css('display', 'block');

    }

    // 向后端获取数据
    var getDataToBackEnd = function() {
        $.ajax({
            url: '../js/data.json',
            type: 'get',
            dataType: 'json',
            success: function(data) {
                // console.log(data);
                createDomToPage(data.data);
            }
        })
    }

    // 渲染页面添加dom元素
    var createDomToPage = function(data) {
        $('table').append('<tbody id="dataContainer"></tbody')
        var str = [];
        data.forEach(function(item, index) {
            str.push(
                '<tr>' +
                '<td>' + item.sNo + '</td>' +
                '<td>' + item.name + '</td>' +
                '<td>' + item.sex + '</td>' +
                '<td>' + item.email + '</td>' +
                '<td>' + item.birth + '</td>' +
                '<td>' + item.address + '</td>' +
                '<td>' + item.phone + '</td>' +
                '<td>' + item.appkey + '</td>' +
                '</tr>'
            )
        })
        $('#dataContainer').append(str.join(''));
    }

    // 自己模拟生成数据
    Mock.mock('../js/data.json', {
            "status": "success",
            "msg": "查询成功",
            "data|1000": [{ //1000条数据
                'id|+1': 1,
                'name': '@cname',
                'birth': '@date',
                'sex|1': ['男', '女'],
                'sNo|+1': 10000,
                'email': '@email',
                'phone': '@natural(13000000000,19900000000)',
                'address': '@county(true)',
                'appkey': '@string(5,7)_@date(T)',
                'ctime': '@date(T)',
                'utime': '@date(T)',
            }]
        })
        // 分页
    var pageShow = function(num) {
            var arr = [];
            var pages = Math.ceil(num / 10); //分页的数量
            for (var i = 1; i <= pages; i++) {
                arr.push("<div class = item" + i + "> " + i + "</div>");
            }
            $('.page-index-container').append(arr.join(''))
        }
        // pageShow(100)
    init();
})()