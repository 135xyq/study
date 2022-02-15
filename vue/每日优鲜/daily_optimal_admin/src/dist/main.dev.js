"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vCharts = _interopRequireDefault(require("v-charts"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

require("@/style/reset.less");

var _showMessage = _interopRequireDefault(require("./utils/showMessage"));

var _store = _interopRequireDefault(require("./store"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].prototype.$showMessage = _showMessage["default"]; // 将showMessage(弹出消息)方法加到VUE原型上

_vue["default"].use(_elementUi["default"]); // 使用ElementUI插件


_vue["default"].use(_vCharts["default"]); // 使用echarts 插件


_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');