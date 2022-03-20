import Vue from 'vue'
import store from '@/store';
import VueRouter from 'vue-router'
import Home from '../views/Home'
import AddArticle from '@/views/Home/AddArticle'
import HistoryRecord from '@/views/Home/HistoryRecord'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    meta: {
        title: '首页'
    },
    redirect: 'history',
    component: Home,
    children: [{
        path: 'add',
        name: 'Add',
        meta: {
            title: '新增一个记录'
        },
        component: AddArticle
    }, {
        path: 'history',
        name: 'History',
        meta: {
            title: '历史记录'
        },
        component: HistoryRecord
    }]
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