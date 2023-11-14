"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var myLocalStorage = _interopRequireWildcard(require("@/utils/userStorage"));

var _router = _interopRequireDefault(require("@/router"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    user: myLocalStorage.getStorage(),
    // 用户信息
    routerMenus: [],
    // 用户路由
    isAdded: false // 路由是否已经添加过

  },
  mutations: {
    setUserInfo: function setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    logout: function logout(state) {
      state.user = {
        username: '',
        email: '',
        appkey: '',
        role: ''
      };
    },
    changeRouterMenus: function changeRouterMenus(state, routes) {
      state.routerMenus = routes;
    },
    routesNoAdded: function routesNoAdded(state) {
      state.isAdded = false;
    },
    routesAdded: function routesAdded(state) {
      state.isAdded = true;
    }
  },
  actions: {
    setUserInfo: function setUserInfo(_ref, userInfo) {
      var commit = _ref.commit;
      commit('setUserInfo', userInfo);
      myLocalStorage.setStorage(userInfo);
    },
    logout: function logout(_ref2, routes) {
      var commit = _ref2.commit;
      commit('logout');
      myLocalStorage.removeStorage(); // 删除存储信息

      commit('changeRouterMenus', routes); //更改路由信息

      _router["default"].options.routes = routes; // commit('routesNoAdded'); // 更改路由更改状态
    },
    changeRouterMenus: function changeRouterMenus(_ref3, routes) {
      var commit = _ref3.commit;
      commit('changeRouterMenus', routes);
    },
    routesAdded: function routesAdded(_ref4) {
      var commit = _ref4.commit;
      commit('routesAdded');
    }
  },
  modules: {}
});

exports["default"] = _default;