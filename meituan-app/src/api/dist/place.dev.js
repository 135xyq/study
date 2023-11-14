"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosition = getPosition;
exports.getCityList = getCityList;
exports.getHotCity = getHotCity;
exports.getRecentCity = getRecentCity;
exports.getProvince = getProvince;

var _request = _interopRequireDefault(require("./request.js"));

var _store = _interopRequireDefault(require("@/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var appkey = _store["default"].state.appkey;
/**
 * 获取当前位置
 * @returns
 */

function getPosition() {
  return regeneratorRuntime.async(function getPosition$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_request["default"].get('/api/meituan/city/getPosition.json', {
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
 * 获取城市列表
 * @returns
 */


function getCityList() {
  return regeneratorRuntime.async(function getCityList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_request["default"].get('/api/meituan/city/cityList.json', {
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
/**
 * 获取热门城市
 * @returns
 */


function getHotCity() {
  return regeneratorRuntime.async(function getHotCity$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_request["default"].get('/api/meituan/city/hot.json', {
            params: {
              appkey: appkey
            }
          }));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}
/**
 * 获取最近搜索
 * @returns
 */


function getRecentCity() {
  return regeneratorRuntime.async(function getRecentCity$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_request["default"].get('/api/meituan/city/recents.json', {
            params: {
              appkey: appkey
            }
          }));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}
/**
 * 获取省份信息
 * @returns
 */


function getProvince() {
  return regeneratorRuntime.async(function getProvince$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(_request["default"].get('/api/meituan/city/province.json', {
            params: {
              appkey: appkey
            }
          }));

        case 2:
          return _context5.abrupt("return", _context5.sent);

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
}