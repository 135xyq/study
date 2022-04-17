import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
        path: "/login",
        component: () =>
            import ("@/views/login/index"),
        meta: {
            title: '登录'
        },
        hidden: true,
    },

    {
        path: "/404",
        component: () =>
            import ("@/views/404"),
        hidden: true,
    },

    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        children: [{
            path: "dashboard",
            name: "Dashboard",
            component: () =>
                import ("@/views/dashboard/index"),
            meta: { title: "控制台", icon: "dashboard" },
        }, ],
    },
    {
        path: "/index",
        component: Layout,
        redirect: "/index/about",
        children: [{
            path: "about",
            name: "About",
            component: () =>
                import ("@/views/about/index"),
            meta: { title: "关于我", icon: "el-icon-user-solid" },
        }, ]

    },
    {
        path: "/article",
        component: Layout,
        redirect: "/article/articleList",
        name: "Article",
        meta: {
            title: "文章",
            icon: "el-icon-s-grid",
        },
        children: [{
                path: "articlelist",
                component: () =>
                    import ("@/views/articleList/index"), // Parent router-view
                name: "ArticleList",
                meta: {
                    title: "文章列表",
                    icon: "el-icon-menu",
                },
            },
            {
                path: "articleedit",
                component: () =>
                    import ("@/views/articleEdit/index"),
                name: "ArticleEdit",
                meta: {
                    title: "文章编辑",
                    icon: "el-icon-edit-outline",
                },
            },
        ],
    },

    {
        path: "/project",
        component: Layout,
        redirect: "/project/projectlist",
        name: "Project",
        meta: {
            title: "项目",
            icon: "el-icon-s-operation",
        },
        children: [{
                path: "projectlist",
                component: () =>
                    import ("@/views/projectList/index"), // Parent router-view
                name: "ProjectList",
                meta: {
                    title: "项目列表",
                    icon: "el-icon-menu",
                },
            },
            {
                path: "projectadd",
                component: () =>
                    import ("@/views/projectEdit/index"),
                name: "ProjectEdit",
                meta: {
                    title: "项目编辑",
                    icon: "el-icon-circle-plus-outline",
                },
            },
        ],
    },
    {
        path: "/category",
        component: Layout,
        redirect: "/category/index",
        children: [{
            path: "index",
            name: "Category",
            component: () =>
                import ("@/views/category/index"),
            meta: { title: "分类", icon: "el-icon-more" },
        }, ]

    },

    // 404 page must be placed at the end !!!
    { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
    new Router({
        // mode: 'history', // require service support
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes,
    });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher; // reset router
}

export default router;