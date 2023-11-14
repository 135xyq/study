const skyDom = document.getElementsByClassName('sky')[0];
const skyStyle = getComputedStyle(skyDom);
const skyWidth = parseFloat(skyStyle.width);
const skyHeight = parseFloat(skyStyle.height);

class Sky extends Rectangle {
    constructor() {
        super(skyWidth, skyHeight, 0, 0, -50, 0, skyDom);
    }

    onMove() {
        if (this.left < -skyWidth / 2) {
            this.left = 0;
        }
    }
}

// var sky = new Sky();
// // console.log(sky.top)

// setInterval(() => {
//     sky.move(2)
// }, 1000)