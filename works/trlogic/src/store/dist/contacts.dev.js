"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  state: {
    contacts: [{
      id: "0",
      name: "Evan You",
      email: "evan@you.com",
      phone: "8941234565",
      city: "New Jersey",
      removed: true,
      added: false
    }, {
      id: "1",
      name: "Санта Клаусс",
      email: "hny@hny.com",
      phone: "8941234565",
      city: "Москва",
      removed: true,
      added: false
    }, {
      id: "2",
      name: "Карл Маркс",
      email: "mark@company.com",
      phone: "8941234565",
      city: "Москва",
      removed: false,
      added: true
    }, {
      id: "3",
      name: "Мурзик",
      email: "cat@milk.way",
      phone: "8941080808",
      city: "Москва, Ростов",
      removed: false,
      added: true
    }]
  },
  mutations: {
    addNew: function addNew(state, id) {
      state.contacts.find(function (c) {
        if (c.id === id) {
          c.added = true;
          c.removed = false;
        }
      });
    },
    remove: function remove(state, id) {
      state.contacts.find(function (c) {
        if (c.id === id) {
          c.added = false;
          c.removed = true;
        }
      });
    },
    update: function update(state, obj) {
      var index = state.contacts.findIndex(function (i) {
        return i.id === obj.id;
      });
      state.contacts[index] = _objectSpread({}, obj);
    }
  },
  actions: {
    addContact: function addContact(_ref, id) {
      var commit = _ref.commit;
      commit("addNew", id);
    },
    removeContact: function removeContact(_ref2, id) {
      var getters = _ref2.getters,
          commit = _ref2.commit;
      var contact = getters.getContact(id);
      var res = confirm("\u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C ".concat(contact.name, "?"));
      if (res) commit("remove", id);
    },
    updateContact: function updateContact(_ref3, obj) {
      var commit = _ref3.commit;
      commit("update", obj);
    }
  },
  getters: {
    allContacts: function allContacts(state) {
      return state.contacts;
    },
    getContact: function getContact(state) {
      return function (id) {
        return _objectSpread({}, state.contacts.find(function (c) {
          return c.id === id;
        }));
      };
    }
  }
};
exports["default"] = _default;