import request from '@/utils/request'

export function addCategory(data) {
    return request({
        url: '/api/category',
        method: 'POST',
        data,
    })
}


export function getCategory() {
    return request({
        url: '/api/category',
        method: 'GET'
    })
}
