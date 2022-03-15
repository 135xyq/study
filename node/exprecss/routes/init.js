const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const history = require('connect-history-api-fallback');
// const session = require('express-session')

const app = express();

app.listen(9527, () => {
    console.log('server is listening port 9527')
})

// 使用session
// app.use(session({
//     secret: 'hszmyall', //设置加密，必须
//     name: 'sessionId', //cookie的名字
// }))

// 单个网页，请求统一跳转到首页
// app.use(history());

//静态资源
const root = path.resolve(__dirname, '../public')
app.use(express.static(root));


// 处理跨域问题

// const whiteList = ["null", 'http://localhost:9527']; //白名单
app.use(
    cors({
        origin(origin, callback) {
            if (!origin) {
                callback(null, '*');
                return;
            }
            callback(null, origin);
            // if (whiteList.includes(origin)) {
            //     callback(null, origin);
            // } else {
            //     callback(new Error("not allowed"));
            // }
        },
        credentials: true,
    })
);

// 使用cookie-parser中间件来设置cookie
app.use(cookieParser());

// 使用中间件来验证token的合法性
app.use(require('./tokenMIddleware'));


// 使用express.urlencoded解析消息体

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())

// app.post('/api/student', (req, res) => {
//     console.log(req.body)
//     res.send('api/student post')
// })

app.use(require('./erroeMiddleware'));

// 记录请求日志
app.use(require('./logMiddleware'));

// 处理学生
app.use('/api/student', require('./api/student'));
//处理管理员
app.use('/api/admin', require('./api/admin'));
//处理书本
app.use('/api/book', require('./api/book'));
//处理班级
app.use('/api/class', require('./api/class'));