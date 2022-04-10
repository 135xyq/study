(function(root) {
    // 进度条
    function Progress() {
        this.allTime = 0; //存储总时长
        this.clearTimer = null; //定时器
        this.startTime = 0; //开始播放的时间
        this.lastPercent = 0; //已经走过的百分比

        this.init();
    }

    Progress.prototype = {
        init() {
            this.getDom();
        },
        // 获取dom元素
        getDom() {
            this.curTime = document.querySelector('.curTime');
            this.fontBg = document.querySelector('.fontBg');
            this.circle = document.querySelector('.circle');
            this.totalTime = document.querySelector('.totalTime');
        },
        renderAllTime(time) {
            this.allTime = time; //秒数
            time = this.changeTime(time);
            this.totalTime.innerHTML = time;
        },
        // 转换时间格式为分：秒
        changeTime(time) {
            time = Math.round(time);
            let minute = Math.floor(time / 60);
            let seconds = time % 60;
            minute = minute < 10 ? '0' + minute : minute;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            return minute + ':' + seconds;
        },
        //进度条开始移动
        move(pre) {
            clearInterval(this.clearTimer);
            this.startTime = new Date().getTime();

            this.lastPercent = pre === undefined ? this.lastPercent : pre;
            this.clearTimer = setInterval(() => {
                const curTime = new Date().getTime();
                const pre = this.lastPercent + (curTime - this.startTime) / (this.allTime * 1000);
                if (pre <= 1) {
                    // 此时音乐还没播放完，更新
                    this.update(pre);
                } else {
                    // 音乐已经播放完毕，停止

                }
            }, 1000 / 60)
        },
        // 更新进度条
        update(pre) {
            // 左侧的时间
            const time = this.changeTime(pre * this.allTime);
            this.curTime.innerHTML = time;

            // 进度长条
            this.fontBg.style.width = `${pre *100}%`;

            // 更新小圆点的位置
            const disX = pre * this.circle.parentNode.offsetWidth;
            this.circle.style.transform = `translateX(${disX}px)`
        },
        //进度条停止
        stop() {
            clearInterval(this.clearTimer);
            const stopTime = new Date().getTime();
            this.lastPercent += (stopTime - this.startTime) / (this.allTime * 1000);
        }
    }

    function pro() {
        return new Progress();
    }

    // 拖拽
    function Drag(dom) {
        this.dom = dom;
        this.startPoint = 0; //拖拽按下坐标的位置
        this.startLeft = 0; //按下时已经走过的距离
        this.percent = 0; //拖拽的百分比
    }
    Drag.prototype = {
        init() {
            this.dom.style.transform = 'translateX(0)'; //初始化transform便于后续取值

            // 拖拽开始
            this.dom.addEventListener('touchstart', e => {
                this.startPoint = e.changedTouches[0].pageX;
                this.startLeft = parseFloat(this.dom.style.transform.split('(')[1]);

                this.start && this.start(); //对外暴露的接口
            });

            // 拖拽开始
            this.dom.addEventListener('touchmove', e => {
                this.disPointX = e.changedTouches[0].pageX - this.startPoint; //拖动的距离
                let long = this.startLeft + this.disPointX; //小圆点要走的距离
                if (long < 0) {
                    long = 0;
                } else if (long > this.dom.offsetParent.offsetWidth) {
                    long = this.offsetParent.offsetWidth;
                }

                this.dom.style.transform = `translateX(${long}px)`;

                this.percent = long / this.dom.offsetParent.offsetWidth
                this.move && this.move(this.percent);

                e.preventDefault();
            });

            // 拖拽结束
            this.dom.addEventListener('touchend', () => {
                this.end && this.end(this.percent);
            })
        }
    }

    function drag(dom) {
        return new Drag(dom);
    }

    root.progress = {
        pro,
        drag
    }
})(window.player || (window.player = {}));