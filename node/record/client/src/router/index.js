import Vue from 'vue'
import store from '@/store';
import VueRouter from 'vue-router'
import Home from '../views/Home'
import routerGuard from '@/utils/routerGuard.js';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    meta: {
        title: '首页'
    },
    component: Home,
    beforeEnter(to, from, next) {
        routerGuard(to, from, next);
    }
}, {
    path: '/login',
    name: 'Login',
    meta: {
        title: '登录'
    },
    component: () =>
        import ('@/views/Login/index'),
}, ]



const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if (to.name !== 'Login' && !store.state.login.userData) {
        next('/login');
    } else {
        next()
    }
})

export default router