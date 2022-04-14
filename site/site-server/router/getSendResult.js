// 响应结果的中间件

function getResult(result) {
    return {
        code: 0,
        msg: '',
        data: result
    }
}


function getError(error = '服务器内部出错！', code = 500) {
    return {
        code,
        msg: error
    }
}


module.exports = {
    getError,
    getResult
}