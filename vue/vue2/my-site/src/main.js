import Vue from 'vue'
import App from './App.vue'
import router from './router';
import showMessage from './utils/showMessage';
import './mock'; //导入模拟数据
import loading from '@/directives/loading'; //导入自定义的loading指令
Vue.prototype.$showMessage = showMessage; // 将showMessage(弹出消息)方法加到VUE原型上
Vue.config.productionTip = false;
Vue.directive('vLoading', loading);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

import { getBlogs, getBlogTypes } from '@/api/blog';
getBlogTypes().then((r) => {
    console.log(r)
})
getBlogs().then((r) => {
    console.log(r)
})