import request from '@/utils/request'

export function login(data) {
    return request.post('/api/admin/login', data)
}

export function getInfo() {
    return request.get('/api/admin/whoami');
}

export function logout() {
    return request.post('/api/admin/logout');
}
