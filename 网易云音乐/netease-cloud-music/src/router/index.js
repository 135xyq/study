import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    console.log(to)
        // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
        // else next()
})

export default router