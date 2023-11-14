import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";
import NotFound from '@/views/NotFound';

configure({
    trickleSpeed: 20,
    showSpinner: false,
});

function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

function getPageComponent(pageCompResolver) {
    return async() => {
        start();
        if (process.env.NODE_ENV === "development") {
            await delay(2000);
        }
        const comp = await pageCompResolver();
        done();
        return comp;
    };
}
export default [{
        name: 'home',
        path: '/',
        component: getPageComponent(() =>
            import ( /* webpackChunkName: "home" */ "@/views/Home")),
        meta: {
            title: "首页"
        }
    },
    {
        name: 'about',
        path: '/about',
        component: getPageComponent(() =>
            import ( /* webpackChunkName: "about" */ "@/views/About")),
        meta: {
            title: "关于我"
        }
    },
    {
        name: 'message',
        path: '/message',
        component: getPageComponent(() =>
            import ( /* webpackChunkName: "message" */ "@/views/Message")),
        meta: {
            title: "留言板"
        }
    },
    {
        name: 'blog',
        path: '/blog',
        component: getPageComponent(() =>
            import ( /* webpackChunkName: "blog" */ "@/views/Blog")),
        meta: {
            title: "文章"
        }
    },
    {
        name: 'blogtype',
        path: '/blog/cate:categoryId',
        component: getPageComponent(() =>
            import ( /* webpackChunkName: "blog" */ "@/views/Blog")),
        meta: {
            title: "文章"
        }
    },
    {
        name: 'blogdetail',
        path: '/blog/:id',
        component: getPageComponent(() =>
            import ( /* webpackChunkName: "blogdetail" */ "@/views/Blog/BlogDetail")),
        meta: {
            title: "文章详情"
        }
    },
    {
        name: 'project',
        path: '/project',
        component: getPageComponent(() =>
            import ( /* webpackChunkName: "project" */ "@/views/Project")),
        meta: {
            title: "项目&效果"
        }
    },
    {
        name: "NotFound",
        path: '*',
        component: NotFound
    }
];