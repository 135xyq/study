import request from './request.js';
import store from '@/store';

const appkey = store.state.appkey;

export async function getPosition() {
    return await request.get('/api/meituan/city/getPosition.json', {
        params: {
            appkey
        }
    })
}