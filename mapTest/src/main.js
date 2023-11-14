import Vue from 'vue'
import App from './App.vue'

import VueAMap from 'vue-amap';

Vue.use(VueAMap);

// 在 VueAMap 上调用 initAMapApiLoader
VueAMap.initAMapApiLoader({
  key: '10e5c269533c08abbda1f39dae000662',
  // 更多配置项...
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
