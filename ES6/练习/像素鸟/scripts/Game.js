class Game {
    constructor() {
        this.sky = new Sky();
        this.land = new Land(-100);
        this.bird = new Bird();
        this.pipePare = new PipeProduce(-100);
        this.timer = null;
        this.tick = 16; //移动时间间隔，毫秒
        this.gameOver = false;
    }

    /**
     * 开始
     */
    start() {
        if (this.timer) {
            return;
        }
        if (this.gameOver) {
            window.location.reload();
        }
        // 开始游戏时隐藏
        this.hideStartRender();
        this.pipePare.startProduce();
        this.bird.startSwing();
        this.timer = setInterval(() => {
            const duration = this.tick / 1000;
            this.sky.move(duration);
            this.land.move(duration);
            this.bird.move(duration);
            this.pipePare.pipeArr.forEach(pipe => {
                    pipe.move(duration);
                })
                // 结束
            if (this.isGameOver()) {
                this.stop();
                const pastT = parseInt(localStorage.getItem('maxResult'));
                console.log(t, pastT);
                if (pastT < t) {
                    this.localStorageResult(t);
                    console.log(1)
                }
                this.endRender();
                this.gameOver = true;
            }
        }, this.tick)
    }

    /**
     * 结束
     */
    stop() {
        clearInterval(this.timer);
        this.timer = null;
        this.bird.stopSwing();
        this.pipePare.stopProducer();
    }

    /**
     * 碰撞检测
     */

    isHit(rec1, rec2) {
        const rec1X = rec1.left + rec1.width / 2;
        const rec1Y = rec1.top + rec1.height / 2;
        const rec2X = rec2.left + rec2.width / 2;
        const rec2Y = rec2.top + rec2.height / 2;
        const centerX = Math.abs(rec1X - rec2X);
        const centerY = Math.abs(rec1Y - rec2Y);
        if (centerX < (rec1.width + rec2.width) / 2 && centerY < (rec1.height + rec2.height) / 2) {
            return true;
        }
        return false;
    }

    isGameOver() {
        if (this.bird.top === this.bird.maxY) {
            return true;
        }
        for (let i = 0; i < this.pipePare.pipeArr.length; i++) {
            if (this.isHit(this.bird, this.pipePare.pipeArr[i].upPipe) || this.isHit(this.bird, this.pipePare.pipeArr[i].downPipe)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 关键键盘事件
     */
    regEvent() {
        window.onkeydown = (e) => {
            if (e.key === "Enter") {
                if (this.timer) {
                    this.stop();
                } else {
                    this.start();
                }
            } else if (e.key === " ") {
                this.bird.jump();
            }
        }
    }

    /**
     * 结束渲染页面
     */
    endRender() {
        const endShow = document.querySelector('.end');
        endShow.style.display = 'block';
        const showResult = document.querySelector('.end .result');
        showResult.innerHTML = `本次得分：${t}`
        const showHistory = document.querySelector('.history');
        showHistory.innerHTML = `历史最高分：${localStorage.getItem('maxResult')}`
    }

    // pauseRender() {
    //     const startShow = document.querySelector('.pause');
    //     startShow.style.display = 'block';
    // }

    /**
     * 开始渲染页面
     */
    startRender() {
        const startShow = document.querySelector('.start');
        startShow.style.display = 'block';
    }

    hideStartRender() {
        const startShow = document.querySelector('.start');
        startShow.style.display = 'none';
    }

    /**
     * 历史得分
     */
    localStorageResult(t) {
        localStorage.setItem('maxResult', t);
    }

}

const game = new Game();
game.startRender();
game.regEvent();