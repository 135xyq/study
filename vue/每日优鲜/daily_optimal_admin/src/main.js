import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/style/reset.less';
import showMessage from './utils/showMessage';
Vue.prototype.$showMessage = showMessage; // 将showMessage(弹出消息)方法加到VUE原型上

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')