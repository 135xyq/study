import UserRoutes from './userRoutes';
import homeRoutes from './homeRoutes';

export default [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('@/views/Home'),
        meta: {
            title: '首页',
            auth: false,
        },
        children: homeRoutes,
        redirect: '/discover'
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
    },
    {
        path: '/playlist',
        name: 'HomePlayList',
        component: () =>
            import ('@/views/PlayList'),
        meta: {
            name: '网易云音乐',
            auth: false
        }
    },
    {
        path: '/song',
        name: 'Song',
        component: () =>
            import ('@/views/Song'),
        meta: {
            name: '网易云音乐',
            auth: false
        }
    },

]