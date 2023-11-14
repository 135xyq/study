import Vue from 'vue';
import App from './App.vue';
import './styles/global.less'; //导入全局样式文件


new Vue({
    render: h => h(App),
}).$mount('#app')