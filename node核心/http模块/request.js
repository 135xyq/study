const http = require('http');

const request = http.request("http://nodejs.cn/api/http.html#httprequestoptions-callback", {
    method: 'GET',
}, resp => {
    console.log('状态码:', resp.statusCode);
    console.log('响应头:', resp.headers);
    let result = '';
    resp.on('data', chunk => {
        result += chunk.toString('utf-8');
    })

    resp.on('end', () => {
        console.log('响应内容：')
        console.log(result);
    })
})

request.end();