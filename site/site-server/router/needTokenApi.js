// 需要token的API
module.exports = [{
        method: 'POST',
        path: '/api/comments'
    },
    {
        method: 'GET',
        path: '/api/comments'
    },
    {
        method: 'DELETE',
        path: '/api/comments'
    },
    {
        method: 'POST',
        path: '/api/article'
    },
    {
        method: 'GET',
        path: '/api/article'
    },
    {
        method: 'DELETE',
        path: '/api/article'
    },
    {
        method: 'put',
        path: '/api/article'
    },
    {
        method: 'POST',
        path: '/api/upload'
    }, {
        method: 'GET',
        path: '/api/admin/whoami'
    }, {
        method: 'PUT',
        path: '/api/admin'
    }

]