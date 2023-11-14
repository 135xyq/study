const net = require('net');

const socket = net.createConnection({
    host: 'localhost',
    port: 9527
}, () => {
    console.log('连接成功！')
})

socket.on('data', chunk => {
    console.log('服务器得到的数据：', chunk.toString('utf-8'));
})

socket.write(`GET / HTTP/1.1
Host: localhost

`);