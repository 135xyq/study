const birdDom = document.getElementsByClassName('bird')[0];
const birdStyle = getComputedStyle(birdDom);
const birdWidth = parseFloat(birdStyle.width);
const birdHeight = parseFloat(birdStyle.height);
const birdLeft = parseFloat(birdStyle.left);
const birdTop = parseFloat(birdStyle.top);
const gameHeight = document.querySelector('.game').clientHeight;
class Bird extends Rectangle {
    constructor() {
        super(birdWidth, birdHeight, birdLeft, birdTop, 0, 0, birdDom);
        this.g = 1500; //垂直方向的加速度
        this.maxY = gameHeight - landHeight - this.height;
        this.timer = null;
        this.swing = 1;
        this.render();
    }

    /**
     * 煽动翅膀
     */
    startSwing() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.swing = (this.swing + 1) % 3 + 1;
            birdDom.className = `bird swing${this.swing}`;
        }, 200)
        this.render();
    }

    stopSwing() {
        clearInterval(this.timer);
        this.timer = null;
    }


    /**
     * 不断改变速度
     * @param {时间间隔} duration 
     */
    move(duration) {
        super.move(duration);
        this.speedY = this.speedY + duration * this.g;
    }

    /**
     * 控制上下位置
     */
    onMove() {
        if (this.top < 0) {
            this.top = 0;
        } else if (this.top > this.maxY) {
            this.top = this.maxY;
        }
    }

    /**
     * 向上跳（给个向上的初速度）
     */
    jump() {
        this.speedY = -300;
    }
}