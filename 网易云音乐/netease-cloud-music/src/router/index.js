import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.name) {
        document.title = to.meta.name;
    }
    const status = store.state.login.isLogin;
    if (to.meta.auth) {
        // 需要登录权限
        if (!status) {
            // 没有登录
            next('/')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router