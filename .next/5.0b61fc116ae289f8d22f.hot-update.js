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
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "user-avatar rounded-circle",
        src: "https://picsum.photos/200/300/?random",
        alt: "User Avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "user-menu dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa- user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), "My Profile"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa- user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), "Notifications ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "13")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa -cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), "Settings"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-power -off",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), "Logout"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Username"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), "Lucent Diamonds"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fas fa-tachometer-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), "Dashboard ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fas fa-tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), "MarketPlace")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), "Tables"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tables-basic.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Basic Table")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tables-data.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Data Table")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), "Forms"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "forms-basic.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Basic Form")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-th",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "forms-advanced.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Advanced Form")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "menu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Icons"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-tasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), "Icons"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "sub-menu children dropdown-menu",
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
        className: "menu-icon fa fa-fort-awesome",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "font-fontawesome.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Font Awesome")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon ti-themify-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "font-themify.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Themefy Icons")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "widgets.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon ti-email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), "Widgets ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-bar-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), "Charts"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "sub-menu children dropdown-menu",
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
        className: "menu-icon fa fa-line-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "charts-chartjs.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Chart JS")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-area-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "charts-flot.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Flot Chart")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-pie-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "charts-peity.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Peity Chart")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-area-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), "Maps"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-map-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "maps-gmap.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Google Maps")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-street-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "maps-vector.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Vector Maps")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "menu-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Extras"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "menu-item-has-children dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-glass",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), "Pages"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "sub-menu children dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-sign-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "page-login.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Login")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-sign-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "page-register.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "Register")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "menu-icon fa fa-paper-plane",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "pages-forget.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "Forget Pass"))))))));
    }
  }]);

  return LeftPanel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (LeftPanel);

/***/ })

})
//# sourceMappingURL=5.0b61fc116ae289f8d22f.hot-update.js.map