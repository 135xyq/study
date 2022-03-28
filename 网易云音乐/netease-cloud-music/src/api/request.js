import axios from 'axios';

const ins = axios.create({
    baseURL: 'http://localhost:3000'
})

export default ins;