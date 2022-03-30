// 用户个人页的子路由

export default [{
    path: 'home',
    name: 'UserHome',
    component: () =>
        import ('@/views/User/Home'),
    meta: {
        name: '网易云音乐',
        auth: true,
    }
}, {
    path: 'level',
    name: 'UserLevel',
    component: () =>
        import ('@/views/User/Level'),
    meta: {
        name: '网易云音乐',
        auth: true,
    }
}, {
    path: 'update',
    name: 'UserUpdate',
    component: () =>
        import ('@/views/User/Update'),
    meta: {
        name: '网易云音乐',
        auth: true,
    }
}]