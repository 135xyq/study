const path = require('path');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
app.use(express.static(path.resolve(__dirname, 'public')));

// websocket
require('./chatServer')(server);

// 监听端口

server.listen(9527, () => {
    console.log('server listening 9527!')
})