import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        name: "login",
        path: "/login",
        component: () =>
            import ("@/views/login/index"),
        meta: {
            title: "登录",
        },
    },
    {
        name: "register",
        path: "/register",
        component: () =>
            import ("@/views/register/index"),
        meta: {
            title: "注册",
        },
    },
    {
        name: "home",
        path: "/",
        redirect: "/index",
        component: () =>
            import ("@/views/Layout/index"),
        meta: {
            title: "首页",
        },
        children: [{
            path: "/index",
            name: "index",
            component: () =>
                import ("@/views/Index/index"),
            meta: {
                title: "首页",
            },
        }, ],
    },
    {
        name: 'changecity',
        path: '/changecity',
        component: () =>
            import ('@/views/ChangeCity/index'),
        meta: {
            title: '切换城市'
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router;