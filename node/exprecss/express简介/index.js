const http = require('http');
const express = require('express');

const app = express(); // 创建一个express应用
// app用来处理请求的函数

// const server = http.createServer(app);

// server.listen(9527, () => {
//     console.log("listen port 9527!")
// })


// server.on('listening', res => {
//     console.log(res)
// })

app.listen(9527, () => {
    console.log('listen port 9527')
})

app.get('/abc', (req, res) => {
    console.log('请求头：', req.headers); //请求头
    console.log('请求路径:', req.path); //请求路径
    console.log('请求参数:', req.query); //请求参数

    // 发送响应
    res.send('<h1>ab435c</h1>')

})