"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _store = _interopRequireDefault(require("@/store"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _getRouterMenus = _interopRequireDefault(require("@/utils/getRouterMenus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

if (!window.VueRouter) {
  _vue["default"].use(_vueRouter["default"]);
}

var originalPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
};
/**
 * hidden : 是否在动态路由时隐藏
 * title: 名字
 * auth: 是否需要鉴权
 * icon: 渲染导航图标
 */


var changeRouterMap = [{
  name: "product",
  path: "/product",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/Layout/index"));
    });
  },
  meta: {
    title: "商品",
    auth: true,
    hidden: false,
    icon: ""
  },
  children: [{
    name: "productList",
    path: "list",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/ProductList/index"));
      });
    },
    meta: {
      title: "商品列表",
      auth: true,
      hidden: false,
      icon: "el-icon-s-grid"
    }
  }, {
    name: "productAdd",
    path: "add",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/ProductAdd/index"));
      });
    },
    meta: {
      title: "新增商品",
      auth: true,
      hidden: false,
      icon: "el-icon-circle-plus"
    }
  }, {
    name: "productEdit",
    path: "edit",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/ProductAdd/index"));
      });
    },
    meta: {
      title: "编辑商品",
      auth: true,
      hidden: true,
      icon: "el-icon-edit-outline"
    }
  }, {
    name: "category",
    path: "category",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/Category/index"));
      });
    },
    meta: {
      title: "商品类目",
      auth: true,
      hidden: false,
      icon: "el-icon-s-operation"
    }
  }]
}];
var routes = [{
  name: "login",
  path: "/login",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/Login/index"));
    });
  },
  meta: {
    title: "登录",
    auth: false,
    hidden: true
  }
}, {
  name: "register",
  path: "/register",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/Register/index"));
    });
  },
  meta: {
    title: "注册",
    auth: false,
    hidden: true
  }
}, {
  name: "findback",
  path: "/findback",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/FindBack/index"));
    });
  },
  meta: {
    title: "找回密码",
    auth: false,
    hidden: true
  }
}, {
  name: "home",
  path: "/",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/Layout/index"));
    });
  },
  meta: {
    title: "首页",
    auth: true,
    hidden: false,
    icon: "el-icon-s-home"
  },
  children: [{
    name: "index",
    path: "index",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/Index/index"));
      });
    },
    meta: {
      title: "统计",
      auth: true,
      hidden: false,
      icon: "el-icon-s-data"
    }
  }]
}];
var router = new _vueRouter["default"]({
  routes: routes,
  mode: "history"
}); // 路由守卫

var flag = false;
router.beforeEach(function (to, from, next) {
  console.log(1);

  if (to.meta.title) {
    document.title = to.meta.title;
  }

  console.log(to, from);

  if (to.meta.auth) {
    if (_store["default"].state.user != null) {
      // console.log(store.state.isAdded)
      if (_store["default"].state.routerMenus.length === 0) {
        var changeRouters = (0, _getRouterMenus["default"])(_store["default"].state.user.role, changeRouterMap); // console.log(2)

        _store["default"].dispatch("changeRouterMenus", routes.concat(changeRouters)).then(function () {
          router.addRoutes(changeRouters);

          _store["default"].dispatch("routesAdded");

          flag = true;
          next();
        });
      } else {
        next();
      }
    } else {
      next("/login");
    }
  } else {
    next();
  }
}); // console.log(router)

var _default = router;
exports["default"] = _default;