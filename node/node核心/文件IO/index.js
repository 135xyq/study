const path = require('path');
const fs = require('fs');
const os = require('os');

const filename = path.resolve(__dirname, './test.txt');


// 读内容

/*

fs.readFile(filename, (error, content) => {
    console.log(content)
    console.log(content.toString('utf-8'))
})

fs.promises.readFile(filename, 'utf-8').then((resp) => {
    console.log(resp)
})

console.log(fs.readFileSync(filename, 'utf-8'))
*/

// 写内容

// fs.promises.writeFile(filename, `${os.EOL}I am xyq!`, {
//     flag: 'a'
// });


// 创建多个目录

for (let i = 1; i <= 5; i++) {
    fs.promises.mkdir(path.resolve(__dirname) + `/${i}`);
}