import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/reset.less';
Vue.use(ElementUi);

import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

Vue.use(mavonEditor);

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