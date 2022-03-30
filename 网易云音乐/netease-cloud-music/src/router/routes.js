import UserRoutes from './userRoutes';

export default [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('@/views/Home'),
        meta: {
            title: '首页',
            auth: false,
        }
    }, {
        path: '/user',
        name: 'User',
        component: () =>
            import ('@/views/User'),
        meta: {
            name: '用户',
            auth: true,
        },
        children: UserRoutes,
        redirect: '/user/home'
    }, {
        path: '/msg',
        name: 'Msg',
        component: () =>
            import ('@/views/Msg'),
        meta: {
            name: '网易云音乐',
            auth: true,
        }
    }, {
        path: '/member',
        name: 'Member',
        component: () =>
            import ('@/views/Member'),
        meta: {
            name: '会员页',
            auth: true,
        }
    }

]