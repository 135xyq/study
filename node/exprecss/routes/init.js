const express = require('express');
const path = require('path');

const app = express();

app.listen(9527, () => {
    console.log('server is listening port 9527')
})

app.get('/news', (req, res, next) => {
        console.log('第一个处理函数！');
        throw new Error('报错了！');
        next(); //需要手动移交
    },
    (error, req, res, next) => {
        console.log('第二个处理函数抛出错误！');
        res.send('123')
        next();
    }
)

app.get('/news', (req, res, next) => {
    //上一个中间件抛出错误，下一个中间件要捕获错误，需要传入error错误参数
    console.log('第三个处理函数！');
    next();
})

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