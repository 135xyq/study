import Vue from 'vue';
import VCharts from 'v-charts'
import App from './App.vue';
import router from './router';
import '@/style/reset.less';
import showMessage from './utils/showMessage';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$showMessage = showMessage; // 将showMessage(弹出消息)方法加到VUE原型上
Vue.use(ElementUI); // 使用ElementUI插件
Vue.use(VCharts); // 使用echarts 插件
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')