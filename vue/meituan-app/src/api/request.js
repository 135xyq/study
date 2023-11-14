import axios from 'axios';

// 创建一个axios实例
const ins = axios.create({
    baseURL: 'https://open.duyiedu.com',
})

ins.interceptors.response.use(function(resp) {
    return resp.data;
})

export default ins;