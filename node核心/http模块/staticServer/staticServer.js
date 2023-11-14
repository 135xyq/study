const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');


const server = http.createServer(handleServer);

server.listen(9000);

server.on('listening', () => {
    console.log('server listening 9000!');
})

/**
 * 处理服务器函数
 * @param {*} req 
 * @param {*} res 
 */

async function handleServer(req, res) {
    const requestUrl = req.url; //客户端请求的地址
    const fileContent = await getFileContent(requestUrl, res);
    if (!fileContent) {
        // 文件不存在
        res.statusCode = 404;
        res.write('sources is not exit!');
        res.end();
    }
}


/**
 * 获取文件状态
 */
async function getState(filename) {
    try {
        return await fs.promises.stat(filename)
    } catch {
        return null;
    }
}

/**
 * 要处理的文件内容
 * @param {String} requestUrl 路径
 */
async function getFileContent(requestUrl, res) {
    const urlObj = url.parse(requestUrl);

    let filename;
    filename = path.resolve(__dirname, 'public', urlObj.pathname.substr(1));
    let stat = await getState(filename);

    if (!stat) {
        // 文件不存在
        return null;
    } else if (stat.isDirectory()) {
        // 是一个目录
        // 则继续请求目录下的index.html文件
        filename = path.resolve(__dirname, 'public', urlObj.pathname.substr(1), 'index.html');
        stat = await getState(filename);
        if (!stat) {
            // 文件不存在
            return null;
        } else {
            // 文件存在，直接写入
            readFileStream(filename, res);
            return true;
        }
    } else {
        // 文件存在
        readFileStream(filename, res);
        return true;
    }
}

/**
 * 通过获取文件名和写入流来将文件内容写入
 * @param {*} filename 
 * @param {*} res 
 */
function readFileStream(filename, res) {
    const rs = fs.createReadStream(filename);

    rs.on('data', chunk => {
        const flag = res.write(chunk);
        if (!flag) {
            // 写入队列即将排满
            rs.pause();
        }
    })

    res.on('drain', () => {
        rs.resume();
    })

    rs.on('end', () => {
        res.end();
    })
}