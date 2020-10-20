webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/StartMenu.tsx":
/*!*************************************************!*\
  !*** ./components/System/Taskbar/StartMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/Taskbar/StartMenu.module.scss */ \"./styles/System/Taskbar/StartMenu.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/FileManager/FileManager */ \"./components/System/FileManager/FileManager.tsx\");\n/* harmony import */ var _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/System/FileManager/MenuView */ \"./components/System/FileManager/MenuView.tsx\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/StartMenu.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n // TODO\n// - On click the button bg color gets lighter\n// - Stays lighter until menu goes away\n// - hover on start menu has a circle gradient from cursor for 15-20px\n// - hover lights up borders of buttons and bg of items\n// - Highlight color for icon, text color and left border (4px) for buttons\n// - 1px border on right side of button menu\n\nvar StartMenu = function StartMenu() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showMenu = _useState[0],\n      setShowMenu = _useState[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, showMenu && __jsx(\"div\", {\n    className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.outsideMenu,\n    onClick: function onClick() {\n      return setShowMenu(false);\n    },\n    onFocus: function onFocus() {\n      console.log('hg');\n    },\n    tabIndex: 0,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }), __jsx(\"nav\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, showMenu && __jsx(\"nav\", {\n    className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, __jsx(\"ol\", {\n    className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.buttons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faBars\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  })), __jsx(\"li\", {\n    className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.buttonSelected,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 15\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faList\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }))), __jsx(_components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: \"/desktop\",\n    render: _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    onChange: function onChange(cwd) {\n      return !cwd && setShowMenu(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  })), __jsx(\"button\", {\n    className: \"\".concat(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.start, \" \").concat(showMenu && _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuOpen),\n    type: \"button\",\n    title: \"Start\",\n    onClick: function onClick() {\n      return setShowMenu(!showMenu);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faWindows\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(StartMenu, \"2FjIcsdimgVhm2IsUWodA2ftTZU=\");\n\n_c = StartMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"StartMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUudHN4PzQ0MDAiXSwibmFtZXMiOlsiU3RhcnRNZW51IiwidXNlU3RhdGUiLCJzaG93TWVudSIsInNldFNob3dNZW51Iiwic3R5bGVzIiwib3V0c2lkZU1lbnUiLCJjb25zb2xlIiwibG9nIiwibWVudSIsImJ1dHRvbnMiLCJmYUJhcnMiLCJidXR0b25TZWxlY3RlZCIsImZhTGlzdCIsIk1lbnVWaWV3IiwiY3dkIiwic3RhcnQiLCJtZW51T3BlbiIsImZhV2luZG93cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLEdBQU07QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxLQUFELENBRFI7QUFBQSxNQUN6QkMsUUFEeUI7QUFBQSxNQUNmQyxXQURlOztBQUdoQyxTQUNFLG1FQUNHRCxRQUFRLElBQ1A7QUFDRSxhQUFTLEVBQUVFLG1GQUFNLENBQUNDLFdBRHBCO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTUYsV0FBVyxDQUFDLEtBQUQsQ0FBakI7QUFBQSxLQUZYO0FBR0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDRCxLQUxIO0FBTUUsWUFBUSxFQUFFLENBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxRQUFRLElBQ1A7QUFBSyxhQUFTLEVBQUVFLG1GQUFNLENBQUNJLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUosbUZBQU0sQ0FBQ0ssT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRUMsd0VBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSSxhQUFTLEVBQUVOLG1GQUFNLENBQUNPLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRUMsd0VBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBREYsRUFTRSxNQUFDLGtGQUFEO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxVQUFNLEVBQUVDLCtFQUZWO0FBR0UsWUFBUSxFQUFFLGtCQUFDQyxHQUFEO0FBQUEsYUFBUyxDQUFDQSxHQUFELElBQVFYLFdBQVcsQ0FBQyxLQUFELENBQTVCO0FBQUEsS0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FGSixFQWtCRTtBQUNFLGFBQVMsWUFBS0MsbUZBQU0sQ0FBQ1csS0FBWixjQUFxQmIsUUFBUSxJQUFJRSxtRkFBTSxDQUFDWSxRQUF4QyxDQURYO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxTQUFLLEVBQUMsT0FIUjtBQUlFLFdBQU8sRUFBRTtBQUFBLGFBQU1iLFdBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQWpCO0FBQUEsS0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVlLDRFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FsQkYsQ0FYRixDQURGO0FBeUNELENBNUNEOztHQUFNakIsUzs7S0FBQUEsUztBQThDU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCBGaWxlTWFuYWdlciBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL0ZpbGVNYW5hZ2VyJztcbmltcG9ydCBNZW51VmlldyBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL01lbnVWaWV3JztcbmltcG9ydCB7IGZhQmFycywgZmFMaXN0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IGZhV2luZG93cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFRPRE9cbi8vIC0gT24gY2xpY2sgdGhlIGJ1dHRvbiBiZyBjb2xvciBnZXRzIGxpZ2h0ZXJcbi8vIC0gU3RheXMgbGlnaHRlciB1bnRpbCBtZW51IGdvZXMgYXdheVxuLy8gLSBob3ZlciBvbiBzdGFydCBtZW51IGhhcyBhIGNpcmNsZSBncmFkaWVudCBmcm9tIGN1cnNvciBmb3IgMTUtMjBweFxuLy8gLSBob3ZlciBsaWdodHMgdXAgYm9yZGVycyBvZiBidXR0b25zIGFuZCBiZyBvZiBpdGVtc1xuLy8gLSBIaWdobGlnaHQgY29sb3IgZm9yIGljb24sIHRleHQgY29sb3IgYW5kIGxlZnQgYm9yZGVyICg0cHgpIGZvciBidXR0b25zXG4vLyAtIDFweCBib3JkZXIgb24gcmlnaHQgc2lkZSBvZiBidXR0b24gbWVudVxuXG5jb25zdCBTdGFydE1lbnU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2hvd01lbnUgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMub3V0c2lkZU1lbnV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01lbnUoZmFsc2UpfVxuICAgICAgICAgIG9uRm9jdXM9eygpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZycpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8bmF2PlxuICAgICAgICB7c2hvd01lbnUgJiYgKFxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XG4gICAgICAgICAgICA8b2wgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblNlbGVjdGVkfT5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlzdH0gLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICA8RmlsZU1hbmFnZXJcbiAgICAgICAgICAgICAgcGF0aD1cIi9kZXNrdG9wXCJcbiAgICAgICAgICAgICAgcmVuZGVyPXtNZW51Vmlld31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjd2QpID0+ICFjd2QgJiYgc2V0U2hvd01lbnUoZmFsc2UpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnN0YXJ0fSAke3Nob3dNZW51ICYmIHN0eWxlcy5tZW51T3Blbn1gfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRpdGxlPVwiU3RhcnRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNZW51KCFzaG93TWVudSl9XG4gICAgICAgID5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhV2luZG93c30gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0TWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/Taskbar/StartMenu.tsx\n");

/***/ })

})