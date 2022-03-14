// 需要token验证的/api

module.exports = [{
        method: 'POST',
        path: '/api/student'
    },
    {
        method: 'GET',
        path: '/api/student'
    },
    {
        method: 'GET',
        path: '/api/student/:id'
    },
    {
        method: 'PUT',
        path: '/api/student/:id'
    },
    {
        method: 'DELETE',
        path: '/api/student/:id'
    },
    {
        method: 'POST',
        path: '/api/class'
    },
    {
        method: 'PUT',
        path: '/api/class/:id'
    },
    {
        method: 'GET',
        path: '/api/class'
    },
    {
        method: 'GET',
        path: '/api/class/:id'
    },
    {
        method: 'DELETE',
        path: '/api/class/:id'
    },
    {
        method: 'POST',
        path: '/api/book'
    },
    {
        method: 'PUT',
        path: '/api/book/:id'
    },
    {
        method: 'GET',
        path: '/api/book'
    },
    {
        method: 'GET',
        path: '/api/book/:id'
    },
    {
        method: 'DELETE',
        path: '/api/book/:id'
    },
    {
        method: 'POST',
        path: '/api/admin'
    },
    {
        method: 'PUT',
        path: '/api/admin/:id'
    },
    {
        method: 'GET',
        path: '/api/admin'
    },
    {
        method: 'GET',
        path: '/api/admin/:id'
    },
    {
        method: 'DELETE',
        path: '/api/admin/:id'
    },
    {
        method: 'GET',
        path: '/api/admin/whoami'
    }
]