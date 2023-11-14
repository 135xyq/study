"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNav = getNav;
exports.getRecommend = getRecommend;

var _request = _interopRequireDefault(require("./request.js"));

var _store = _interopRequireDefault(require("@/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var appkey = _store["default"].state.appkey;
/**
 * 获取左侧导航栏数据
 * @returns
 */

function getNav() {
  return regeneratorRuntime.async(function getNav$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_request["default"].get('/api/meituan/index/nav.json', {
            params: {
              appkey: appkey
            }
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}
/**
 * 获取推荐的内容
 * @returns
 */


function getRecommend() {
  return regeneratorRuntime.async(function getRecommend$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_request["default"].get('/api/meituan/index/resultsByKeywords.json', {
            params: {
              appkey: appkey
            }
          }));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}