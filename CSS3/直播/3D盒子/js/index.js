(function() {
    const boxBg = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#564545', '#607d8b', '#405d6b', '#9e9e9e', '#70737d', '#389fa0', '#38a05e', '#b3c981', '#76a803', '#fecf43', '#e2785f'];
    const bodyBg = ['#F7E8ED', '#F2D9E6', '#ECC6DE', '#E0ECF5', '#DDF4DE', '#F0F1D5', '#EEDECD', '#B8E6B3', '#ABE3D8', '#E0E1F5', '#F7E8ED', '#F2D9E6', '#E0ECF5', '#DDF4DE', '#F0F1D5', '#EEDECD', '#B8E6B3', '#ABE3D8', '#DFD1F0', '#6161616'];
    // const bodyBg = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#564545', '#607d8b', '#405d6b', '#9e9e9e', '#70737d', '#389fa0', '#38a05e', '#b3c981', '#76a803', '#fecf43', '#e2785f'];
    // const bodyBg = ['./images/1.png', './images/2.png', './images/3.png', './images/4.png', './images/5.png', './images/16.png']

    const boxs = document.querySelectorAll('.box');

    const init = function() {
        renderPages();
        addEvents();
    }

    /**
     * 渲染页面的函数
     */
    const renderPages = function() {
        renderBackGroundFunction(); //渲染背景颜色
        renderBoxColorFunction(); //为盒子添加背景图片和背景颜色
    }

    /**
     * 事件监听函数
     */
    const addEvents = function() {
        // 鼠标移入移出盒子
        boxs.forEach(item => {
            item.children[0].addEventListener('mouseenter', onMouseEnterFunction);
            item.addEventListener('mouseleave', onMouseLeaveFunction);
        })

        // 背景角度变化
        document.addEventListener('mousemove', onContentMouseMove)
    }

    // body的背景颜色
    const renderBackGroundFunction = function() {
        document.body.style.background = bodyBg[Math.round(Math.random() * (bodyBg.length - 1))];
        // document.body.style.background = `#f0f url(${bodyBg[Math.round(Math.random() * (bodyBg.length - 1))]})`;
    }

    // 为盒子添加背景图片和背景颜色
    const renderBoxColorFunction = function() {
        let str = "";
        let style = document.createElement("style");
        boxBg.forEach((value, index) => {
            str += `.box:nth-of-type(${index+1}) div{background:${value} url(./images/${(index + 1)}.png) no-repeat center}`
        })
        style.innerHTML = str;
        document.head.appendChild(style)
    }

    // 鼠标移入事件
    const onMouseEnterFunction = function(e) {
        // 获取移入元素的位置
        const top = this.getBoundingClientRect().top;
        const left = this.getBoundingClientRect().left;
        const right = this.getBoundingClientRect().right;
        const bottom = this.getBoundingClientRect().bottom;

        // console.log(top, left, right, bottom);

        // 获取移入的鼠标所在的位置
        const eventX = e.clientX;
        const eventY = e.clientY;
        // console.log(eventX, eventY)
        // 移入位置距离个边框的位置
        const distanceT = Math.abs(eventY - top);
        const distanceB = Math.abs(eventY - bottom);
        const distanceL = Math.abs(eventX - left);
        const distanceR = Math.abs(eventX - right);
        const minDistance = Math.min(distanceL, distanceR, distanceB, distanceT);

        const rotateArr = ['rotateX(-180deg)', 'rotateX(180deg)', 'rotateY(180deg)', 'rotateY(180deg)']

        let index = null;
        switch (minDistance) {
            case distanceT:
                index = 0;
                break;
            case distanceB:
                index = 1;
                break;
            case distanceL:
                index = 2;
                break;
            case distanceR:
                index = 3;
                break;
        }
        this.parentNode.style.transform = 'translateZ(150px)' + rotateArr[index];
        renderBackGroundFunction();
    }

    // 鼠标移出事件
    const onMouseLeaveFunction = function() {
        this.style.transform = "";
    }

    // - 鼠标移动，内容显示改变
    const onContentMouseMove = function(e) {
        // console.log(e.clientX, window.innerWidth)
        const y = (e.clientX / window.innerWidth - 0.5) * 25
        const x = (0.5 - e.clientY / window.innerHeight) * 25
        document.querySelector('body').style.transform = `perspective(1500px) rotateX(${x}deg) rotateY(${y}deg)`
    }


    init();
})()