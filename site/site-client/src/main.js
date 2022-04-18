import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import showMessage from "./utils/showMessage/index";
import "./styles/global.less";
Vue.prototype.$showMessage = showMessage;

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')