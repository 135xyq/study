"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStorage = setStorage;
exports.getStorage = getStorage;
exports.removeStorage = removeStorage;

// 用户本地存储的信息
// 存储
function setStorage(params) {
  localStorage.setItem('$daily_optimal_admin_userInfo', JSON.stringify(params));
} // 获取


function getStorage() {
  return JSON.parse(localStorage.getItem('$daily_optimal_admin_userInfo'));
} // 移出(退出登录)


function removeStorage() {
  localStorage.removeItem('$daily_optimal_admin_userInfo');
}