webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);

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
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("aside", {
        id: "left-panel",
        "class": "left-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        "class": "navbar navbar-expand-sm navbar-default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "navbar-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#main-menu",
        "aria-controls": "main-menu",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "navbar-brand",
        href: "./",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "images/logo.png",
        alt: "Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "navbar-brand hidden",
        href: "./",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "images/logo2.png",
        alt: "Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "main-menu",
        "class": "main-menu collapse navbar-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        "class": "nav navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "index.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), "Dashboard ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        "class": "menu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "UI elements"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-laptop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), "Components"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-puzzle-piece",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "ui-buttons.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Buttons")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-id-badge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "ui-badges.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Badges")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "ui-tabs.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Tabs")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-share-square-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "ui-social-buttons.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Social Buttons")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-id-card-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "ui-cards.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Cards")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-exclamation-triangle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "ui-alerts.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "Alerts")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-spinner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "ui-progressbar.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Progress Bars")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-fire",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "ui-modals.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Modals")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-book",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "ui-switches.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Switches")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "ui-grids.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "Grids")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-file-word-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "ui-typgraphy.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Typography")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), "Tables"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "tables-basic.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Basic Table")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "tables-data.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "Data Table")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), "Forms"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "forms-basic.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Basic Form")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "forms-advanced.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Advanced Form")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        "class": "menu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Icons"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-tasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), "Icons"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-fort-awesome",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "font-fontawesome.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Font Awesome")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon ti-themify-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "font-themify.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Themefy Icons")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "widgets.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon ti-email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), "Widgets ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-bar-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), "Charts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-line-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "charts-chartjs.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Chart JS")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-area-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "charts-flot.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Flot Chart")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-pie-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "charts-peity.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Peity Chart")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-area-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), "Maps"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-map-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "maps-gmap.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Google Maps")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-street-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "maps-vector.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Vector Maps")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        "class": "menu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Extras"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-glass",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), "Pages"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-sign-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "page-login.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Login")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-sign-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "page-register.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Register")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-paper-plane",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "pages-forget.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Forget Pass")))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "right-panel",
        "class": "right-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
        id: "header",
        "class": "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "header-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        id: "menuToggle",
        "class": "menutoggle pull-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa fa-tasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "header-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "search-trigger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "form-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        "class": "search-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        "class": "form-control mr-sm-2",
        type: "text",
        placeholder: "Search ...",
        "aria-label": "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "search-close",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown for-notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
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
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-bell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count bg-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, "5")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "You have 3 Notification"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-1",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, "Server #1 overloaded.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-4",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "Server #2 overloaded.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-5",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, "Server #3 overloaded.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown for-message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
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
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "ti-email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count bg-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "9")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, "You have 4 Mails"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-1",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/1.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, "Jonathan Smith"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, "Just now"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, "Hello, this is an example msg"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-4",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/2.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, "Jack Sanders"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, "5 minutes ago"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, "Lorem ipsum dolor sit amet, consectetur"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-5",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/3.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, "Cheryl Wheeler"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, "10 minutes ago"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, "Hello, this is an example msg"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-3",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/4.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, "Rachel Santos"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, "15 minutes ago"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, "Lorem ipsum dolor sit amet, consectetur"))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "user-area dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        "class": "user-avatar rounded-circle",
        src: "images/admin.jpg",
        alt: "User Avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "user-menu dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa- user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }), "My Profile"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa- user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }), "Notifications ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, "13")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa -cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }), "Settings"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-power -off",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }), "Logout"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "language-select dropdown",
        id: "language-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
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
          lineNumber: 209
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "flag-icon flag-icon-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "language",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "flag-icon flag-icon-fr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "flag-icon flag-icon-es",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "flag-icon flag-icon-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "flag-icon flag-icon-it",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "breadcrumbs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "page-header float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, "Dashboard")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "page-header float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ol", {
        "class": "breadcrumb text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, "Dashboard")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "content mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "alert  alert-success alert-dismissible fade show",
        role: "alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "badge badge-pill badge-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, "Success"), " You successfully read this important alert message.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        type: "button",
        "class": "close",
        "data-dismiss": "alert",
        "aria-label": "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }, "\xD7")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card text-white bg-flat-color-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, "Action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        "class": "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }, "10468")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, "Members online"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "chart-wrapper px-0",
        style: "height:70px;",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
        id: "widgetChart1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card text-white bg-flat-color-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, "Action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        "class": "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }, "10468")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, "Members online"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "chart-wrapper px-0",
        style: "height:70px;",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
        id: "widgetChart2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card text-white bg-flat-color-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, "Action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        }
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        "class": "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, "10468")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      }, "Members online")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "chart-wrapper px-0",
        style: "height:70px;",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
        id: "widgetChart3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card text-white bg-flat-color-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        "class": "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, "Action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        "class": "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }, "10468")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }, "Members online"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "chart-wrapper px-3",
        style: "height:70px;",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
        id: "widgetChart4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "social-box facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, "40"), " k"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }, "friends")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }, "450")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }, "feeds"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "social-box twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }, "30"), " k"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }, "friends")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, "450")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, "tweets"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "social-box linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, "40"), " +"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }, "contacts")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }, "250")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      }, "feeds"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "social-box google-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-google-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }, "94"), " k"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        }
      }, "followers")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        }
      }, "92")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      }, "circles"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-xl-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        "class": "card-title mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        }
      }, "Traffic"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "small text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        }
      }, "October 2017")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-sm-8 hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        type: "button",
        "class": "btn btn-primary float-right bg-flat-color-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-cloud-download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "btn-toolbar float-right",
        role: "toolbar",
        "aria-label": "Toolbar with button groups",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "btn-group mr-3",
        "data-toggle": "buttons",
        "aria-label": "First group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        "class": "btn btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "radio",
        name: "options",
        id: "option1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        }
      }), " Day"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        "class": "btn btn-outline-secondary active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "radio",
        name: "options",
        id: "option2",
        checked: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        }
      }), " Month"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        "class": "btn btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "radio",
        name: "options",
        id: "option3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        }
      }), " Year"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "chart-wrapper mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
        id: "trafficChart",
        style: "height:200px;",
        height: "200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        }
      }, "Visits"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        }
      }, "29.703 Users (40%)"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: "height: 5px;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress-bar bg-success",
        role: "progressbar",
        style: "width: 40%;",
        "aria-valuenow": "40",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        }
      }, "Unique"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        }
      }, "24.093 Users (20%)"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: "height: 5px;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress-bar bg-info",
        role: "progressbar",
        style: "width: 20%;",
        "aria-valuenow": "20",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        }
      }, "Pageviews"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        }
      }, "78.706 Views (60%)"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: "height: 5px;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress-bar bg-warning",
        role: "progressbar",
        style: "width: 60%;",
        "aria-valuenow": "60",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        }
      }, "New Users"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        }
      }, "22.123 Users (80%)"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: "height: 5px;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress-bar bg-danger",
        role: "progressbar",
        style: "width: 80%;",
        "aria-valuenow": "80",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        }
      }, "Bounce Rate"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        }
      }, "40.15%"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: "height: 5px;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "progress-bar",
        role: "progressbar",
        style: "width: 40%;",
        "aria-valuenow": "40",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        }
      }))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "twt-feed blue-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "corner-ribon black-ribon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "fa fa-twitter wtt-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        "class": "align-self-center rounded-circle mr-3",
        style: "width:85px; height:85px;",
        alt: "",
        src: "images/admin.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        "class": "text-white display-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        }
      }, "Jim Doe"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        }
      }, "Project Manager")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "weather-category twt-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        "class": "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        }
      }, "750"), "Tweets"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        }
      }, "865"), "Following"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        }
      }, "3645"), "Followers"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "twt-write col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
        placeholder: "Write your Tweet and Enter",
        rows: "1",
        "class": "form-control t-text-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("footer", {
        "class": "twt-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-camera",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "fa fa-map-marker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        }
      })), "New Castle, UK", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        "class": "pull-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        }
      }, "32")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-widget-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-icon dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "ti-money text-success border-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-content dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        }
      }, "Total Profit"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-digit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        }
      }, "1,012")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-widget-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-icon dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "ti-user text-primary border-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-content dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        }
      }, "New Customer"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-digit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        }
      }, "961")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-widget-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-icon dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        "class": "ti-layout-grid2 text-warning border-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-content dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612
        }
      }, "Active Projects"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "stat-digit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613
        }
      }, "770")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "col-xl-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623
        }
      }, "World")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "Vector-map-js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "vmap",
        "class": "vmap",
        style: "height: 265px;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626
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
                return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards', {
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
//# sourceMappingURL=5.aee5754f981095872a76.hot-update.js.map