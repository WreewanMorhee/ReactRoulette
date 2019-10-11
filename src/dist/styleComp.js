"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.general_theme = exports.RoulleteBtn = exports.Pointer = exports.HighLightArea = exports.RoulletteBoard = exports.RoulletteBox = exports.RoulletteContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 45%;\n  padding-bottom: 17.1%;\n  background: black;\n  cursor: pointer;\n  margin: 0 auto;\n  margin-top: 12%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  background-image: url(", ");\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  background-image: url(", ");\n  opacity: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  background-image: url(", ");\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  width: 100%;\n  padding-bottom: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RoulletteContainer = _styledComponents["default"].div(_templateObject());

exports.RoulletteContainer = RoulletteContainer;

var RoulletteBox = _styledComponents["default"].div(_templateObject2());

exports.RoulletteBox = RoulletteBox;

var RoulletteBoard = _styledComponents["default"].div(_templateObject3(), function (_ref) {
  var theme = _ref.theme;
  return theme;
}, function (_ref2) {
  var roullette_img = _ref2.roullette_img;
  return roullette_img;
});

exports.RoulletteBoard = RoulletteBoard;

var HighLightArea = _styledComponents["default"].div(_templateObject4(), function (_ref3) {
  var theme = _ref3.theme;
  return theme;
}, function (_ref4) {
  var highlight_img = _ref4.highlight_img;
  return highlight_img;
});

exports.HighLightArea = HighLightArea;

var Pointer = _styledComponents["default"].div(_templateObject5(), function (_ref5) {
  var theme = _ref5.theme;
  return theme;
}, function (_ref6) {
  var pointer_img = _ref6.pointer_img;
  return pointer_img;
});

exports.Pointer = Pointer;

var RoulleteBtn = _styledComponents["default"].div(_templateObject6());

exports.RoulleteBtn = RoulleteBtn;
var general_theme = {
  width: '100%',
  paddingBottom: '100%',
  backgroundPosition: 'center',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 0,
  left: 0
};
exports.general_theme = general_theme;
