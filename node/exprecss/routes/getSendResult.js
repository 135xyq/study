// 错误响应

function getErr(error = 'server interval error', code = 500) {
    return {
        code,
        msg: error
    }
}

// 正常响应

function getResult(result) {
    return {
        code: 0,
        msg: '',
        data: result
    }
}

module.exports = {
    getResult,
    getErr,
}