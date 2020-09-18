"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Headers;

var _messages = _interopRequireDefault(require("../utils/messages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Headers(value) {
  if (!_messages["default"][value]) {
    return value;
  }

  return _messages["default"][value];
}