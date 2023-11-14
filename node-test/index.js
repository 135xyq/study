const express = require('express')
const path = require('path')

const app = express();

const p = path.resolve(__dirname, './public')
console.log(p)
app.use(express.static('d:/学习/前端/前端代码/study/node-test/public'));

app.listen(8080, () => {
    console.log('8080')
})