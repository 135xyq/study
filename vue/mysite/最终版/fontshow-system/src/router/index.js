import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes.js';
import controlTitle from '@/utils/controlTitle';
if (!window.VueRouter) {
    Vue.use(VueRouter); // 使用一个vue插件
}


const router = new VueRouter({
    routes,
    mode: 'history'
});

router.afterEach((to, from) => {
    if (to.meta.title) {
        controlTitle.setRouteTitle(to.meta.title);
    }
});

export default router;