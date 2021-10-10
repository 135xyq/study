(function() {

    const game = document.getElementById("game");
    const hol = document.getElementsByClassName("holes")[0];
    let holes = document.getElementsByClassName('hole');
    const sourceBox = document.getElementsByClassName('source')[0];
    holes = Array.prototype.slice.call(holes);
    let timer = 0; //定时器
    let source = 0; //分数
    let numArr = []; //地鼠的位置
    let speed = 1000; //速度

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
        speedChange()
    }

    const addEvents = function() {
        hol.addEventListener('mousedown', onMouseChangeDown);
        hol.addEventListener('mouseup', onMouseChangeUp);
        // hol.onmouseenter = function() {
        //     console.log(this)
        //     this.style.cursor = "url('./images/h2.ico'),pointer";
        // }
        holes.forEach((hole, index, array) => {
            hole.addEventListener('mousedown', e => {
                    let dom = e.target;
                    if (dom.classList.contains('mouse')) {
                        source += 100;
                        sourceBox.innerHTML = source;
                    } else if (dom.classList.contains('hole')) {
                        source -= 500;
                        sourceBox.innerHTML = source;
                    }
                    render();
                }),
                hole.addEventListener('mouseup', e => {
                    let dom = e.target;
                    if (dom.classList.contains('mouse')) {
                        let boom1 = createBoom(dom.index)
                        numArr.push(dom.index);
                        dom.remove()
                        setTimeout(() => {
                            boom1.remove()
                        }, 300)
                    }
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
        mouse.index = i;
        holes[i].appendChild(mouse);
    }

    /**
     * 生成BOOM
     */
    const createBoom = function(i) {
        const boom = document.createElement('div');
        boom.index = i;
        boom.className = "boom";
        holes[i].appendChild(boom);
        return boom;
    }

    /**
     * 判断游戏是否失败
     *
     */
    const failGame = function() {
        if (numArr.length === 0) {
            return true;
        }
    }

    /**
     * 根据当前分数调节速度
     * @returns 
     */
    const levelsChange = function() {
        if (source < 0) {
            // 游戏失败
            return -1;
        } else if (source >= 0 && source < 3000) {
            return 1;
        } else if (source >= 3000 && source < 8000) {
            return 2;
        } else if (source >= 8000 && source < 12000) {
            return 3;
        } else if (source >= 12000 && source < 16000) {
            return 4;
        } else {
            return 5;
        }
    }

    /**
     * 判断等级数来执行
     */
    const speedChange = function() {
        const speed = levelsChange();
        switch (speed) {
            case -1:
                clearInterval(timer);
                source = 0;
                alert("游戏失败！");
                window.location.reload();
                break;
            case 1:
                clearTimerStartNew(1);
                break;
            case 2:
                clearTimerStartNew(2);
                break;
            case 3:
                clearTimerStartNew(3);
                break;
            case 4:
                clearTimerStartNew(4);
                break;
            case 5:
                clearInterval(timer);
                alert("通关了！");
                window.location.reload();
                break;
        }
    }

    /**
     * 关闭一个计时器
     * 开启一个新的计时器
     */

    const clearTimerStartNew = function(level) {
        clearInterval(timer);
        timer = setInterval(() => {
            let randomNum = getRandom(numArr.length);
            createMouse(numArr.splice(randomNum, 1));
            if (failGame()) {
                clearInterval(timer);
                alert("失败了！");
                window.location.reload();
            }
        }, speed / level)
    }


    const onMouseChangeDown = function() {
        console.log(this)
        this.style.cursor = "url('./images/h2.ico'),pointer";
    }

    const onMouseChangeUp = function() {
        console.log(this)
        this.style.cursor = "url('./images/h.ico'),help";
    }
    init();
})()