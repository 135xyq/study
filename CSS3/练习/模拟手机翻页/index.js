(function() {

    var container,
        btn1,
        btn2,
        btn3,
        pageNum,
        next = 0,
        mouseStart = 0,
        mouseMove = 0,
        mouseEnd = 0,
        move,
        timer,
        flag = true;
    var init = function() {
        setPageFunction(); //渲染页面
        addEventsFunction(); //添加事件函数
    }

    var setPageFunction = function() {
        getDomElements();
        setPageNum(); //设置页码
    }

    var addEventsFunction = function() {
        btn1.addEventListener('click', onScrollToPreviousPage);
        btn2.addEventListener('click', onScrollToNextPage);
        btn3.addEventListener('click', onAutoScrollPage);
        container.addEventListener('mousedown', onMouseMoveToPageChange);
    }

    var getDomElements = function() {
        container = document.querySelector('.container');
        btn1 = document.querySelector('button:nth-child(1)')
        btn2 = document.querySelector('button:nth-child(2)')
        btn3 = document.querySelector('button:nth-child(3)')
        pageNum = document.querySelector('.page-num');
    }

    // 设置页码
    var setPageNum = function() {
        pageNum.innerHTML = next + 1;
    }


    // 向前翻页
    var onScrollToPreviousPage = function() {
        next--; //每次向前翻页都减一
        if (next <= 0) {
            next = 0; //到最前面不能在翻页
        }
        container.style.transform = 'translateX(-' + 320 * next + 'px)'
        setPageNum(); //设置页码
        // clearInterval(timer); //自己翻页时结束自动翻页
        // console.log(container.style.transform)
        // console.log(next)
    }

    // 向后翻页
    var onScrollToNextPage = function() {
        next++; //每次向后翻页都加一
        if (next >= 31) {
            next = 31; //到最后不能再向后翻页
        }
        container.style.transform = 'translateX(-' + 320 * next + 'px)'
        setPageNum(); //设置页码
        // clearInterval(timer); //自己翻页时结束自动翻页
        // flag = true; //以便下次再次启动定时器
        // console.log(container.style.transform)
        // console.log(next)
    }

    // 自动阅读
    var onAutoScrollPage = function() {
        //加锁防止多次开启定时器
        if (flag) {
            flag = false;
            timer = setInterval(setMyInterval, 3000);
        }
    }

    // 自动阅读函数
    var setMyInterval = function() {
        onScrollToNextPage();
        // console.log(2);
        if (next >= 31) {
            clearInterval(timer);
            flag = true;
        }
    }

    var onMouseMoveToPageChange = function(ev) {
        mouseStart = ev.offsetX % 320; //鼠标按下去的位置
        // console.log(z, 45464657467)
        // mouseMove = mouseStart; //防止不移动是点击翻页
        // mouseEnd = mouseStart;

        this.onmousemove = function(e) {
            mouseMove = e.offsetX % 320; //鼠标移动
            // console.log(1)
            // console.log(mouseMove);
        }
        this.onmouseup = function() {
            mouseEnd = mouseMove; //记录鼠标抬起时位置，即结束位置
            // console.log(mouseMove)
            // console.log(mouseEnd)
            this.onmousemove = null;
        }

        // console.log(mouseStart, mouseMove, mouseEnd);
        move = mouseEnd - mouseStart; //鼠标移动方向
        // console.log(mouseStart, mouseMove, mouseEnd);
        // console.log(move);
        if (move > 10) {
            onScrollToPreviousPage(); //鼠标水平向右移动大于10px时向前翻页
        } else if (move < -10) {
            onScrollToNextPage(); //鼠标水平向左移动大于10px时向后翻页
        } else {} //不操作
    }



    init()
})()