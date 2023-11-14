"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getResultRouter;
// 处理不同身份对应的路由按钮
var routerMap = {
  // 普通用户
  customer: [{
    name: 'product'
  }, {
    name: 'productAdd'
  }, {
    name: 'productList'
  }, {
    name: 'productEdit'
  }],
  // 管理员
  admin: [{
    name: 'product'
  }, {
    name: 'productAdd'
  }, {
    name: 'productList'
  }, {
    name: 'productEdit'
  }, {
    name: 'category'
  }]
};
/**
 * 
 * @param {String} role 用户角色
 * @param {Array} routes 路由数组
 */

function getResultRouter(role, routes) {
  var roleRouterName = routerMap[role].map(function (item) {
    return item.name;
  });
  var resultRouter = routes.filter(function (item) {
    if (roleRouterName.indexOf(item.name) !== -1) {
      item.children = item.children.filter(function (t) {
        return roleRouterName.indexOf(t.name) !== -1;
      });
      return true;
    }

    return false;
  });
  return resultRouter;
}