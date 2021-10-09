(function() {

    const game = document.getElementById("game");
    let holes = document.getElementsByClassName('hole');
    holes = Array.prototype.slice.call(holes);
    let timer = 0; //定时器
    let source = 0; //分数
    let numArr = []; //地鼠的位置

    for (let i = 0; i < holes.length; i++) {
        numArr.push(i);
    }


    const init = function() {
        // 渲染页面
        render();
        // 添加事件函数
        addEvents();

    }


    const render = function() {
        timer = setInterval(() => {
            console.log(numArr)
            let randomNum = getRandom(numArr.length);
            createMouse(numArr.splice(randomNum, 1));
        }, 1000)
    }

    const addEvents = function() {
        game.addEventListener('mousedown', onMouseChangeDown);
        game.addEventListener('mouseup', onMouseChangeUp);
        holes.forEach((hole, index, array) => {
            hole.addEventListener('mousedown', e => {
                    let dom = e.target;
                    dom.remove();
                }),
                hole.addEventListener('mouseup', e => {
                    let dom = e.target;
                    createBoom()
                })
        })
    }


    /**
     * 根据输入的数值创建一个比这个数小的随机数
     * @param {*} num 
     */
    const getRandom = function(num) {
        return Math.floor(Math.random() * num);
    }

    /**
     * 生成地鼠
     */
    const createMouse = function(i) {
        const mouse = document.createElement('div');
        mouse.className = "mouse";
        holes[i].appendChild(mouse);
    }

    /**
     * 生成BOOM
     */
    const createBoom = function(i) {
        const mouse = document.createElement('div');
        mouse.className = "boom";
        holes[i].appendChild(boom);
    }

    const onMouseChangeDown = function() {
        this.style.cursor = "url(./images/锤子1.ico)";
    }

    const onMouseChangeUp = function() {
        this.style.cursor = "url(./images/锤子2.ico)";
    }



    init();
})()