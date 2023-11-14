const jimp = require('jimp');
const path = require('path');


/**
 * 给一张图片加水印
 * @param {*} waterFile 水印图片地址
 * @param {*} originFile 原图片地址
 * @param {*} targetFile 加完水印后图片的存储地址
 * @param {*} proportion 水印占原图的比例，是多少分之一
 * @param {*} marginProportion 水印距离原图边界占原图的比例
 */
async function mark(
    waterFile,
    originFile,
    targetFile,
    proportion = 10,
    marginProportion = 0.01
) {
    const [water, origin] = await Promise.all([
        jimp.read(waterFile),
        jimp.read(originFile),
    ]);

    // 对水印图片进行缩放
    const curProportion = origin.bitmap.width / water.bitmap.width;
    water.scale(curProportion / proportion);

    // 计算位置
    const right = origin.bitmap.width * marginProportion;
    const bottom = origin.bitmap.height * marginProportion;
    const x = origin.bitmap.width - right - water.bitmap.width;
    const y = origin.bitmap.height - bottom - water.bitmap.height;

    // 写入水印
    origin.composite(water, x, y, {
        mode: jimp.BLEND_SOURCE_OVER,
        opacitySource: 0.3,
    });

    await origin.write(targetFile);
}

async function test() {
    const waterPath = path.resolve(__dirname, "../public/img/water.jpg");
    const originPath = path.resolve(__dirname, "../public/img/image.jpeg");
    const targetPath = path.resolve(__dirname, "../public/img/new.jpg");
    mark(waterPath, originPath, targetPath);
}

test()