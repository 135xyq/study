// 封装Ajax请求

function ajax(options) {
    const xhr = new XMLHttpRequest();
    // 请求配置
    options = options || {};
    options.type = (options.type || 'GET').toUpperCase();
    options.dataType = options.dataType || 'json';
    const params = options.data;

    // 发送请求
    if (options.type === 'GET') {
        let url = options.url;
        if (params) {
            url = options.url + '?' + params;
        }
        xhr.open('GET', url, true)
        xhr.send(null);
    } else if (options.type === 'POST') {
        xhr.open('POST', options.url, true);
        xhr.send(params)
    }
    // 接收请求

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            const status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML)
            } else {
                options.fail && options.fail(status)
            }
        }
    }

}





btn.onclick = function() {
    ajax({
        url: 'http://127.0.0.1:8080',
        type: 'GET',
        success(text, xml) {
            console.log(text)
            app.innerHTML = text
            console.log('-----------------------------------')
            console.log(xml)
        },
        fail(status) {
            console.log(status)
        }
    })
}