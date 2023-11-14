//数据
var personArr = [{
    name: '谢永强',
    src: './src/image/1.jpg',
    des: '非常牛逼',
    sex: 'm'
}, {
    name: '陈世华',
    src: './src/image/2.jpg',
    des: '装杯狗',
    sex: 'm'
}, {
    name: '黄双珍',
    src: './src/image/3.jpg',
    des: 'My life',
    sex: 'f'
}, {
    name: '余伟娜',
    src: './src/image/4.jpg',
    des: '余大傻子',
    sex: 'f'
}, {
    name: '梁银行',
    src: './src/image/5.jpg',
    des: '梁儿子，凉皮',
    sex: 'm'
}, {
    name: "冯孟宇",
    src: './src/image/6.jpg',
    des: '梁银行的专属爱慕者',
    sex: 'f'
}];
var state = {
    text: "",
    sex: 'a',
}

// console.log(personArr); 
var oUl = document.getElementsByClassName('friendList')[0].getElementsByTagName('ul')[0];
var oInput = document.getElementsByClassName('search')[0];

//根据模拟数据来渲染页面
function renderPage(data) {
    //在页面生成标签
    var htmlStr = '';
    data.forEach(function(ele, index, self) {
        htmlStr += '<li><img src="' + ele.src + '"></img><p class = "name">' + ele.name +
            '</p><p class = "des">' + ele.des + '</p></li>'
    })
    oUl.innerHTML = htmlStr;
}
renderPage(personArr);

//根据输入框内容来筛选
oInput.oninput = function() {
    state.text = this.value;
    renderPage(lastFilterFunc(personArr));
}

//筛选输入框中的内容
function filterArrByText(data, text) {
    if (!text) {
        return data;
    }
    return data.filter(function(ele, index, self) {
        return ele.name.indexOf(text) != -1;
    });
}


var oButtonArr = [].slice.call(document.getElementsByClassName('btn'), 0);
var lastActiveBtn = oButtonArr[oButtonArr.length - 1];

function changeActive(ele) {
    ele.className = 'btn active';
    lastActiveBtn.className = 'btn';
    lastActiveBtn = ele;
}

oButtonArr.forEach(function(ele, index, self) {
    ele.onclick = function() {
        changeActive(this);
        var sex = this.getAttribute('sex');
        state.sex = sex;
        renderPage(lastFilterFunc(personArr));
    }
});

// 根据性别来筛选
function filterArrBySex(data, sex) {
    if (sex == 'a') {
        return data;
    }
    return data.filter(function(ele, index, self) {
        return ele.sex == sex;
    });
}