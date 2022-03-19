import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { login, whoAmI, logout } from './api/login';

// store.dispatch('login/login', {
//     loginId: 'xyq',
//     loginPwd: '123456'
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')