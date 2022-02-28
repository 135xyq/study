const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './test1.txt');

const ws = fs.createWriteStream(filename, {
    encoding: 'utf-8',
})

ws.write('I am xyq!');