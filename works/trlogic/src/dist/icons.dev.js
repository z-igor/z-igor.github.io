"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _vueFontawesome = require("@fortawesome/vue-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faUndo, _freeSolidSvgIcons.faCheck, _freeSolidSvgIcons.faBars, _freeSolidSvgIcons.faHome, _freeSolidSvgIcons.faAddressBook, _freeSolidSvgIcons.faCheckDouble, _freeSolidSvgIcons.faTrash, _freeSolidSvgIcons.faPlusCircle);

_vue["default"].component("fa-icon", _vueFontawesome.FontAwesomeIcon);