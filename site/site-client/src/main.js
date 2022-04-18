import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import showMessage from "./utils/showMessage/index";
import "./styles/global.less";
Vue.prototype.$showMessage = showMessage;
store.dispatch("about/getData"); //先获取仓库的全局设置数据
import loading from '@/directives/loading'; //导入自定义的loading指令
import lazy from '@/directives/lazy'; //导入自定义的lazy指令
Vue.directive('vLoading', loading); //自定义加载指令
Vue.directive('vLazy', lazy); //自定义图片懒加载指令
import './eventBus'; //引入事件总线

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')