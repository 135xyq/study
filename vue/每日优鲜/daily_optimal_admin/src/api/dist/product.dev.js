"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryList = categoryList;
exports.productList = productList;
exports.productDelete = productDelete;
exports.productDetail = productDetail;
exports.productEdit = productEdit;
exports.productAdd = productAdd;
exports.categoryAdd = categoryAdd;
exports.categoryEdit = categoryEdit;
exports.categoryDelete = categoryDelete;

var _store = _interopRequireDefault(require("@/store"));

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var appkey = _store["default"].state.user.appkey;
/**
 * 获取商品类目列表
 * @returns 
 */

function categoryList() {
  return regeneratorRuntime.async(function categoryList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_request["default"].get('/category/all', {
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
 * 获取所有的商品
 * @param {Object} option 请求参数
 * @returns 
 */


function productList(option) {
  return regeneratorRuntime.async(function productList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_request["default"].get('/products/all', {
            params: _objectSpread({
              appkey: appkey
            }, option)
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
 * 删除商品
 * @param {String} id 商品的id
 */


function productDelete(id) {
  return regeneratorRuntime.async(function productDelete$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_request["default"]["delete"]("/products/".concat(id), {
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
 * 获取商品的具体信息
 * @param {Number} id 商品的id
 * @returns 
 */


function productDetail(id) {
  return regeneratorRuntime.async(function productDetail$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_request["default"].get("/products/".concat(id), {
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
 * 编辑商品
 * @param {Object} option 商品信息
 * @returns 
 */


function productEdit(option) {
  return regeneratorRuntime.async(function productEdit$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(_request["default"].put('/products/edit', _objectSpread({
            appkey: appkey
          }, option)));

        case 2:
          return _context5.abrupt("return", _context5.sent);

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
}
/**
 * 新增商品
 * @param {Object} option 商品信息
 * @returns 
 */


function productAdd(option) {
  return regeneratorRuntime.async(function productAdd$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(_request["default"].post('/products/add', _objectSpread({
            appkey: appkey
          }, option)));

        case 2:
          return _context6.abrupt("return", _context6.sent);

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
}
/**
 * 类目新增
 * @param {Object} option 
 * @returns 
 */


function categoryAdd(option) {
  return regeneratorRuntime.async(function categoryAdd$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(_request["default"].post('/category/add', _objectSpread({
            appkey: appkey
          }, option)));

        case 2:
          return _context7.abrupt("return", _context7.sent);

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  });
}
/**
 * 类目编辑
 * @param {*} option 
 * @returns 
 */


function categoryEdit(option) {
  return regeneratorRuntime.async(function categoryEdit$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(_request["default"].put('/category/edit', _objectSpread({
            appkey: appkey
          }, option)));

        case 2:
          return _context8.abrupt("return", _context8.sent);

        case 3:
        case "end":
          return _context8.stop();
      }
    }
  });
}
/**
 * 删除类目
 * @param {String} id 
 * @returns 
 */


function categoryDelete(id) {
  return regeneratorRuntime.async(function categoryDelete$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(_request["default"]["delete"]("/category/".concat(id), {
            params: {
              appkey: appkey
            }
          }));

        case 2:
          return _context9.abrupt("return", _context9.sent);

        case 3:
        case "end":
          return _context9.stop();
      }
    }
  });
}