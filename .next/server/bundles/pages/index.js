module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/LeftPanel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/cw/Documents/projects/Borsetta/borsetta-experience-demo-app/components/LeftPanel.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var LeftPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(LeftPanel, _Component);

  function LeftPanel() {
    _classCallCheck(this, LeftPanel);

    return _possibleConstructorReturn(this, (LeftPanel.__proto__ || Object.getPrototypeOf(LeftPanel)).apply(this, arguments));
  }

  _createClass(LeftPanel, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", {
        id: "left-panel",
        className: "borsetta left-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "navbar navbar-expand-sm navbar-default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "navbar-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#main-menu",
        "aria-controls": "main-menu",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "navbar-brand",
        href: "./",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "borsetta-logo",
        src: "static/images/borsetta_logo.svg",
        alt: "Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "navbar-brand hidden",
        href: "./",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "borsetta-icon",
        src: "static/images/borsetta_icon.svg",
        alt: "Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "main-menu",
        className: "main-menu collapse navbar-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "nav navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "menu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-3 pull-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "user-avatar rounded-circle",
        src: "https://picsum.photos/200/300/?random",
        alt: "User Avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-9 pull-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "avatar-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Username")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "Lucent Diamonds"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fas fa-tachometer-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), "Dashboard ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "menu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Activities & Services"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fas fa-tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), "MarketPlace")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fas fa-briefcase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), "Business Services")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon far fa-gem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), "Titling and Tracking"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fas fa-file-invoice-dollar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Title Assets")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fas fa-file-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "forms-basic.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Title Memo Assets")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fas fa-layer-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "forms-advanced.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "All Title Assets")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "menu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Finance & Data"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-tasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), "Contracts")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon ti-email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), "Wallet")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-bar-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), "Inventory")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-area-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), "Account"))))));
    }
  }]);

  return LeftPanel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (LeftPanel);

/***/ }),

/***/ "./components/RightPanel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/cw/Documents/projects/Borsetta/borsetta-experience-demo-app/components/RightPanel.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var RightPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(RightPanel, _Component);

  function RightPanel() {
    _classCallCheck(this, RightPanel);

    return _possibleConstructorReturn(this, (RightPanel.__proto__ || Object.getPrototypeOf(RightPanel)).apply(this, arguments));
  }

  _createClass(RightPanel, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "right-panel",
        className: "borsetta right-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        id: "header",
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        id: "menuToggle",
        className: "menutoggle pull-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa fa-tasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "search-trigger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        className: "search-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        className: "form-control mr-sm-2",
        type: "text",
        placeholder: "Search ...",
        "aria-label": "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "search-close",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown for-notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-secondary dropdown-toggle",
        type: "button",
        id: "notification",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-bell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count bg-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "5")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "You have 3 Notification"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item media bg-flat-color-1",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Server #1 overloaded.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item media bg-flat-color-4",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Server #2 overloaded.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item media bg-flat-color-5",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "Server #3 overloaded.")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown for-message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-secondary dropdown-toggle",
        type: "button",
        id: "message",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count bg-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "9")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "You have 4 Mails"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item media bg-flat-color-1",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/1.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Jonathan Smith"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Just now"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Hello, this is an example msg"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item media bg-flat-color-4",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/2.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Jack Sanders"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "5 minutes ago"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Lorem ipsum dolor sit amet, consectetur"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item media bg-flat-color-5",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/3.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Cheryl Wheeler"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "10 minutes ago"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Hello, this is an example msg"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item media bg-flat-color-3",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/4.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Rachel Santos"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "15 minutes ago"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Lorem ipsum dolor sit amet, consectetur"))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "user-area dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "user-avatar rounded-circle",
        src: "https://picsum.photos/200/300/?random",
        alt: "User Avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "user-menu dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa- user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), "My Profile"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa- user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), "Notifications ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "13")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa -cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), "Settings"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-power -off",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), "Logout"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "language-select dropdown",
        id: "language-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-toggle",
        href: "#",
        "data-toggle": "dropdown",
        id: "language",
        "aria-haspopup": "true",
        "aria-expanded": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "flag-icon flag-icon-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "language",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "flag-icon flag-icon-fr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "flag-icon flag-icon-es",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "flag-icon flag-icon-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "flag-icon flag-icon-it",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "breadcrumbs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-header float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, "Dashboard")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-header float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ol", {
        className: "breadcrumb text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, "Dashboard")))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "alert  alert-success alert-dismissible fade show",
        role: "alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "badge badge-pill badge-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, "Success"), " You successfully read this important alert message.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "alert",
        "aria-label": "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, "\xD7")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card text-white bg-flat-color-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, "Action"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        className: "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, "10468")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, "Members online"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "chart-wrapper px-0",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", {
        id: "widgetChart1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card text-white bg-flat-color-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, "Action"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        className: "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, "10468")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, "Members online"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "chart-wrapper px-0",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", {
        id: "widgetChart2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card text-white bg-flat-color-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, "Action"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        className: "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, "10468")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, "Members online")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "chart-wrapper px-0",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", {
        id: "widgetChart3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card text-white bg-flat-color-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, "Action"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        className: "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, "10468")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, "Members online"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "chart-wrapper px-3",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", {
        id: "widgetChart4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "social-box facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fab fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, "40"), " k"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, "friends")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, "450")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, "feeds"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "social-box twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fab fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, "30"), " k"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, "friends")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, "450")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, "tweets"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "social-box linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fab fa-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, "40"), " +"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }, "contacts")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }, "250")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, "feeds"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "social-box google-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fab fa-google-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, "94"), " k"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, "followers")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, "92")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, "circles"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        className: "card-title mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, "Traffic"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }, "October 2017")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-8 hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary float-right bg-flat-color-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-cloud-download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn-toolbar float-right",
        role: "toolbar",
        "aria-label": "Toolbar with button groups",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn-group mr-3",
        "data-toggle": "buttons",
        "aria-label": "First group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "btn btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "radio",
        name: "options",
        id: "option1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }), " Day"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "btn btn-outline-secondary active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "radio",
        name: "options",
        id: "option2",
        checked: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }), " Month"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        className: "btn btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "radio",
        name: "options",
        id: "option3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }), " Year"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "chart-wrapper mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", {
        id: "trafficChart",
        style: {
          height: '200px'
        },
        height: "200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }, "Visits"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        }
      }, "29.703 Users (40%)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progress-bar bg-success",
        role: "progressbar",
        style: {
          width: '40%'
        },
        "aria-valuenow": "40",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      }, "Unique"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        }
      }, "24.093 Users (20%)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progress-bar bg-info",
        role: "progressbar",
        style: {
          width: '20%'
        },
        "aria-valuenow": "20",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        }
      }, "Pageviews"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      }, "78.706 Views (60%)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progress-bar bg-warning",
        role: "progressbar",
        style: {
          width: '60%'
        },
        "aria-valuenow": "60",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, "New Users"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, "22.123 Users (80%)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progress-bar bg-danger",
        role: "progressbar",
        style: {
          width: '80%'
        },
        "aria-valuenow": "80",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        }
      }, "Bounce Rate"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        }
      }, "40.15%"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "progress-bar",
        role: "progressbar",
        style: {
          width: '40%'
        },
        "aria-valuenow": "40",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "twt-feed blue-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "corner-ribon black-ribon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "fa fa-twitter wtt-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "align-self-center rounded-circle mr-3",
        style: {
          width: '85px',
          height: '85px'
        },
        alt: "",
        src: "images/admin.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "text-white display-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        }
      }, "Jim Doe"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }, "Project Manager")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "weather-category twt-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        }
      }, "750"), "Tweets"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        }
      }, "865"), "Following"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        }
      }, "3645"), "Followers"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "twt-write col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        placeholder: "Write your Tweet and Enter",
        rows: "1",
        className: "form-control t-text-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
        className: "twt-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-camera",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-map-marker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        }
      })), "New Castle, UK", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "pull-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        }
      }, "32")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-widget-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-icon dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-money text-success border-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-content dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        }
      }, "Total Profit"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-digit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        }
      }, "1,012")))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-widget-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-icon dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-user text-primary border-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-content dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        }
      }, "New Customer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-digit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        }
      }, "961")))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-widget-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-icon dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "ti-layout-grid2 text-warning border-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-content dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        }
      }, "Active Projects"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "stat-digit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        }
      }, "770")))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-xl-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        }
      }, "World")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "Vector-map-js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "vmap",
        className: "vmap",
        style: {
          height: '265px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        }
      }))))));
    }
  }]);

  return RightPanel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (RightPanel);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_LeftPanel__ = __webpack_require__("./components/LeftPanel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_RightPanel__ = __webpack_require__("./components/RightPanel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);

var _jsxFileName = "/Users/cw/Documents/projects/Borsetta/borsetta-experience-demo-app/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_LeftPanel__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_RightPanel__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    // static async getInitialProps() {
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards', {
                  headers: {
                    "X-Mashape-Key": "LRcy7D5BaKmshRtPkQnayek43bG0p1BTtkbjsnRYdBCif1iHEp"
                  }
                });

              case 2:
                response = _context.sent;
                return _context.abrupt("return", {
                  cards: response.data
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map