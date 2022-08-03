export default {
    routes: [
        {
            path: '/',
            component: './admin/index.js',
            title:"首页",
            wrappers:["@/components/setPageTitle.js"]
        }, {
            path: '/login',
            component: './admin/login.js',
            title:"登录",
            wrappers:["@/components/setPageTitle.js"]
        }, {
            path: '/welcome',
            component: './admin/welcome.js',
            title:"欢迎",
            wrappers:["@/components/setPageTitle.js"]
        },
    ]
}