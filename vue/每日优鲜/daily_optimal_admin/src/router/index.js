import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';

if (!window.VueRouter) {
    Vue.use(VueRouter);
}

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;