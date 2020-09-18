"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  data: function data() {
    return {
      done: []
    };
  },
  computed: {
    canUndo: function canUndo() {
      if (this.done.length === 1) {
        return true;
      }

      return false;
    },
    getDone: function getDone() {
      return _objectSpread({}, this.done[this.done.length - 1]);
    }
  },
  methods: {
    undo: function undo() {
      this.done.pop();
      this.$store.dispatch("updateContact", this.done[this.done.length - 1]);
      this.done.pop();
      this.contact = this.getDone;
      this.title = this.contact.name;
    }
  },
  created: function created() {
    var _this = this;

    // console.log("Created");
    var contact = this.getContact(this.$route.params.id);
    this.done.push(contact);
    this.$store.subscribe(function (mutation) {
      if (mutation.type === "update") {
        _this.done.push(_objectSpread({}, mutation.payload));
      }
    });
  }
};
exports["default"] = _default;