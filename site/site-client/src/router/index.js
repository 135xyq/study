import Vue from 'vue'
import VueRouter from 'vue-router'
import controlTitle from '@/utils/controlTitle';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home/index'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/project',
        name: 'Project',
        component: () =>
            import ('../views/Project/index'),
        meta: {
            title: '项目'
        }
    },
    {
        path: '/all',
        name: 'All',
        component: () =>
            import ('../views/All/index'),
        meta: {
            title: '归档'
        }
    },
    {
        path: '/article',
        name: 'Article',
        component: () =>
            import ('../views/Article/index'),
        meta: {
            title: '文章'
        }
    },
    {
        name: "CategoryArticle",
        path: "/article/cate/:categoryId",
        component: () =>
            import ( /* webpackChunkName: "blog" */ "@/views/Article/index"),
        meta: {
            title: "文章",
        },
    },
    {
        name: "ArticleDetail",
        path: "/article/:id",
        component: () =>
            import ( /* webpackChunkName: "blogdetail" */ "@/views/Article/Detail/index"),
        meta: {
            title: "文章详情",
        },
    },
]

const router = new VueRouter({
    routes
})

router.afterEach((to, from) => {
    if (to.meta.title) {
        controlTitle.setRouteTitle(to.meta.title);
    }
});

export default router