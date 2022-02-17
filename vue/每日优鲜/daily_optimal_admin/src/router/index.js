import Vue from "vue";
import store from "@/store";
import VueRouter from "vue-router";
import getResultRouter from "@/utils/getRouterMenus";
if (!window.VueRouter) {
    Vue.use(VueRouter);
}

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
        return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch((err) => err);
};

/**
 * hidden : 是否在动态路由时隐藏
 * title: 名字
 * auth: 是否需要鉴权
 * icon: 渲染导航图标
 */

const changeRouterMap = [{
    name: "product",
    path: "/product",
    component: () =>
        import ("@/views/Layout/index"),
    meta: {
        title: "商品",
        auth: true,
        hidden: false,
        icon: "el-icon-s-goods",
    },
    children: [{
            name: "productList",
            path: "list",
            component: () =>
                import ("@/views/ProductList/index"),
            meta: {
                title: "商品列表",
                auth: true,
                hidden: false,
                icon: "el-icon-s-grid",
            },
        },
        {
            name: "productAdd",
            path: "add",
            component: () =>
                import ("@/views/ProductAdd/index"),
            meta: {
                title: "新增商品",
                auth: true,
                hidden: false,
                icon: "el-icon-circle-plus",
            },
        },
        {
            name: "productEdit",
            path: "edit",
            component: () =>
                import ("@/views/ProductAdd/index"),
            meta: {
                title: "编辑商品",
                auth: true,
                hidden: true,
                icon: "el-icon-edit-outline",
            },
        },
        {
            name: "category",
            path: "category",
            component: () =>
                import ("@/views/Category/index"),
            meta: {
                title: "商品类目",
                auth: true,
                hidden: false,
                icon: "el-icon-s-operation",
            },
        },
    ],
}, ];

const routes = [{
        name: "login",
        path: "/login",
        component: () =>
            import ("@/views/Login/index"),
        meta: {
            title: "登录",
            auth: false,
            hidden: true,
        },
    },
    {
        name: "register",
        path: "/register",
        component: () =>
            import ("@/views/Register/index"),
        meta: {
            title: "注册",
            auth: false,
            hidden: true,
        },
    },
    {
        name: "findback",
        path: "/findback",
        component: () =>
            import ("@/views/FindBack/index"),
        meta: {
            title: "找回密码",
            auth: false,
            hidden: true,
        },
    },
    {
        name: "home",
        path: "/",
        redirect: '/index',
        component: () =>
            import ("@/views/Layout/index"),
        meta: {
            title: "首页",
            auth: true,
            hidden: false,
            icon: "el-icon-s-home",
        },
        children: [{
            name: "index",
            path: "index",
            component: () =>
                import ("@/views/Index/index"),
            meta: {
                title: "统计",
                auth: true,
                hidden: false,
                icon: "el-icon-s-data",
            },
        }, ],
    },
];

const router = new VueRouter({
    routes,
    // mode: "history",
    base: 'daily_options'
});

// 路由守卫

// let flag = false;

// router.beforeEach((to, from, next) => {
//     console.log(1)
//     if (to.meta.title) {
//         document.title = to.meta.title;
//     }
//     console.log(to, from)
//     if (to.meta.auth) {
//         if (store.state.user != null) {
//             // console.log(store.state.isAdded)
//             if (store.state.routerMenus.length === 0) {
//                 const changeRouters = getResultRouter(
//                     store.state.user.role,
//                     changeRouterMap
//                 );
//                 // console.log(2)
//                 store
//                     .dispatch("changeRouterMenus", routes.concat(changeRouters))
//                     .then(() => {
//                         router.addRoutes(changeRouters);
//                         store.dispatch("routesAdded");
//                         flag = true;
//                         next();
//                     });
//             } else {
//                 next();
//             }
//         } else {
//             next("/login");
//         }
//     } else {
//         next();
//     }
// });

const whitePathMap = ['/login', '/findback', '/register'];
let isAddRoutes = false;
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    if (whitePathMap.indexOf(to.path) === -1) {
        if (
            store.state.user.appkey &&
            store.state.user.username &&
            store.state.user.role
        ) {
            if (!isAddRoutes) {
                const menuRoutes = getResultRouter(
                    store.state.user.role,
                    changeRouterMap
                );
                store
                    .dispatch("changeRouterMenus", routes.concat(menuRoutes))
                    .then(() => {
                        router.addRoutes(menuRoutes);
                        next();
                    });
                isAddRoutes = true;
            }
            return next();
        }
        return next("/login");
    }
    return next();
});

// console.log(router)
export default router;