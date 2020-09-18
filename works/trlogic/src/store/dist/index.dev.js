"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _contacts = _interopRequireDefault(require("./contacts"));

var _table = _interopRequireDefault(require("./table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    notification: {
      home: false,
      contacts: true,
      todos: false
    }
  },
  mutations: {
    notification: function notification(state, _ref) {
      var page = _ref.page,
          bool = _ref.bool;
      state.notification[page] = bool;
    }
  },
  actions: {
    setNotification: function setNotification(_ref2, _ref3) {
      var commit = _ref2.commit;
      var page = _ref3.page,
          bool = _ref3.bool;
      commit("notification", {
        page: page,
        bool: bool
      });
    }
  },
  getters: {
    getNotification: function getNotification(s) {
      return s.notification;
    }
  },
  modules: {
    contacts: _contacts["default"],
    table: _table["default"]
  }
});

exports["default"] = _default;