const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')

const app = express();

//静态资源服务器
app.use(express.static(path.resolve(__dirname, '../public')));


app.listen(8080, () => {
    console.log('server listening 8080!')
})

// 使用cookie-parser处理cookies
app.use(cookieParser())

// 使用json解析
app.use(express.json());

// 使用中间件来验证token的合法性
app.use(require('./tokenMIddleware'));

// 使用urlencoded
app.use(express.urlencoded({
    extended: true,
}));

// 错误处理
app.use(require('./errorMiddleware'));

// 日志记录
app.use(require('./logMIddleware'));

// 评论管理
app.use('/api/comment', require('./api/comment'));
// 文章管理
app.use('/api/article', require('./api/article'));
// 管理员
app.use('/api/admin', require('./api/admin'));
// 上传图片
app.use('/api/upload', require('./api/upload'));