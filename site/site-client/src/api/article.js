import axios from 'axios';

export function getArticle() {
    return axios({
        url: '/api/article',
        method: 'GET',
    })
}