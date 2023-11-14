"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    userName: localStorage.getItem('$mei_tuan_app_user_name'),
    appkey: "XYQ__1628040258622",
    position: {
      name: '',
      nearCity: []
    } // 当前定位城市

  },
  mutations: {
    setUserName: function setUserName(state, info) {
      // console.log(info)
      // 修改信息
      state.userName = info;
    },
    setPosition: function setPosition(state, data) {
      // console.log(data)
      state.position.name = data.name;
      state.position.nearCity = data.nearCity;
    }
  },
  actions: {
    setUserName: function setUserName(_ref, info) {
      var commit = _ref.commit;
      commit('setUserName', info);
    },
    setPosition: function setPosition(_ref2, data) {
      var commit = _ref2.commit;
      commit('setPosition', data);
    }
  },
  modules: {}
});

exports["default"] = _default;