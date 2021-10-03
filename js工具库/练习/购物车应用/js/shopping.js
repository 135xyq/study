var selectData = {}; //用来存储所有的商品和商品信息
function init() {
    selectData = JSON.parse(localStorage.getItem('shoppingCar t')) || {}; //第一次的容错处理
    createSelectDom(); //渲染页面，防止页面刷新
    // console.log(1);
}
init();
// 数据请求
ajax('../js/shoppingData.json', function(data) {
    createGoodsDom(data);
    addEvents();
})

function createGoodsDom(data) {
    var str = '';
    data.forEach(function(item) {
        var color = ''; //用来存储每条数据里面的所有颜色信息
        item.list.forEach(function(product) {
            color += '<span data-id="' + product.id + '">' + product.color + '</span>';
        });

        str += '<tr>' +
            '<td>' +
            '<img src="' + item.list[0].img + '" />' +
            '</td>' +
            '<td>' +
            ' <p>' + item.name + '</p>' +
            '<div class="color">' + color + '</div>' +
            '</td>' +
            '<td>' + item.list[0].price + '.00元</td>' +
            '<td>' +
            '<span>-</span>' +
            '<strong>0</strong>' +
            '<span>+</span>' +
            '</td>' +
            '<td><button>加入购物车</button></td>' +
            '</tr> ';
    });

    var tbody = document.querySelector('.product tbody');
    tbody.innerHTML = str;
}

// 添加商品操作事件
function addEvents() {
    var trs = document.querySelectorAll('.product tr');
    for (var i = 0; i < trs.length; i++) {
        action(trs[i], i)
    }

    function action(tr, n) {
        var tds = tr.children, //打你去哪个行里的所有td
            img = tds[0].children[0], //商品图片
            imgSrc = img.getAttribute('src'), //图片地址
            name = tds[1].children[0].innerHTML, //商品的名字
            colors = tds[1].children[1].children, //所有颜色按钮
            price = parseFloat(tds[2].innerHTML), //价格
            spans = tds[3].querySelectorAll('span'), //加减按钮
            strong = tds[3].querySelector('strong'), //数量
            joinBtn = tds[4].children[0], //加入购物车按钮
            selectNum = 0; //选中商品的数量

        // 颜色按钮点击功能
        var last = null, //上一次选中的按钮
            colorValue = '', //选中的颜色
            colorId = ''; //选中商品对应的id
        for (var i = 0; i < colors.length; i++) {
            colors[i].index = i; //索引值
            colors[i].onclick = function() {
                last && last != this && (last.className = '');

                this.className = this.className ? '' : 'active';
                colorValue = this.className ? this.innerHTML : '';
                colorId = this.className ? this.dataset.id : '';
                imgSrc = this.className ? '../images/img_0' + (n + 1) + '-' + (this.index + 1) + '.png' : '../images/img_0' + (n + 1) + '-1.png'
                img.src = imgSrc;
                last = this; //为了把当前次点击的对象赋值给last
            }
        }

        // 减按钮点击
        spans[0].onclick = function() {
            selectNum--;
            if (selectNum < 0) {
                selectNum = 0;
            }

            strong.innerHTML = selectNum
        };

        //加按钮
        spans[1].onclick = function() {
            selectNum++;

            strong.innerHTML = selectNum;
        };

        //加入购物车
        joinBtn.onclick = function() {
            if (!colorValue) {
                alert("请选择颜色！");
                return;
            }
            if (!selectNum) {
                alert("请添加购买数量！");
                return;
            }

            //给selectData对象赋值
            selectData[colorId] = {
                "id": colorId,
                "name": name,
                "color": colorValue,
                "price": price,
                "num": selectNum,
                "img": imgSrc,
                "time": new Date().getTime(),
            };

            localStorage.setItem('shoppingCart', JSON.stringify(selectData));

            //点击之后还原
            imgSrc = '../images/img_0' + (n + 1) + '-1.png';
            last.className = '';
            strong.innerHTML = selectNum = 0;

            //渲染购物车
            createSelectDom();
        }
    }
}

// 创建购物车商品结构
function createSelectDom() {
    var tbody = document.querySelector('.selected tbody');
    var totalPrice = document.querySelector('.selected th strong');
    var str = '';
    var total = 0; //总共多少钱

    //console.log(selectData);
    var goods = Object.values(selectData); //ES7里面的方法,用来取到对象里的所有value，并把取到的内容放到一个数组里

    //对已选择的商品进行排序
    goods.sort(function(g1, g2) {
        return g2.time - g1.time;
    });

    //console.log(goods);

    tbody.innerHTML = '';
    for (var i = 0; i < goods.length; i++) {
        str += '<tr>' +
            '<td>' +
            '<img src="' + goods[i].img + '" />' +
            '</td>' +
            '<td>' +
            '<p>' + goods[i].name + '</p>' +
            '</td>' +
            '<td>' + goods[i].color + '</td>' +
            '<td>' + goods[i].price * goods[i].num + '.00元</td>' +
            '<td>x' + goods[i].num + '</td>' +
            '<td><button data-id="' + goods[i].id + '">删除</button></td>' +
            '</tr>';

        total += goods[i].price * goods[i].num;
    }
    tbody.innerHTML = str;
    totalPrice.innerHTML = total + '.00元';

    del(); //结构创建完成了，添加删除功能
}
//删除功能
function del() {
    var btns = document.querySelectorAll('.selected tbody button');
    var tbody = document.querySelector('.selected tbody');

    for (var i = 0; i < btns.length; i++) {
        btns[i].onclick = function() {
            //删除对象里的数据
            delete selectData[this.dataset.id];
            localStorage.setItem('shoppingCart', JSON.stringify(selectData));

            //删除DOM结构
            tbody.removeChild(this.parentNode.parentNode);

            //更新总价格
            var totalPrice = document.querySelector('.selected th strong');
            totalPrice.innerHTML = parseFloat(totalPrice.innerHTML) - parseFloat(this.parentNode.parentNode.children[3].innerHTML) + '.00元';
        };
    }
}
//storage事件
window.addEventListener('storage', function(ev) {
    init();
});