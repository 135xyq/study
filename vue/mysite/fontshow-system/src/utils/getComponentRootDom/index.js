// 获取组件的DOM根节点
import Vue from 'vue';
export default function(comp, props) {
    const vm = new Vue({
        render: h => h(comp, { props })
    })
    vm.$mount();
    return vm.$el;
}