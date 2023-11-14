import axios from 'axios';
import showMessage from '@/utils/showMessage';

const ins = axios.create({
    baseURL: "https://mallapi.duyiedu.com/"
}); //创建一个axios实例

ins.interceptors.response.use(function(resp) {
    if (resp.data.status === 'fail') {
        showMessage({
            content: resp.data.msg,
            type: 'error',
            duration: 1500
        })
        return null;
    }
    return resp.data;
})

export default ins;