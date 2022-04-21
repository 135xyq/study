const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();

app.listen(9527, () => {
    console.log('server is listening port 9527')
})

// 静态资源映射
const rootPath = path.resolve(__dirname, '../public');
app.use(express.static(rootPath))

// 处理跨域问题

// const whiteList = ["null", 'http://localhost:9527']; //白名单
// app.use(
//     cors({
//         origin(origin, callback) {
//             if (!origin) {
//                 callback(null, '*');
//                 return;
//             }
//             // callback(null, origin);
//             // if (whiteList.includes(origin)) {
//             //     callback(null, origin);
//             // } else {
//             //     callback(new Error("not allowed"));
//             // }
//         },
//         credentials: true,
//     })
// );

// 使用cookie-parser处理cookies
app.use(cookieParser())

// 使用express.urlencoded解析消息体

app.use(express.urlencoded({
    extended: true,
}))

// 使用json
app.use(express.json())

// 处理错误
app.use(require('./erroeMiddleware'));

// 记录请求日志
app.use(require('./logMiddleware'));

// 使用中间件来验证token的合法性
app.use(require('./tokenMiddleware'));


// 管理员信息
app.use('/api/admin', require('./api/admin'));
// 文章信息
app.use('/api/article', require('./api/article'));
// 分类信息
app.use('/api/category', require('./api/category'));
// 项目信息
app.use('/api/project', require('./api/project'));
// 评论信息
app.use('/api/comment', require('./api/comment'));
// 图片上传
app.use('/api/upload', require('./api/upload'));
// 关于我信息
app.use('/api/about', require('./api/about'));
// 每日一句信息
app.use('/api/daily', require('./api/daily'));