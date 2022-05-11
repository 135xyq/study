function getArea(width) {
    return height => {
        return width * height
    }
}

const getTenWidthArea = getArea(10)

// 之后碰到宽度为10的长方形就可以这样计算面积
const area1 = getTenWidthArea(20)
console.log(area1)