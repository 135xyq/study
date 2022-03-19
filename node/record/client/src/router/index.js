import Vue from 'vue'
import store from '@/store';
import VueRouter from 'vue-router'
import Home from '../views/Home'
import routerGuard from '@/utils/routerGuard.js';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter(to, from, next) {
        routerGuard(to, from, next);
    }
}, ]

const router = new VueRouter({
    routes
})

export default router