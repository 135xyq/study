//  导出静态路由

export default [{
        name: 'login',
        path: '/login',
        component: () =>
            import ('@/views/Login/index'),
        meta: {
            title: '登录',
            auth: false,
            hidden: true
        }
    },
    {
        name: 'register',
        path: '/register',
        component: () =>
            import ('@/views/Register/index'),
        meta: {
            title: '注册',
            auth: false,
            hidden: true
        }
    },
    {
        name: 'findback',
        path: '/findback',
        component: () =>
            import ('@/views/FindBack/index'),
        meta: {
            title: '找回密码',
            auth: false,
            hidden: true
        }
    },
]