const net = require('net');

const server = net.createServer();

server.listen(9527);

server.on('listening', () => {
    console.log('server正在监听9527')
})

server.on('connection', socket => {
    console.log('有客户端连接！')
    socket.on('data', chunk => {
        console.log('客户端请求：', chunk.toString('utf-8'));
    })

    socket.write(`HTTP/1.1 200 OK

<html>
<head><title>404 Not Found</title></head>
<body>
<center><h1>404 Not Found</h1></center>
<hr><center>nginx</center>
</body>
</html>
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
`)

    socket.end();
})