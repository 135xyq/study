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