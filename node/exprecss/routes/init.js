const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.listen(9527, () => {
    console.log('server is listening port 9527')
})

// 使用cookie-parser中间件来设置cookie
app.use(cookieParser());

// 使用中间件来验证token的合法性
app.use(require('./tokenMIddleware'));

//静态资源
const root = path.resolve(__dirname, '../public')
app.use(express.static(root));

// 使用express.urlencoded解析消息体

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())

// app.post('/api/student', (req, res) => {
//     console.log(req.body)
//     res.send('api/student post')
// })

app.use(require('./erroeMiddleware'))

// 处理学生
app.use('/api/student', require('./api/student'));
//处理管理员
app.use('/api/admin', require('./api/admin'));
//处理书本
app.use('/api/book', require('./api/book'));
//处理班级
app.use('/api/class', require('./api/class'));