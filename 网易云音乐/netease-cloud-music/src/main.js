import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/init.less'

// (async function() {
//     await store.dispatch('login/logined')

//     await store.dispatch('login/userInfo', {
//         id: '1876966761'
//     })

// })()


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')