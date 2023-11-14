const gameDom = document.querySelector('.game');
const gameWidth = gameDom.clientWidth;
let t = 0; //得分
class Pipe extends Rectangle {
    constructor(height, top, speed, dom) {
        super(52, height, gameWidth, top, speed, 0, dom)
    }

    onMove() {
        if (this.left < -this.width) {
            this.dom.remove();
        }
    }
}

// 随机生成管子高度
function RandomHeight(min, max) {
    return Math.random() * (max - min) + min;
}

class PipePare {
    constructor(speed) {
        this.pipeSpace = 150;
        this.minHeight = 80;
        this.maxHeight = landTop - this.pipeSpace - this.minHeight;
        const upHeight = RandomHeight(this.minHeight, this.maxHeight)

        const upDom = document.createElement('div');
        upDom.className = 'pipe up';
        this.upPipe = new Pipe(upHeight, 0, speed, upDom);

        const downHeight = landTop - this.pipeSpace - upHeight
        const downTop = upHeight + this.pipeSpace;
        // console.log(upHeight, downTop, downHeight)
        const downDom = document.createElement('div');
        downDom.className = 'pipe down';
        this.downPipe = new Pipe(downHeight, downTop, speed, downDom);

        gameDom.appendChild(upDom);
        gameDom.appendChild(downDom);
    }

    useLess() {
        return this.upPipe.left < -this.upPipe.width;
    }

    move(duration) {
        this.upPipe.move(duration);
        this.downPipe.move(duration);
    }
}

class PipeProduce {
    constructor(speed) {
        this.speed = speed;
        this.tick = 2000;
        this.timer = null;
        this.pipeArr = [];
    }

    startProduce() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.pipeArr.push(new PipePare(this.speed));
            // 移出不需要的管子
            for (let i = 0; i < this.pipeArr.length; i++) {
                if (this.pipeArr[i].useLess()) {
                    this.pipeArr.splice(i, 1);
                    i--;
                    t++;
                }
            }
        }, this.tick)
    }

    stopProducer() {
        clearInterval(this.timer);
        this.timer = null;
    }
}