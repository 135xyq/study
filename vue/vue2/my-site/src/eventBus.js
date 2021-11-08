// 事件总线

import Vue from 'vue';
Vue.prototype.$bus = new Vue({})

// 手写事假总线
// const listeners = {};
// export default {
//     // 监听某个事件
//     $on(eventName, handler) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handler);
//     },
//     // 销毁事件的监听
//     $off(eventName, handler) {
//         if (!listeners[eventName]) {
//             return;
//         }
//         listeners[eventName].delete(handler);
//     },
//     // 触发事件
//     $emit(eventName, ...args) {
//         for (const handler of listeners[eventName]) {
//             handler(...args);
//         }
//     }

// }