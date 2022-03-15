import axios from 'axios';
const localStorageKey = 'my_school_token';

export default function() {
    // 先从本地获取token,如果有则加入到请求头中
    const token = localStorage.getItem(localStorageKey);
    let ins = axios;
    if (token) {
        ins = axios.create({
            headers: {
                authorization: 'bearer ' + token,
            }
        })
    }

    ins.interceptors.response.use(
        resp => {
            // 响应的时候如果有token则保存到本地
            if (resp.headers.authorization) {
                localStorage.setItem(localStorageKey, resp.headers.authorization)
            }
            return resp;
        }, error => {
            // 响应码为403，则从本地删除token
            if (error.response.status === 403) {
                localStorage.removeItem(localStorageKey);
            }
            return Promise.reject(error);
        }
    )
    return ins;
}