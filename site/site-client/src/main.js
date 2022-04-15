import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import { login } from "./api/user"
import { getArticle } from "./api/article"

login({ userName: 'xyq', password: '123456' }).then(res => {
    console.log(res)
})

getArticle().then(res => {
    console.log(res)
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')