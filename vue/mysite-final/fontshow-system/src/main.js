import Vue from 'vue'
import App from './App.vue'
import router from './router';
import showMessage from './utils/showMessage';
// import './mock'; //导入模拟数据
import store from './store'; //导入仓库
import loading from '@/directives/loading'; //导入自定义的loading指令
import lazy from '@/directives/lazy'; //导入自定义的lazy指令
Vue.prototype.$showMessage = showMessage; // 将showMessage(弹出消息)方法加到VUE原型上
import './eventBus'; //引入事件总线
Vue.config.productionTip = false;
Vue.directive('vLoading', loading); //自定义加载指令
Vue.directive('vLazy', lazy); //自定义图片懒加载指令
store.dispatch("setting/fetchSetting"); //先获取仓库的全局设置数据

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')