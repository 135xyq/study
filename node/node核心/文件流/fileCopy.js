const fs = require('fs');
const path = require('path');

// 使用pipe

/*
console.time('时间')
const from = path.resolve(__dirname, './test.png');
const to = path.resolve(__dirname, './testCopy.png');

const rs = fs.createReadStream(from);
const ws = fs.createWriteStream(to);

rs.pipe(ws);

console.timeEnd('时间')

*/


// 手写，使用流

/*
const from = path.resolve(__dirname, './test.png');
const to = path.resolve(__dirname, './testCopy.png');

const rs = fs.createReadStream(from);
const ws = fs.createWriteStream(to);

console.time('时间')

rs.on('data', chunk => {
    const flag = ws.write(chunk);
    if (!flag) {
        // 写入队列即将排满
        rs.pause(); //暂停
    }
})

ws.on('drain', () => {
    rs.resume(); //继续读
})

rs.on('end', () => {
    ws.end(); //结束写入
    console.log('复制完成！');
    console.timeEnd('时间')
})

*/


// 使用fs的普通读写

const from = path.resolve(__dirname, './test.png');
const to = path.resolve(__dirname, './testCopy.png');

const fileContent = fs.promises.readFile(from).then(data => {
    fs.promises.writeFile(to, data).then(() => {
        console.log('复制完成！');
    });
})