webpackHotUpdate(5,{

/***/ "./components/LeftPanel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
        "class": "left-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        "class": "navbar navbar-expand-sm navbar-default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "navbar-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        "class": "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#main-menu",
        "aria-controls": "main-menu",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        "class": "navbar-brand",
        href: "./",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "borsetta-logo",
        src: "static/images/borsetta_logo.svg",
        alt: "Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        "class": "navbar-brand hidden",
        href: "./",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "borsetta-icon",
        src: "static/images/borsetta_icon.svg",
        alt: "Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "main-menu",
        "class": "main-menu collapse navbar-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "nav navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "index.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), "Dashboard ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        "class": "menu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "UI elements"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-laptop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), "Components"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-puzzle-piece",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-buttons.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Buttons")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-id-badge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-badges.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "Badges")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-tabs.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Tabs")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-share-square-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-social-buttons.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Social Buttons")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-id-card-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-cards.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "Cards")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-exclamation-triangle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-alerts.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Alerts")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-spinner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-progressbar.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Progress Bars")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-fire",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-modals.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "Modals")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-book",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-switches.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Switches")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-grids.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Grids")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-file-word-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-typgraphy.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Typography")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), "Tables"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tables-basic.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Basic Table")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tables-data.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "Data Table")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), "Forms"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "forms-basic.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Basic Form")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "forms-advanced.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Advanced Form")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        "class": "menu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Icons"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-tasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), "Icons"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-fort-awesome",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "font-fontawesome.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Font Awesome")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon ti-themify-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "font-themify.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Themefy Icons")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "widgets.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon ti-email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), "Widgets ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-bar-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), "Charts"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-line-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "charts-chartjs.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Chart JS")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-area-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "charts-flot.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Flot Chart")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-pie-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "charts-peity.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Peity Chart")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-area-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), "Maps"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-map-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "maps-gmap.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Google Maps")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-street-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "maps-vector.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Vector Maps")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        "class": "menu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Extras"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-glass",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), "Pages"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-sign-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "page-login.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Login")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-sign-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "page-register.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Register")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-paper-plane",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "pages-forget.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Forget Pass"))))))));
    }
  }]);

  return LeftPanel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (LeftPanel);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_LeftPanel__ = __webpack_require__("./components/LeftPanel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
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
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "669822533",
        css: "img.borsetta-logo.jsx-669822533{fill:#ffffff;stroke:#ffffff;width:100px;height:100px;}img.borsetta-icon.jsx-669822533{fill:#ffffff;stroke:#ffffff;width:65px;height:80px;margin-left:-8px;}.content.jsx-669822533{padding:16px 16px;}.post.jsx-669822533{margin-bottom:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNxQixBQUk0QixBQU9BLEFBT0ssQUFHQyxhQWhCSixBQU9BLEtBT2pCLENBR0EsU0FoQmMsQUFPRCxXQUNDLENBUEMsV0FRSSxFQVBuQixlQVFBIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jdy9Eb2N1bWVudHMvcHJvamVjdHMvQm9yc2V0dGEvYm9yc2V0dGEtZXhwZXJpZW5jZS1kZW1vLWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMZWZ0UGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9MZWZ0UGFuZWwnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL29tZ3ZhbXAtaGVhcnRoc3RvbmUtdjEucC5tYXNoYXBlLmNvbS9jYXJkcycse2hlYWRlcnM6IHtcIlgtTWFzaGFwZS1LZXlcIjogXCJMUmN5N0Q1QmFLbXNoUnRQa1FuYXllazQzYkcwcDFCVHRrYmpzblJZZEJDaWYxaUhFcFwifX0pO1xuICAgIHJldHVybiB7IGNhcmRzOiByZXNwb25zZS5kYXRhIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaW1nLmJvcnNldHRhLWxvZ28ge1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgZmlsbDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgc3Ryb2tlOiAjZmZmZmZmO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcuYm9yc2V0dGEtaWNvbiB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBmaWxsOiAjZmZmZmZmO1xuICAgICAgICAgICAgICBzdHJva2U6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuXG4gICAgPExlZnRQYW5lbCAvPlxuXG4gICAgPGRpdiBpZD1cInJpZ2h0LXBhbmVsXCIgY2xhc3M9XCJyaWdodC1wYW5lbFwiPlxuXG4gICAgICAgIFxuICAgICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCIgY2xhc3M9XCJoZWFkZXJcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1tZW51XCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJtZW51VG9nZ2xlXCIgY2xhc3M9XCJtZW51dG9nZ2xlIHB1bGwtbGVmdFwiPjxpIGNsYXNzPVwiZmEgZmEgZmEtdGFza3NcIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzZWFyY2gtdHJpZ2dlclwiPjxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbXItc20tMlwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggLi4uXCIgYXJpYS1sYWJlbD1cIlNlYXJjaFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlYXJjaC1jbG9zZVwiIHR5cGU9XCJzdWJtaXRcIj48aSBjbGFzcz1cImZhIGZhLWNsb3NlXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gZm9yLW5vdGlmaWNhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwibm90aWZpY2F0aW9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1iZWxsXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnQgYmctZGFuZ2VyXCI+NTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwibm90aWZpY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZWRcIj5Zb3UgaGF2ZSAzIE5vdGlmaWNhdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gbWVkaWEgYmctZmxhdC1jb2xvci0xXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VydmVyICMxIG92ZXJsb2FkZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gbWVkaWEgYmctZmxhdC1jb2xvci00XCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1pbmZvXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZXJ2ZXIgIzIgb3ZlcmxvYWRlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBtZWRpYSBiZy1mbGF0LWNvbG9yLTVcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXdhcm5pbmdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlcnZlciAjMyBvdmVybG9hZGVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biBmb3ItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwidGktZW1haWxcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudCBiZy1wcmltYXJ5XCI+OTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVkXCI+WW91IGhhdmUgNCBNYWlsczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gbWVkaWEgYmctZmxhdC1jb2xvci0xXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaG90byBtZWRpYS1sZWZ0XCI+PGltZyBhbHQ9XCJhdmF0YXJcIiBzcmM9XCJpbWFnZXMvYXZhdGFyLzEuanBnXCIvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZXNzYWdlIG1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZSBmbG9hdC1sZWZ0XCI+Sm9uYXRoYW4gU21pdGg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpbWUgZmxvYXQtcmlnaHRcIj5KdXN0IG5vdzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IZWxsbywgdGhpcyBpcyBhbiBleGFtcGxlIG1zZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gbWVkaWEgYmctZmxhdC1jb2xvci00XCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaG90byBtZWRpYS1sZWZ0XCI+PGltZyBhbHQ9XCJhdmF0YXJcIiBzcmM9XCJpbWFnZXMvYXZhdGFyLzIuanBnXCIvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZXNzYWdlIG1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZSBmbG9hdC1sZWZ0XCI+SmFjayBTYW5kZXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lIGZsb2F0LXJpZ2h0XCI+NSBtaW51dGVzIGFnbzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIG1lZGlhIGJnLWZsYXQtY29sb3ItNVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGhvdG8gbWVkaWEtbGVmdFwiPjxpbWcgYWx0PVwiYXZhdGFyXCIgc3JjPVwiaW1hZ2VzL2F2YXRhci8zLmpwZ1wiLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWVzc2FnZSBtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWUgZmxvYXQtbGVmdFwiPkNoZXJ5bCBXaGVlbGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lIGZsb2F0LXJpZ2h0XCI+MTAgbWludXRlcyBhZ288L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SGVsbG8sIHRoaXMgaXMgYW4gZXhhbXBsZSBtc2c8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIG1lZGlhIGJnLWZsYXQtY29sb3ItM1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGhvdG8gbWVkaWEtbGVmdFwiPjxpbWcgYWx0PVwiYXZhdGFyXCIgc3JjPVwiaW1hZ2VzL2F2YXRhci80LmpwZ1wiLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWVzc2FnZSBtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWUgZmxvYXQtbGVmdFwiPlJhY2hlbCBTYW50b3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpbWUgZmxvYXQtcmlnaHRcIj4xNSBtaW51dGVzIGFnbzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWFyZWEgZHJvcGRvd24gZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidXNlci1hdmF0YXIgcm91bmRlZC1jaXJjbGVcIiBzcmM9XCJpbWFnZXMvYWRtaW4uanBnXCIgYWx0PVwiVXNlciBBdmF0YXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLW1lbnUgZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLSB1c2VyXCI+PC9pPk15IFByb2ZpbGU8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYS0gdXNlclwiPjwvaT5Ob3RpZmljYXRpb25zIDxzcGFuIGNsYXNzPVwiY291bnRcIj4xMzwvc3Bhbj48L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYSAtY29nXCI+PC9pPlNldHRpbmdzPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtcG93ZXIgLW9mZlwiPjwvaT5Mb2dvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhbmd1YWdlLXNlbGVjdCBkcm9wZG93blwiIGlkPVwibGFuZ3VhZ2Utc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZVwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiICBpZD1cImxhbmd1YWdlXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhZy1pY29uIGZsYWctaWNvbi11c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwibGFuZ3VhZ2VcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGFnLWljb24gZmxhZy1pY29uLWZyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmxhZy1pY29uIGZsYWctaWNvbi1lc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZsYWctaWNvbiBmbGFnLWljb24tdXNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmbGFnLWljb24gZmxhZy1pY29uLWl0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJyZWFkY3J1bWJzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXIgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkRhc2hib2FyZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXIgZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPkRhc2hib2FyZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudCBtdC0zXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgIGFsZXJ0LXN1Y2Nlc3MgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93XCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utc3VjY2Vzc1wiPlN1Y2Nlc3M8L3NwYW4+IFlvdSBzdWNjZXNzZnVsbHkgcmVhZCB0aGlzIGltcG9ydGFudCBhbGVydCBtZXNzYWdlLlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLWxnLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLWZsYXQtY29sb3ItMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHBiLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biBmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYmctdHJhbnNwYXJlbnQgZHJvcGRvd24tdG9nZ2xlIHRoZW1lLXRvZ2dsZSB0ZXh0LWxpZ2h0XCIgdHlwZT1cImJ1dHRvblwiIGlkPVwiZHJvcGRvd25NZW51QnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFjdGlvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlNvbWV0aGluZyBlbHNlIGhlcmU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudFwiPjEwNDY4PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1saWdodFwiPk1lbWJlcnMgb25saW5lPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtd3JhcHBlciBweC0wXCIgaGVpZ2h0PVwiNzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIGlkPVwid2lkZ2V0Q2hhcnQxXCI+PC9jYW52YXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLWxnLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLWZsYXQtY29sb3ItMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHBiLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biBmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYmctdHJhbnNwYXJlbnQgZHJvcGRvd24tdG9nZ2xlIHRoZW1lLXRvZ2dsZSB0ZXh0LWxpZ2h0XCIgdHlwZT1cImJ1dHRvblwiIGlkPVwiZHJvcGRvd25NZW51QnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFjdGlvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlNvbWV0aGluZyBlbHNlIGhlcmU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudFwiPjEwNDY4PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1saWdodFwiPk1lbWJlcnMgb25saW5lPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtd3JhcHBlciBweC0wXCIgIGhlaWdodD1cIjcwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBpZD1cIndpZGdldENoYXJ0MlwiPjwvY2FudmFzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBjb2wtbGctM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHRleHQtd2hpdGUgYmctZmxhdC1jb2xvci0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcGItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIGZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBiZy10cmFuc3BhcmVudCBkcm9wZG93bi10b2dnbGUgdGhlbWUtdG9nZ2xlIHRleHQtbGlnaHRcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkcm9wZG93bk1lbnVCdXR0b25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51QnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QWN0aW9uPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UgaGVyZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50XCI+MTA0Njg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWxpZ2h0XCI+TWVtYmVycyBvbmxpbmU8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC13cmFwcGVyIHB4LTBcIiAgaGVpZ2h0PVwiNzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIGlkPVwid2lkZ2V0Q2hhcnQzXCI+PC9jYW52YXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICBcblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGNvbC1sZy0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgdGV4dC13aGl0ZSBiZy1mbGF0LWNvbG9yLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJnLXRyYW5zcGFyZW50IGRyb3Bkb3duLXRvZ2dsZSB0aGVtZS10b2dnbGUgdGV4dC1saWdodFwiIHR5cGU9XCJidXR0b25cIiBpZD1cImRyb3Bkb3duTWVudUJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnVCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5BY3Rpb248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRcIj4xMDQ2ODwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbGlnaHRcIj5NZW1iZXJzIG9ubGluZTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXdyYXBwZXIgcHgtM1wiICBoZWlnaHQ9XCI3MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJ3aWRnZXRDaGFydDRcIj48L2NhbnZhcz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29jaWFsLWJveCBmYWNlYm9va1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZhY2Vib29rXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48c3BhbiBjbGFzcz1cImNvdW50XCI+NDA8L3NwYW4+IGs8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5mcmllbmRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjxzcGFuIGNsYXNzPVwiY291bnRcIj40NTA8L3NwYW4+PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ZmVlZHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNvY2lhbC1ib3ggdHdpdHRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXR3aXR0ZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjxzcGFuIGNsYXNzPVwiY291bnRcIj4zMDwvc3Bhbj4gazwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmZyaWVuZHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PHNwYW4gY2xhc3M9XCJjb3VudFwiPjQ1MDwvc3Bhbj48L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj50d2VldHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNvY2lhbC1ib3ggbGlua2VkaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1saW5rZWRpblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PHNwYW4gY2xhc3M9XCJjb3VudFwiPjQwPC9zcGFuPiArPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Y29udGFjdHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PHNwYW4gY2xhc3M9XCJjb3VudFwiPjI1MDwvc3Bhbj48L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5mZWVkczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29jaWFsLWJveCBnb29nbGUtcGx1c1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWdvb2dsZS1wbHVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48c3BhbiBjbGFzcz1cImNvdW50XCI+OTQ8L3NwYW4+IGs8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5mb2xsb3dlcnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PHNwYW4gY2xhc3M9XCJjb3VudFwiPjkyPC9zcGFuPjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmNpcmNsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZSBtYi0wXCI+VHJhZmZpYzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbWFsbCB0ZXh0LW11dGVkXCI+T2N0b2JlciAyMDE3PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTggaGlkZGVuLXNtLWRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHQgYmctZmxhdC1jb2xvci0xXCI+PGkgY2xhc3M9XCJmYSBmYS1jbG91ZC1kb3dubG9hZFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi10b29sYmFyIGZsb2F0LXJpZ2h0XCIgcm9sZT1cInRvb2xiYXJcIiBhcmlhLWxhYmVsPVwiVG9vbGJhciB3aXRoIGJ1dHRvbiBncm91cHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItM1wiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiIGFyaWEtbGFiZWw9XCJGaXJzdCBncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJvcHRpb25zXCIgaWQ9XCJvcHRpb24xXCIvPiBEYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0aW9uc1wiIGlkPVwib3B0aW9uMlwiIGNoZWNrZWQ9XCJcIi8+IE1vbnRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0aW9uc1wiIGlkPVwib3B0aW9uM1wiLz4gWWVhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtd3JhcHBlciBtdC00XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJ0cmFmZmljQ2hhcnRcIiBzdHlsZT17e2hlaWdodDonMjAwcHgnfX0gaGVpZ2h0PVwiMjAwXCI+PC9jYW52YXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1tdXRlZFwiPlZpc2l0czwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjI5LjcwMyBVc2VycyAoNDAlKTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MgcHJvZ3Jlc3MteHMgbXQtMlwiIHN0eWxlPXt7aGVpZ2h0OiAnNXB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhciBiZy1zdWNjZXNzXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9e3t3aWR0aDogJzQwJSd9fSBhcmlhLXZhbHVlbm93PVwiNDBcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJoaWRkZW4tc20tZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1tdXRlZFwiPlVuaXF1ZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjI0LjA5MyBVc2VycyAoMjAlKTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MgcHJvZ3Jlc3MteHMgbXQtMlwiIHN0eWxlPXt7aGVpZ2h0OiAnNXB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhciBiZy1pbmZvXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9e3t3aWR0aDogJzIwJSd9fSBhcmlhLXZhbHVlbm93PVwiMjBcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+UGFnZXZpZXdzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+NzguNzA2IFZpZXdzICg2MCUpPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcyBwcm9ncmVzcy14cyBtdC0yXCIgc3R5bGU9e3toZWlnaHQ6ICc1cHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyIGJnLXdhcm5pbmdcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBzdHlsZT17e3dpZHRoOiAnNjAlJ319IGFyaWEtdmFsdWVub3c9XCI2MFwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1zbS1kb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TmV3IFVzZXJzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+MjIuMTIzIFVzZXJzICg4MCUpPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcyBwcm9ncmVzcy14cyBtdC0yXCIgc3R5bGU9e3toZWlnaHQ6ICc1cHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyIGJnLWRhbmdlclwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIHN0eWxlPXt7d2lkdGg6ICc4MCUnfX0gYXJpYS12YWx1ZW5vdz1cIjgwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLXNtLWRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtbXV0ZWRcIj5Cb3VuY2UgUmF0ZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjQwLjE1JTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MgcHJvZ3Jlc3MteHMgbXQtMlwiIHN0eWxlPXt7aGVpZ2h0OiAnNXB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIHN0eWxlPXt7d2lkdGg6ICc0MCUnfX0gYXJpYS12YWx1ZW5vdz1cIjQwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtMyBjb2wtbGctNlwiPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHd0LWZlZWQgYmx1ZS1iZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvcm5lci1yaWJvbiBibGFjay1yaWJvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHdpdHRlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZhIGZhLXR3aXR0ZXIgd3R0LW1hcmtcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImFsaWduLXNlbGYtY2VudGVyIHJvdW5kZWQtY2lyY2xlIG1yLTNcIiBzdHlsZT17e3dpZHRoOic4NXB4JywgaGVpZ2h0Oic4NXB4J319IGFsdD1cIlwiIHNyYz1cImltYWdlcy9hZG1pbi5qcGdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtd2hpdGUgZGlzcGxheS02XCI+SmltIERvZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1saWdodFwiPlByb2plY3QgTWFuYWdlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXItY2F0ZWdvcnkgdHd0LWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT43NTA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2VldHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pjg2NTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvbGxvd2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+MzY0NTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvbGxvd2Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInR3dC13cml0ZSBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgVHdlZXQgYW5kIEVudGVyXCIgcm93cz1cIjFcIiBjbGFzcz1cImZvcm0tY29udHJvbCB0LXRleHQtYXJlYVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwidHd0LWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLWNhbWVyYVwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtbWFwLW1hcmtlclwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICBOZXcgQ2FzdGxlLCBVS1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMzJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC0zIGNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtd2lkZ2V0LW9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWljb24gZGliXCI+PGkgY2xhc3M9XCJ0aS1tb25leSB0ZXh0LXN1Y2Nlc3MgYm9yZGVyLXN1Y2Nlc3NcIj48L2k+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtY29udGVudCBkaWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtdGV4dFwiPlRvdGFsIFByb2ZpdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1kaWdpdFwiPjEsMDEyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTMgY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC13aWRnZXQtb25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaWNvbiBkaWJcIj48aSBjbGFzcz1cInRpLXVzZXIgdGV4dC1wcmltYXJ5IGJvcmRlci1wcmltYXJ5XCI+PC9pPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWNvbnRlbnQgZGliXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LXRleHRcIj5OZXcgQ3VzdG9tZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtZGlnaXRcIj45NjE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTMgY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC13aWRnZXQtb25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaWNvbiBkaWJcIj48aSBjbGFzcz1cInRpLWxheW91dC1ncmlkMiB0ZXh0LXdhcm5pbmcgYm9yZGVyLXdhcm5pbmdcIj48L2k+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtY29udGVudCBkaWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtdGV4dFwiPkFjdGl2ZSBQcm9qZWN0czwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1kaWdpdFwiPjc3MDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Xb3JsZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVmVjdG9yLW1hcC1qc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInZtYXBcIiBjbGFzcz1cInZtYXBcIiBzdHlsZT17e2hlaWdodDogJzI2NXB4J319PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cblxuICAgICk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_LeftPanel__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "right-panel",
        "class": "right-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("header", {
        id: "header",
        "class": "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "header-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-sm-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        id: "menuToggle",
        "class": "menutoggle pull-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa fa-tasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "header-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        "class": "search-trigger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "form-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("form", {
        "class": "search-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        "class": "form-control mr-sm-2",
        type: "text",
        placeholder: "Search ...",
        "aria-label": "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-669822533"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        "class": "search-close",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-669822533"
      })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown for-notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        "class": "btn btn-secondary dropdown-toggle",
        type: "button",
        id: "notification",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-bell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-669822533"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count bg-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: "jsx-669822533"
      }, "5")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        "class": "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-669822533"
      }, "You have 3 Notification"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-1",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-669822533"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: "jsx-669822533"
      }, "Server #1 overloaded.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-4",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        className: "jsx-669822533"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        className: "jsx-669822533"
      }, "Server #2 overloaded.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-5",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-669822533"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-669822533"
      }, "Server #3 overloaded.")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown for-message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        "class": "btn btn-secondary dropdown-toggle",
        type: "button",
        id: "message",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "ti-email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-669822533"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count bg-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: "jsx-669822533"
      }, "9")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        "class": "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-669822533"
      }, "You have 4 Mails"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-1",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/1.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-669822533"
      }, "Jonathan Smith"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-669822533"
      }, "Just now"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: "jsx-669822533"
      }, "Hello, this is an example msg"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-4",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/2.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-669822533"
      }, "Jack Sanders"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: "jsx-669822533"
      }, "5 minutes ago"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-669822533"
      }, "Lorem ipsum dolor sit amet, consectetur"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-5",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/3.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: "jsx-669822533"
      }, "Cheryl Wheeler"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        className: "jsx-669822533"
      }, "10 minutes ago"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        className: "jsx-669822533"
      }, "Hello, this is an example msg"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item media bg-flat-color-3",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "photo media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        alt: "avatar",
        src: "images/avatar/4.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "message media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "name float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        className: "jsx-669822533"
      }, "Rachel Santos"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "time float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        className: "jsx-669822533"
      }, "15 minutes ago"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        className: "jsx-669822533"
      }, "Lorem ipsum dolor sit amet, consectetur"))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-sm-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "user-area dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        "class": "user-avatar rounded-circle",
        src: "images/admin.jpg",
        alt: "User Avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "user-menu dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa- user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        className: "jsx-669822533"
      }), "My Profile"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa- user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        className: "jsx-669822533"
      }), "Notifications ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        className: "jsx-669822533"
      }, "13")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa -cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: "jsx-669822533"
      }), "Settings"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-power -off",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: "jsx-669822533"
      }), "Logout"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "language-select dropdown",
        id: "language-select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-toggle",
        href: "#",
        "data-toggle": "dropdown",
        id: "language",
        "aria-haspopup": "true",
        "aria-expanded": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "flag-icon flag-icon-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "language",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "flag-icon flag-icon-fr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "flag-icon flag-icon-es",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "flag-icon flag-icon-us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "flag-icon flag-icon-it",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        className: "jsx-669822533"
      }))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "breadcrumbs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "page-header float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        className: "jsx-669822533"
      }, "Dashboard")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "page-header float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ol", {
        "class": "breadcrumb text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        "class": "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        className: "jsx-669822533"
      }, "Dashboard")))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "content mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "alert  alert-success alert-dismissible fade show",
        role: "alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "badge badge-pill badge-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        className: "jsx-669822533"
      }, "Success"), " You successfully read this important alert message.", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        type: "button",
        "class": "close",
        "data-dismiss": "alert",
        "aria-label": "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        className: "jsx-669822533"
      }, "\xD7")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card text-white bg-flat-color-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        "class": "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        className: "jsx-669822533"
      }, "Action"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        className: "jsx-669822533"
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        className: "jsx-669822533"
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h4", {
        "class": "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        className: "jsx-669822533"
      }, "10468")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        className: "jsx-669822533"
      }, "Members online"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "chart-wrapper px-0",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("canvas", {
        id: "widgetChart1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        className: "jsx-669822533"
      }))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card text-white bg-flat-color-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        "class": "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        className: "jsx-669822533"
      }, "Action"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        className: "jsx-669822533"
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        className: "jsx-669822533"
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h4", {
        "class": "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        className: "jsx-669822533"
      }, "10468")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        className: "jsx-669822533"
      }, "Members online"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "chart-wrapper px-0",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("canvas", {
        id: "widgetChart2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        className: "jsx-669822533"
      }))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card text-white bg-flat-color-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        "class": "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        className: "jsx-669822533"
      }, "Action"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        className: "jsx-669822533"
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        className: "jsx-669822533"
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h4", {
        "class": "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        className: "jsx-669822533"
      }, "10468")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        className: "jsx-669822533"
      }, "Members online")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "chart-wrapper px-0",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("canvas", {
        id: "widgetChart3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        className: "jsx-669822533"
      })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-sm-6 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card text-white bg-flat-color-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card-body pb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        "class": "btn bg-transparent dropdown-toggle theme-toggle text-light",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "dropdown-menu-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        className: "jsx-669822533"
      }, "Action"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        className: "jsx-669822533"
      }, "Another action"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        "class": "dropdown-item",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        className: "jsx-669822533"
      }, "Something else here")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h4", {
        "class": "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        className: "jsx-669822533"
      }, "10468")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        className: "jsx-669822533"
      }, "Members online"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "chart-wrapper px-3",
        height: "70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("canvas", {
        id: "widgetChart4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        className: "jsx-669822533"
      }))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "social-box facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        className: "jsx-669822533"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        className: "jsx-669822533"
      }, "40"), " k"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        className: "jsx-669822533"
      }, "friends")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        className: "jsx-669822533"
      }, "450")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        className: "jsx-669822533"
      }, "feeds"))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "social-box twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        className: "jsx-669822533"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        className: "jsx-669822533"
      }, "30"), " k"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        className: "jsx-669822533"
      }, "friends")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        className: "jsx-669822533"
      }, "450")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        className: "jsx-669822533"
      }, "tweets"))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "social-box linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        className: "jsx-669822533"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        className: "jsx-669822533"
      }, "40"), " +"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        className: "jsx-669822533"
      }, "contacts")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        className: "jsx-669822533"
      }, "250")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        className: "jsx-669822533"
      }, "feeds"))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "social-box google-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-google-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        className: "jsx-669822533"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        className: "jsx-669822533"
      }, "94"), " k"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        className: "jsx-669822533"
      }, "followers")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        className: "jsx-669822533"
      }, "92")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        className: "jsx-669822533"
      }, "circles"))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-xl-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h4", {
        "class": "card-title mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        className: "jsx-669822533"
      }, "Traffic"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "small text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        className: "jsx-669822533"
      }, "October 2017")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-sm-8 hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        type: "button",
        "class": "btn btn-primary float-right bg-flat-color-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-cloud-download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "btn-toolbar float-right",
        role: "toolbar",
        "aria-label": "Toolbar with button groups",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "btn-group mr-3",
        "data-toggle": "buttons",
        "aria-label": "First group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        "class": "btn btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "radio",
        name: "options",
        id: "option1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        className: "jsx-669822533"
      }), " Day"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        "class": "btn btn-outline-secondary active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "radio",
        name: "options",
        id: "option2",
        checked: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        className: "jsx-669822533"
      }), " Month"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
        "class": "btn btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
        type: "radio",
        name: "options",
        id: "option3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        className: "jsx-669822533"
      }), " Year"))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "chart-wrapper mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("canvas", {
        id: "trafficChart",
        style: {
          height: '200px'
        },
        height: "200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        className: "jsx-669822533"
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        className: "jsx-669822533"
      }, "Visits"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        className: "jsx-669822533"
      }, "29.703 Users (40%)"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
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
          lineNumber: 429
        },
        className: "jsx-669822533"
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        "class": "hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        className: "jsx-669822533"
      }, "Unique"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        },
        className: "jsx-669822533"
      }, "24.093 Users (20%)"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
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
          lineNumber: 436
        },
        className: "jsx-669822533"
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        className: "jsx-669822533"
      }, "Pageviews"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        className: "jsx-669822533"
      }, "78.706 Views (60%)"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
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
          lineNumber: 443
        },
        className: "jsx-669822533"
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        "class": "hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        className: "jsx-669822533"
      }, "New Users"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        className: "jsx-669822533"
      }, "22.123 Users (80%)"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
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
          lineNumber: 450
        },
        className: "jsx-669822533"
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        "class": "hidden-sm-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        className: "jsx-669822533"
      }, "Bounce Rate"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        className: "jsx-669822533"
      }, "40.15%"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "progress progress-xs mt-2",
        style: {
          height: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
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
          lineNumber: 457
        },
        className: "jsx-669822533"
      }))))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "twt-feed blue-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "corner-ribon black-ribon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "fa fa-twitter wtt-mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        className: "jsx-669822533"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        "class": "align-self-center rounded-circle mr-3",
        style: {
          width: '85px',
          height: '85px'
        },
        alt: "",
        src: "images/admin.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        "class": "text-white display-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        className: "jsx-669822533"
      }, "Jim Doe"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        "class": "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        className: "jsx-669822533"
      }, "Project Manager")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "weather-category twt-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        "class": "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        className: "jsx-669822533"
      }, "750"), "Tweets"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        className: "jsx-669822533"
      }, "865"), "Following"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        className: "jsx-669822533"
      }, "3645"), "Followers"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "twt-write col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("textarea", {
        placeholder: "Write your Tweet and Enter",
        rows: "1",
        "class": "form-control t-text-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("footer", {
        "class": "twt-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-camera",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "fa fa-map-marker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        className: "jsx-669822533"
      })), "New Castle, UK", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        "class": "pull-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        className: "jsx-669822533"
      }, "32")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-widget-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-icon dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "ti-money text-success border-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-content dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        },
        className: "jsx-669822533"
      }, "Total Profit"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-digit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        className: "jsx-669822533"
      }, "1,012")))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-widget-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-icon dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "ti-user text-primary border-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-content dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        className: "jsx-669822533"
      }, "New Customer"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-digit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        className: "jsx-669822533"
      }, "961")))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-xl-3 col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-widget-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-icon dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("i", {
        "class": "ti-layout-grid2 text-warning border-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        className: "jsx-669822533"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-content dib",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        className: "jsx-669822533"
      }, "Active Projects"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "stat-digit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        className: "jsx-669822533"
      }, "770")))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "col-xl-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        className: "jsx-669822533"
      }, "World")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        "class": "Vector-map-js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        className: "jsx-669822533"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "vmap",
        "class": "vmap",
        style: {
          height: '265px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        className: "jsx-669822533"
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
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

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
//# sourceMappingURL=5.a52f83115d850d29027b.hot-update.js.map