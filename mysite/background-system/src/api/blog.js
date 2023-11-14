// 文章

import request from '@/utils/request'

/**
 * 分页获取文章
 * @param {*} page页码数
 * @param {*} limit每页的数量
 */
export function findBlog(page = 1, limit = 10) {
    return request({
        url: '/api/blog',
        method: 'get',
        params: {
            page: page,
            limit: limit
        }
    })
}

// 删除文章
export function delOneBlog(id) {
    return request({
        url: `/api/blog/:${id}`,
        method: 'delete',
    })
}
