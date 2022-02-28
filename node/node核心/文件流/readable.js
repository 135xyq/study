const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './test.txt')


// 创建文件可读流

const rs = fs.createReadStream(filename, {
    encoding: 'utf-8',
    highWaterMark: 1
})

// 文件打开事件

rs.on('open', () => {
    console.log('文件被打开了!')
})

// 文件打开出错事件

rs.on('error', () => {
    console.log('文件打开出错!')
})

// 文件关闭事件

rs.on('close', () => {
    console.log('文件关闭!')
})

// 文件读取事件

rs.on('data', chunk => {
    console.log('文件内容：', chunk)
})

// rs.close();


// 文件全部读完

rs.on('end', () => {
    console.log('文件读完了！')
})