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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, "\n                  img.borsetta-logo {\n                    \n                    fill: #ffffff;\n                    stroke: #ffffff;\n                    width: 100px;\n                    height: 100px;\n                  }\n                  img.borsetta-icon {\n                    \n                    fill: #ffffff;\n                    stroke: #ffffff;\n                    width: 65px;\n                    height: 80px;\n                    margin-left: -8px;\n                  }\n                  .content {\n                    padding: 16px 16px;\n                  }\n                  .post {\n                    margin-bottom: 16px;\n                  }\n              "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", {
        id: "left-panel",
        "class": "left-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        "class": "navbar navbar-expand-sm navbar-default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "navbar-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
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
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        "class": "navbar-brand",
        href: "./",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "borsetta-logo",
        src: "static/images/borsetta_logo.svg",
        alt: "Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        "class": "navbar-brand hidden",
        href: "./",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "borsetta-icon",
        src: "static/images/borsetta_icon.svg",
        alt: "Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "main-menu",
        "class": "main-menu collapse navbar-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "nav navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "index.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), "Dashboard ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        "class": "menu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "UI elements"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
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
        "class": "menu-icon fa fa-laptop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), "Components"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
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
        "class": "fa fa-puzzle-piece",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-buttons.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Buttons")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-id-badge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-badges.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Badges")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-tabs.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "Tabs")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-share-square-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-social-buttons.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Social Buttons")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-id-card-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-cards.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Cards")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-exclamation-triangle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-alerts.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Alerts")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-spinner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-progressbar.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Progress Bars")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-fire",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-modals.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Modals")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-book",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-switches.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Switches")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-grids.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Grids")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-file-word-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "ui-typgraphy.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Typography")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), "Tables"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tables-basic.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Basic Table")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "fa fa-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tables-data.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Data Table")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), "Forms"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "forms-basic.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Basic Form")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "forms-advanced.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Advanced Form")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        "class": "menu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Icons"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-tasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), "Icons"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-fort-awesome",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "font-fontawesome.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Font Awesome")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon ti-themify-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "font-themify.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Themefy Icons")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "widgets.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon ti-email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), "Widgets ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-bar-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), "Charts"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-line-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "charts-chartjs.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Chart JS")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-area-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "charts-flot.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Flot Chart")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-pie-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "charts-peity.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Peity Chart")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-area-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), "Maps"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-map-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "maps-gmap.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "Google Maps")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-street-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "maps-vector.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Vector Maps")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        "class": "menu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "Extras"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        "class": "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        "class": "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-glass",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), "Pages"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        "class": "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-sign-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "page-login.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "Login")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-sign-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "page-register.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, "Register")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        "class": "menu-icon fa fa-paper-plane",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "pages-forget.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "Forget Pass"))))))));
    }
  }]);

  return LeftPanel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (LeftPanel);

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
false,

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
false,

/***/ "./node_modules/babel-runtime/core-js/map.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
false,

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
false,

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
false,

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
false,

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
false,

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
false,

/***/ "./node_modules/core-js/library/fn/map.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.map.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false

})
//# sourceMappingURL=5.7cf3e6e5bb38667472b8.hot-update.js.map