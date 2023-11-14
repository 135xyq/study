// 需要token的API
module.exports = [{
        method: 'DELETE',
        path: '/api/comment'
    },
    {
        method: 'PUT',
        path: '/api/comment/:id'
    },
    {
        method: 'POST',
        path: '/api/article'
    },
    {
        method: 'DELETE',
        path: '/api/article/:id'
    },
    {
        method: 'PUT',
        path: '/api/article/:id'
    },
    {
        method: 'GET',
        path: '/api/admin/whoami'
    },
    {
        method: 'PUT',
        path: '/api/admin'
    },
    {
        method: 'PUT',
        path: '/api/category/:id'
    },
    {
        method: 'POST',
        path: '/api/category'
    },
    {
        method: 'DELETE',
        path: '/api/category/:id'
    },
    {
        method: 'PUT',
        path: '/api/project/:id'
    },
    {
        method: 'POST',
        path: '/api/project'
    },
    {
        method: 'DELETE',
        path: '/api/project/:id'
    },
    {
        method: 'PUT',
        path: '/api/about/:id'
    },
    {
        method: 'POST',
        path: '/api/about'
    },
    {
        method: 'DELETE',
        path: '/api/about/:id'
    },
    {
        method: 'PUT',
        path: '/api/daily/:id'
    },
    {
        method: 'POST',
        path: '/api/daily'
    },
    {
        method: 'DELETE',
        path: '/api/daily/:id'
    },
    {
        method: 'POST',
        path: '/api/admin/logout'
    },

]