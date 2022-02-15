"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _showMessage = _interopRequireDefault(require("@/utils/showMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ins = _axios["default"].create({
  baseURL: "https://mallapi.duyiedu.com/"
}); //创建一个axios实例


ins.interceptors.response.use(function (resp) {
  if (resp.data.status === 'fail') {
    (0, _showMessage["default"])({
      content: resp.data.msg,
      type: 'error',
      duration: 1500
    });
    return null;
  }

  return resp.data;
});
var _default = ins;
exports["default"] = _default;