class Rectangle {
    constructor(width, height, left, top, speedX, speedY, dom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.speedX = speedX;
        this.speedY = speedY;
        this.dom = dom;
        // 要不停的渲染页面
        this.render();
    }

    /**
     * 渲染页面
     */
    render() {
        this.dom.style.width = this.width + 'px';
        this.dom.style.height = this.height + 'px';
        this.dom.style.left = this.left + 'px';
        this.dom.style.top = this.top + 'px';
    }

    /**
     * 移动
     * @param {移动的时间间隔} duration 
     */
    move(duration) {
        const disX = this.speedX * duration;
        const disY = this.speedY * duration;
        this.left += disX;
        this.top += disY;
        if (this.onMove) {
            this.onMove();
        }
        this.render();
    }

}