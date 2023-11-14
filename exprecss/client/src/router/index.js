import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home';
import store from '@/store';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/Login/index.vue')
    },
    {
        path: '/self',
        name: 'Self',
        component: () =>
            import ('../views/Self/index.vue'),
        beforeEnter(to, from, next) {
            if (store.state.userLogin.userData) {
                next();
            } else {
                next('/login')
            }
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router