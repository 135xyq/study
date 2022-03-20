import axios from 'axios';
import store from '../store';


export async function upload(value) {
    const result = await axios.post('/api/article', {
        adminId: JSON.parse(store.state.login.userData).id,
        content: value
    });
    return result.data;
}