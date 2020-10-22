webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/session.ts":
/*!**************************!*\
  !*** ./utils/session.ts ***!
  \**************************/
/*! exports provided: foreground, getState, saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foreground\", function() { return foreground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getState\", function() { return getState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveState\", function() { return saveState; });\n/* harmony import */ var _utils_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/process */ \"./utils/process.ts\");\n\nvar foreground = function foreground(updateSession) {\n  return function (id) {\n    return updateSession({\n      foregroundId: id\n    });\n  };\n};\nvar getState = function getState(session) {\n  return function (_ref) {\n    var id = _ref.id,\n        _ref$name = _ref.name,\n        name = _ref$name === void 0 ? '' : _ref$name;\n    return session.states[id || Object(_utils_process__WEBPACK_IMPORTED_MODULE_0__[\"getProcessId\"])(name)] || {};\n  };\n};\nvar saveState = function saveState(session, updateSession) {\n  return function (_ref2) {\n    var id = _ref2.id,\n        _ref2$height = _ref2.height,\n        height = _ref2$height === void 0 ? 0 : _ref2$height,\n        _ref2$width = _ref2.width,\n        width = _ref2$width === void 0 ? 0 : _ref2$width,\n        _ref2$x = _ref2.x,\n        x = _ref2$x === void 0 ? 0 : _ref2$x,\n        _ref2$y = _ref2.y,\n        y = _ref2$y === void 0 ? 0 : _ref2$y;\n\n    var _ref3 = session.states[id] || {},\n        _ref3$x = _ref3.x,\n        previousX = _ref3$x === void 0 ? 0 : _ref3$x,\n        _ref3$y = _ref3.y,\n        previousY = _ref3$y === void 0 ? 0 : _ref3$y;\n\n    updateSession({\n      state: {\n        id: id,\n        height: height,\n        width: width,\n        x: previousX === x ? x : previousX + x,\n        y: previousY === y ? y : previousY + y\n      }\n    });\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvc2Vzc2lvbi50cz83ZTRkIl0sIm5hbWVzIjpbImZvcmVncm91bmQiLCJ1cGRhdGVTZXNzaW9uIiwiaWQiLCJmb3JlZ3JvdW5kSWQiLCJnZXRTdGF0ZSIsInNlc3Npb24iLCJuYW1lIiwic3RhdGVzIiwiZ2V0UHJvY2Vzc0lkIiwic2F2ZVN0YXRlIiwiaGVpZ2h0Iiwid2lkdGgiLCJ4IiwieSIsInByZXZpb3VzWCIsInByZXZpb3VzWSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiQUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxhQUFEO0FBQUEsU0FBNEMsVUFDcEVDLEVBRG9FO0FBQUEsV0FFM0RELGFBQWEsQ0FBQztBQUFFRSxrQkFBWSxFQUFFRDtBQUFoQixLQUFELENBRjhDO0FBQUEsR0FBNUM7QUFBQSxDQUFuQjtBQUlBLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLE9BQUQ7QUFBQSxTQUEyQjtBQUFBLFFBQ2pESCxFQURpRCxRQUNqREEsRUFEaUQ7QUFBQSx5QkFFakRJLElBRmlEO0FBQUEsUUFFakRBLElBRmlELDBCQUUxQyxFQUYwQztBQUFBLFdBTXhCRCxPQUFPLENBQUNFLE1BQVIsQ0FBZUwsRUFBRSxJQUFJTSxtRUFBWSxDQUFDRixJQUFELENBQWpDLEtBQTRDLEVBTnBCO0FBQUEsR0FBM0I7QUFBQSxDQUFqQjtBQVFBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQ3ZCSixPQUR1QixFQUV2QkosYUFGdUI7QUFBQSxTQUdwQixpQkFNNEI7QUFBQSxRQUwvQkMsRUFLK0IsU0FML0JBLEVBSytCO0FBQUEsNkJBSi9CUSxNQUkrQjtBQUFBLFFBSi9CQSxNQUkrQiw2QkFKdEIsQ0FJc0I7QUFBQSw0QkFIL0JDLEtBRytCO0FBQUEsUUFIL0JBLEtBRytCLDRCQUh2QixDQUd1QjtBQUFBLHdCQUYvQkMsQ0FFK0I7QUFBQSxRQUYvQkEsQ0FFK0Isd0JBRjNCLENBRTJCO0FBQUEsd0JBRC9CQyxDQUMrQjtBQUFBLFFBRC9CQSxDQUMrQix3QkFEM0IsQ0FDMkI7O0FBQUEsZ0JBQ2dCUixPQUFPLENBQUNFLE1BQVIsQ0FBZUwsRUFBZixLQUFzQixFQUR0QztBQUFBLHdCQUN2QlUsQ0FEdUI7QUFBQSxRQUNwQkUsU0FEb0Isd0JBQ1IsQ0FEUTtBQUFBLHdCQUNMRCxDQURLO0FBQUEsUUFDRkUsU0FERSx3QkFDVSxDQURWOztBQUcvQmQsaUJBQWEsQ0FBQztBQUNaZSxXQUFLLEVBQUU7QUFDTGQsVUFBRSxFQUFGQSxFQURLO0FBRUxRLGNBQU0sRUFBTkEsTUFGSztBQUdMQyxhQUFLLEVBQUxBLEtBSEs7QUFJTEMsU0FBQyxFQUFFRSxTQUFTLEtBQUtGLENBQWQsR0FBa0JBLENBQWxCLEdBQXNCRSxTQUFTLEdBQUdGLENBSmhDO0FBS0xDLFNBQUMsRUFBRUUsU0FBUyxLQUFLRixDQUFkLEdBQWtCQSxDQUFsQixHQUFzQkUsU0FBUyxHQUFHRjtBQUxoQztBQURLLEtBQUQsQ0FBYjtBQVNELEdBckJ3QjtBQUFBLENBQWxCIiwiZmlsZSI6Ii4vdXRpbHMvc2Vzc2lvbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRGlzcGF0Y2ggfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7XG4gIFNlc3Npb25BY3Rpb24sXG4gIFNlc3Npb25Qcm9jZXNzU3RhdGUsXG4gIFNlc3Npb25TdGF0ZVxufSBmcm9tICdAL3R5cGVzL2NvbnRleHRzL1Nlc3Npb25NYW5hZ2VyJztcblxuaW1wb3J0IHsgZ2V0UHJvY2Vzc0lkIH0gZnJvbSAnQC91dGlscy9wcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IGZvcmVncm91bmQgPSAodXBkYXRlU2Vzc2lvbjogRGlzcGF0Y2g8U2Vzc2lvbkFjdGlvbj4pID0+IChcbiAgaWQ6IHN0cmluZ1xuKTogdm9pZCA9PiB1cGRhdGVTZXNzaW9uKHsgZm9yZWdyb3VuZElkOiBpZCB9KTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRlID0gKHNlc3Npb246IFNlc3Npb25TdGF0ZSkgPT4gKHtcbiAgaWQsXG4gIG5hbWUgPSAnJ1xufToge1xuICBpZD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbn0pOiBTZXNzaW9uUHJvY2Vzc1N0YXRlID0+IHNlc3Npb24uc3RhdGVzW2lkIHx8IGdldFByb2Nlc3NJZChuYW1lKV0gfHwge307XG5cbmV4cG9ydCBjb25zdCBzYXZlU3RhdGUgPSAoXG4gIHNlc3Npb246IFNlc3Npb25TdGF0ZSxcbiAgdXBkYXRlU2Vzc2lvbjogRGlzcGF0Y2g8U2Vzc2lvbkFjdGlvbj5cbikgPT4gKHtcbiAgaWQsXG4gIGhlaWdodCA9IDAsXG4gIHdpZHRoID0gMCxcbiAgeCA9IDAsXG4gIHkgPSAwXG59OiBTZXNzaW9uUHJvY2Vzc1N0YXRlKTogdm9pZCA9PiB7XG4gIGNvbnN0IHsgeDogcHJldmlvdXNYID0gMCwgeTogcHJldmlvdXNZID0gMCB9ID0gc2Vzc2lvbi5zdGF0ZXNbaWRdIHx8IHt9O1xuXG4gIHVwZGF0ZVNlc3Npb24oe1xuICAgIHN0YXRlOiB7XG4gICAgICBpZCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgICAgeDogcHJldmlvdXNYID09PSB4ID8geCA6IHByZXZpb3VzWCArIHgsXG4gICAgICB5OiBwcmV2aW91c1kgPT09IHkgPyB5IDogcHJldmlvdXNZICsgeVxuICAgIH1cbiAgfSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/session.ts\n");

/***/ })

})