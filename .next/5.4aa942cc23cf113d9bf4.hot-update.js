webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_LeftPanel__ = __webpack_require__("./components/LeftPanel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);

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
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_LeftPanel__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "right-panel",
        "class": "right-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
        id: "header",
        "class": "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "header-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        id: "menuToggle",
        "class": "menutoggle pull-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa fa-tasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "header-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "search-trigger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "form-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        "class": "search-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        "class": "form-control mr-sm-2",
        type: "text",
        placeholder: "Search ...",
        "aria-label": "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "search-close",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown for-notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "btn btn-secondary dropdown-toggle",
        type: "button",
        id: "notification",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-bell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count bg-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "5")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "You have 3 Notification"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-1",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Server #1 overloaded.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-4",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Server #2 overloaded.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-5",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Server #3 overloaded.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown for-message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "btn btn-secondary dropdown-toggle",
        type: "button",
        id: "message",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "ti-email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count bg-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "9")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "You have 4 Mails"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-1",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/1.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Jonathan Smith"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Just now"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Hello, this is an example msg"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-4",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/2.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Jack Sanders"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "5 minutes ago"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Lorem ipsum dolor sit amet, consectetur"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-5",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/3.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Cheryl Wheeler"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "10 minutes ago"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Hello, this is an example msg"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-3",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/4.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Rachel Santos"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "15 minutes ago"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Lorem ipsum dolor sit amet, consectetur"))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "user-area dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        "class": "user-avatar rounded-circle",
        src: "images/admin.jpg",
        alt: "User Avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "user-menu dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa- user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), "My Profile"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa- user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), "Notifications ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "13")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa -cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), "Settings"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-power -off",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), "Logout"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "language-select dropdown",
        id: "language-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-toggle",
        href: "#",
        "data-toggle": "dropdown",
        id: "language",
        "aria-haspopup": "true",
        "aria-expanded": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "flag-icon flag-icon-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "language",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "flag-icon flag-icon-fr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "flag-icon flag-icon-es",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "flag-icon flag-icon-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "flag-icon flag-icon-it",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "breadcrumbs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "page-header float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, "Dashboard")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "page-header float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ol", {
        "class": "breadcrumb text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "Dashboard")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "content mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "alert  alert-success alert-dismissible fade show",
        role: "alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "badge badge-pill badge-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, "Success"), " You successfully read this important alert message.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        type: "button",
        "class": "close",
        "data-dismiss": "alert",
        "aria-label": "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, "\xD7")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card text-white bg-flat-color-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, "Action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        "class": "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "10468")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, "Members online"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "chart-wrapper px-0",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
        id: "widgetChart1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card text-white bg-flat-color-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, "Action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        "class": "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, "10468")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, "Members online"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "chart-wrapper px-0",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
        id: "widgetChart2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card text-white bg-flat-color-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, "Action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        "class": "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, "10468")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, "Members online")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "chart-wrapper px-0",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
        id: "widgetChart3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card text-white bg-flat-color-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, "Action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        "class": "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, "10468")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, "Members online"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "chart-wrapper px-3",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
        id: "widgetChart4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "social-box facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, "40"), " k"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, "friends")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, "450")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, "feeds"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "social-box twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }, "30"), " k"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, "friends")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }, "450")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, "tweets"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "social-box linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }, "40"), " +"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, "contacts")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, "250")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      }, "feeds"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "social-box google-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-google-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }, "94"), " k"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, "followers")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, "92")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, "circles"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-xl-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        "class": "card-title mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }, "Traffic"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "small text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        }
      }, "October 2017")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-8 hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        type: "button",
        "class": "btn btn-primary float-right bg-flat-color-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-cloud-download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "btn-toolbar float-right",
        role: "toolbar",
        "aria-label": "Toolbar with button groups",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "btn-group mr-3",
        "data-toggle": "buttons",
        "aria-label": "First group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        "class": "btn btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "radio",
        name: "options",
        id: "option1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        }
      }), " Day"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        "class": "btn btn-outline-secondary active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "radio",
        name: "options",
        id: "option2",
        checked: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        }
      }), " Month"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        "class": "btn btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "radio",
        name: "options",
        id: "option3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }), " Year"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "chart-wrapper mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
        id: "trafficChart",
        style: {
          height: '200px'
        },
        height: "200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      }, "Visits"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }, "29.703 Users (40%)"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress-bar bg-success",
        role: "progressbar",
        style: {
          width: '40%'
        },
        "aria-valuenow": "40",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, "Unique"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        }
      }, "24.093 Users (20%)"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress-bar bg-info",
        role: "progressbar",
        style: {
          width: '20%'
        },
        "aria-valuenow": "20",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        }
      }, "Pageviews"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      }, "78.706 Views (60%)"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress-bar bg-warning",
        role: "progressbar",
        style: {
          width: '60%'
        },
        "aria-valuenow": "60",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }, "New Users"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }, "22.123 Users (80%)"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress-bar bg-danger",
        role: "progressbar",
        style: {
          width: '80%'
        },
        "aria-valuenow": "80",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      }, "Bounce Rate"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        }
      }, "40.15%"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress-bar",
        role: "progressbar",
        style: {
          width: '40%'
        },
        "aria-valuenow": "40",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        }
      }))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "twt-feed blue-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "corner-ribon black-ribon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "fa fa-twitter wtt-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        "class": "align-self-center rounded-circle mr-3",
        style: {
          width: '85px',
          height: '85px'
        },
        alt: "",
        src: "images/admin.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        "class": "text-white display-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        }
      }, "Jim Doe"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        }
      }, "Project Manager")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "weather-category twt-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      }, "750"), "Tweets"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        }
      }, "865"), "Following"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        }
      }, "3645"), "Followers"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "twt-write col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
        placeholder: "Write your Tweet and Enter",
        rows: "1",
        "class": "form-control t-text-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("footer", {
        "class": "twt-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-camera",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-map-marker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        }
      })), "New Castle, UK", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "pull-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        }
      }, "32")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-widget-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-icon dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "ti-money text-success border-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-content dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        }
      }, "Total Profit"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-digit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        }
      }, "1,012")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-widget-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-icon dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "ti-user text-primary border-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-content dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        }
      }, "New Customer"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-digit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        }
      }, "961")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-widget-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-icon dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "ti-layout-grid2 text-warning border-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-content dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        }
      }, "Active Projects"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-digit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        }
      }, "770")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-xl-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        }
      }, "World")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "Vector-map-js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "vmap",
        "class": "vmap",
        style: {
          height: '265px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        }
      })))))));
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
                return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards', {
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
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.4aa942cc23cf113d9bf4.hot-update.js.map