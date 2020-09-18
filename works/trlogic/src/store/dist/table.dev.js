"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = {
  state: {
    headers: ["#", "Name", "Email", "Phone", "City", "Added", "Removed"]
  },
  mutations: {
    addInTable: function addInTable(state, array) {
      array.forEach(function (element) {
        if (!state.headers.includes(element)) {
          var _state$headers;

          (_state$headers = state.headers).splice.apply(_state$headers, [-2, 0].concat(_toConsumableArray(array)));
        }
      });
    },
    deleteHead: function deleteHead(state, str) {
      var index = state.headers.indexof(str);
      state.headers.splice(index, 1);
    }
  },
  actions: {
    addHeaders: function addHeaders(_ref, aH) {
      var commit = _ref.commit;
      commit("addInTable", [aH]);
    },
    deleteHeader: function deleteHeader(_ref2, str) {
      var commit = _ref2.commit;
      commit("deleteHead", str);
    }
  },
  getters: {
    getTableHeaders: function getTableHeaders(s) {
      return s.headers;
    }
  }
};
exports["default"] = _default;