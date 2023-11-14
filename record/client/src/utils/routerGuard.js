// 路由守卫

import store from '@/store'

export default (to, from, next) => {
    if (store.state.login.userData) {
        next();
    } else {
        next('login')
    }
}