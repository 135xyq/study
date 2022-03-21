import axios from 'axios';
import store from '../store';

/**
 * 上传文章
 * @param {*} value 
 * @returns 
 */
export async function upload(value) {
    const result = await axios.post('/api/article', {
        adminId: JSON.parse(store.state.login.userData).id,
        content: value
    });
    return result.data;
}

/**
 * 获取文章
 * @returns 
 */
export async function getArticles() {
    const result = await axios.get('/api/article');
    return result.data;
}