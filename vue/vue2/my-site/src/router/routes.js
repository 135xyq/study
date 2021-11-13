export default [{
        name: 'home',
        path: '/',
        component: () =>
            import ( /* webpackChunkName: "home" */ "@/views/Home"),
        meta: {
            title: "首页"
        }
    },
    {
        name: 'about',
        path: '/about',
        component: () =>
            import ( /* webpackChunkName: "about" */ "@/views/About"),
        meta: {
            title: "关于我"
        }
    },
    {
        name: 'message',
        path: '/message',
        component: () =>
            import ( /* webpackChunkName: "message" */ "@/views/Message"),
        meta: {
            title: "留言板"
        }
    },
    {
        name: 'blog',
        path: '/blog',
        component: () =>
            import ( /* webpackChunkName: "blog" */ "@/views/Blog"),
        meta: {
            title: "文章"
        }
    },
    {
        name: 'blogtype',
        path: '/blog/cate:categoryId',
        component: () =>
            import ( /* webpackChunkName: "blog" */ "@/views/Blog"),
        meta: {
            title: "文章"
        }
    },
    {
        name: 'blogdetail',
        path: '/blog/:id',
        component: () =>
            import ( /* webpackChunkName: "blogdetail" */ "@/views/Blog/BlogDetail"),
        meta: {
            title: "文章详情"
        }
    },
    {
        name: 'project',
        path: '/project',
        component: () =>
            import ( /* webpackChunkName: "project" */ "@/views/Project"),
        meta: {
            title: "项目&效果"
        }
    },
];