webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/motions.ts":
/*!**************************!*\
  !*** ./utils/motions.ts ***!
  \**************************/
/*! exports provided: desktopIconDragSettings, desktopIconMotionSettings, taskbarEntriesMotionSettings, windowMotionSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desktopIconDragSettings\", function() { return desktopIconDragSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desktopIconMotionSettings\", function() { return desktopIconMotionSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskbarEntriesMotionSettings\", function() { return taskbarEntriesMotionSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"windowMotionSettings\", function() { return windowMotionSettings; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar desktopIconDragSettings = {\n  dragElastic: 0.25,\n  dragTransition: {\n    bounceStiffness: 500,\n    bounceDamping: 15\n  },\n  dragMomentum: false\n};\nvar desktopIconMotionSettings = {\n  initial: {\n    opacity: 0,\n    y: -100\n  },\n  animate: {\n    opacity: 1,\n    y: 0\n  },\n  transition: {\n    y: {\n      type: 'spring'\n    }\n  }\n};\nvar taskbarEntriesMotionSettings = {\n  initial: {\n    opacity: 0,\n    x: -100\n  },\n  animate: {\n    opacity: 1,\n    x: 0\n  },\n  transition: {\n    x: {\n      type: 'spring'\n    }\n  },\n  exit: {\n    opacity: 0,\n    width: 0,\n    transition: {\n      duration: 0.3\n    },\n    x: -100\n  }\n};\nvar windowMotionSettings = function windowMotionSettings(_ref) {\n  var _ref$initialX = _ref.initialX,\n      initialX = _ref$initialX === void 0 ? 0 : _ref$initialX,\n      _ref$initialY = _ref.initialY,\n      initialY = _ref$initialY === void 0 ? 0 : _ref$initialY,\n      _ref$animation = _ref.animation,\n      animation = _ref$animation === void 0 ? 'start' : _ref$animation,\n      height = _ref.height,\n      width = _ref.width,\n      x = _ref.x,\n      y = _ref.y,\n      taskbarElement = _ref.taskbarElement,\n      launchElement = _ref.launchElement;\n  var widthOffset = -Math.floor(width / 2);\n  var heightOffset = -Math.floor(height / 2);\n\n  var _getTargetCenterPosit = Object(_utils_elements__WEBPACK_IMPORTED_MODULE_1__[\"getTargetCenterPosition\"])(taskbarElement),\n      _getTargetCenterPosit2 = _getTargetCenterPosit.x,\n      taskbarElementX = _getTargetCenterPosit2 === void 0 ? 0 : _getTargetCenterPosit2,\n      _getTargetCenterPosit3 = _getTargetCenterPosit.y,\n      taskbarElementY = _getTargetCenterPosit3 === void 0 ? 0 : _getTargetCenterPosit3;\n\n  var _getTargetCenterPosit4 = Object(_utils_elements__WEBPACK_IMPORTED_MODULE_1__[\"getTargetCenterPosition\"])(launchElement),\n      _getTargetCenterPosit5 = _getTargetCenterPosit4.x,\n      launchElementX = _getTargetCenterPosit5 === void 0 ? 0 : _getTargetCenterPosit5,\n      _getTargetCenterPosit6 = _getTargetCenterPosit4.y,\n      launchElementY = _getTargetCenterPosit6 === void 0 ? 0 : _getTargetCenterPosit6; // TODO: Only calc `animation`, not all of them\n\n\n  var animationVariants = {\n    start: {\n      scale: 1,\n      x: initialX,\n      y: initialY,\n      height: height,\n      width: width\n    },\n    maximized: {\n      // x: initialX === x ? 0 : -x,\n      // y: initialY === y ? 0 : -y,\n      height: window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_2__[\"TASKBAR_HEIGHT\"],\n      width: '100vw'\n    },\n    minimized: {\n      scale: 0,\n      x: widthOffset + taskbarElementX,\n      y: heightOffset + taskbarElementY\n    },\n    minmax: {\n      scale: 0,\n      x: -(window.innerWidth / 2) + taskbarElementX,\n      y: -(window.innerHeight / 2) + taskbarElementY\n    }\n  };\n  var initialExitTransform = {\n    scale: 0,\n    x: widthOffset + launchElementX,\n    y: heightOffset + launchElementY\n  };\n  console.log(x, y);\n  return {\n    initial: _objectSpread({}, initialExitTransform),\n    exit: _objectSpread({}, initialExitTransform),\n    animate: animationVariants[animation],\n    transition: {\n      duration: _utils_constants__WEBPACK_IMPORTED_MODULE_2__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"]\n    }\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbW90aW9ucy50cz84MTUwIl0sIm5hbWVzIjpbImRlc2t0b3BJY29uRHJhZ1NldHRpbmdzIiwiZHJhZ0VsYXN0aWMiLCJkcmFnVHJhbnNpdGlvbiIsImJvdW5jZVN0aWZmbmVzcyIsImJvdW5jZURhbXBpbmciLCJkcmFnTW9tZW50dW0iLCJkZXNrdG9wSWNvbk1vdGlvblNldHRpbmdzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwidGFza2JhckVudHJpZXNNb3Rpb25TZXR0aW5ncyIsIngiLCJleGl0Iiwid2lkdGgiLCJkdXJhdGlvbiIsIndpbmRvd01vdGlvblNldHRpbmdzIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImFuaW1hdGlvbiIsImhlaWdodCIsInRhc2tiYXJFbGVtZW50IiwibGF1bmNoRWxlbWVudCIsIndpZHRoT2Zmc2V0IiwiTWF0aCIsImZsb29yIiwiaGVpZ2h0T2Zmc2V0IiwiZ2V0VGFyZ2V0Q2VudGVyUG9zaXRpb24iLCJ0YXNrYmFyRWxlbWVudFgiLCJ0YXNrYmFyRWxlbWVudFkiLCJsYXVuY2hFbGVtZW50WCIsImxhdW5jaEVsZW1lbnRZIiwiYW5pbWF0aW9uVmFyaWFudHMiLCJzdGFydCIsInNjYWxlIiwibWF4aW1pemVkIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJUQVNLQkFSX0hFSUdIVCIsIm1pbmltaXplZCIsIm1pbm1heCIsImlubmVyV2lkdGgiLCJpbml0aWFsRXhpdFRyYW5zZm9ybSIsImNvbnNvbGUiLCJsb2ciLCJNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBS08sSUFBTUEsdUJBQXVCLEdBQUc7QUFDckNDLGFBQVcsRUFBRSxJQUR3QjtBQUVyQ0MsZ0JBQWMsRUFBRTtBQUFFQyxtQkFBZSxFQUFFLEdBQW5CO0FBQXdCQyxpQkFBYSxF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WSxHQUFHRztBQUhULEtBZFQ7QUFtQkZXLFVBQU0sRUFBRTtBQUNOTixXQUFLLEVBQUUsQ0FERDtBQUVOdEIsT0FBQyxFQUFFLEVBQUV3QixNQUFNLENBQUNLLFVBQVAsR0FBb0IsQ0FBdEIsSUFBMkJiLGVBRnhCO0FBR05yQixPQUFDLEVBQUUsRUFBRTZCLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixDQUF2QixJQUE0QlI7QUFIekI7QUFuQk4sR0FGSjtBQTJCQSxNQUFNYSxvQkFBeUMsR0FBRztBQUNoRFIsU0FBSyxFQUFFLENBRHlDO0FBRWhEdEIsS0FBQyxFQUFFVyxXQUFXLEdBQUdPLGNBRitCO0FBR2hEdkIsS0FBQyxFQUFFbUIsWUFBWSxHQUFHSztBQUg4QixHQUFsRDtBQUtBWSxTQUFPLENBQUNDLEdBQVIsQ0FBWWhDLENBQVosRUFBZUwsQ0FBZjtBQUVBLFNBQU87QUFDTEYsV0FBTyxvQkFDRnFDLG9CQURFLENBREY7QUFJTDdCLFFBQUksb0JBQ0M2QixvQkFERCxDQUpDO0FBT0xsQyxXQUFPLEVBQUV3QixpQkFBaUIsQ0FBQ2IsU0FBRCxDQVByQjtBQVFMVixjQUFVLEVBQUU7QUFDVk0sY0FBUSxFQUFFOEIsb0ZBQW1DQTtBQURuQztBQVJQLEdBQVA7QUFZRCxDQXBFTSIsImZpbGUiOiIuL3V0aWxzL21vdGlvbnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7XG4gIEFuaW1hdGlvblByb3BzLFxuICBUcmFuc2Zvcm1Qcm9wZXJ0aWVzXG59IGZyb20gJ2ZyYW1lci1tb3Rpb24vdHlwZXMvbW90aW9uL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgTW90aW9uUHJvcHMsIFRhcmdldEFuZFRyYW5zaXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB0eXBlIHsgV2luZG93TW90aW9uU2V0dGluZ3MgfSBmcm9tICdAL3R5cGVzL3V0aWxzL21vdGlvbic7XG5cbmltcG9ydCB7IGdldFRhcmdldENlbnRlclBvc2l0aW9uIH0gZnJvbSAnQC91dGlscy9lbGVtZW50cyc7XG5pbXBvcnQge1xuICBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyxcbiAgVEFTS0JBUl9IRUlHSFRcbn0gZnJvbSAnQC91dGlscy9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZGVza3RvcEljb25EcmFnU2V0dGluZ3MgPSB7XG4gIGRyYWdFbGFzdGljOiAwLjI1LFxuICBkcmFnVHJhbnNpdGlvbjogeyBib3VuY2VTdGlmZm5lc3M6IDUwMCwgYm91bmNlRGFtcGluZzogMTUgfSxcbiAgZHJhZ01vbWVudHVtOiBmYWxzZVxufTtcblxuZXhwb3J0IGNvbnN0IGRlc2t0b3BJY29uTW90aW9uU2V0dGluZ3M6IE1vdGlvblByb3BzID0ge1xuICBpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHk6IC0xMDAgfSxcbiAgYW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXG4gIHRyYW5zaXRpb246IHsgeTogeyB0eXBlOiAnc3ByaW5nJyB9IH1cbn07XG5cbmV4cG9ydCBjb25zdCB0YXNrYmFyRW50cmllc01vdGlvblNldHRpbmdzOiBNb3Rpb25Qcm9wcyA9IHtcbiAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCB4OiAtMTAwIH0sXG4gIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeDogMCB9LFxuICB0cmFuc2l0aW9uOiB7IHg6IHsgdHlwZTogJ3NwcmluZycgfSB9LFxuICBleGl0OiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB3aWR0aDogMCxcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjMgfSxcbiAgICB4OiAtMTAwXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB3aW5kb3dNb3Rpb25TZXR0aW5ncyA9ICh7XG4gIGluaXRpYWxYID0gMCxcbiAgaW5pdGlhbFkgPSAwLFxuICBhbmltYXRpb24gPSAnc3RhcnQnLFxuICBoZWlnaHQsXG4gIHdpZHRoLFxuICB4LFxuICB5LFxuICB0YXNrYmFyRWxlbWVudCxcbiAgbGF1bmNoRWxlbWVudFxufTogV2luZG93TW90aW9uU2V0dGluZ3MpOiBNb3Rpb25Qcm9wcyA9PiB7XG4gIGNvbnN0IHdpZHRoT2Zmc2V0ID0gLU1hdGguZmxvb3Iod2lkdGggLyAyKTtcbiAgY29uc3QgaGVpZ2h0T2Zmc2V0ID0gLU1hdGguZmxvb3IoaGVpZ2h0IC8gMik7XG4gIGNvbnN0IHtcbiAgICB4OiB0YXNrYmFyRWxlbWVudFggPSAwLFxuICAgIHk6IHRhc2tiYXJFbGVtZW50WSA9IDBcbiAgfSA9IGdldFRhcmdldENlbnRlclBvc2l0aW9uKHRhc2tiYXJFbGVtZW50KTtcbiAgY29uc3Qge1xuICAgIHg6IGxhdW5jaEVsZW1lbnRYID0gMCxcbiAgICB5OiBsYXVuY2hFbGVtZW50WSA9IDBcbiAgfSA9IGdldFRhcmdldENlbnRlclBvc2l0aW9uKGxhdW5jaEVsZW1lbnQpO1xuICAvLyBUT0RPOiBPbmx5IGNhbGMgYGFuaW1hdGlvbmAsIG5vdCBhbGwgb2YgdGhlbVxuICBjb25zdCBhbmltYXRpb25WYXJpYW50czoge1xuICAgIFtrZXk6IHN0cmluZ106IEFuaW1hdGlvblByb3BzICYgVGFyZ2V0QW5kVHJhbnNpdGlvbjtcbiAgfSA9IHtcbiAgICBzdGFydDoge1xuICAgICAgc2NhbGU6IDEsXG4gICAgICB4OiBpbml0aWFsWCxcbiAgICAgIHk6IGluaXRpYWxZLFxuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGhcbiAgICB9LFxuICAgIG1heGltaXplZDoge1xuICAgICAgLy8geDogaW5pdGlhbFggPT09IHggPyAwIDogLXgsXG4gICAgICAvLyB5OiBpbml0aWFsWSA9PT0geSA/IDAgOiAteSxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gVEFTS0JBUl9IRUlHSFQsXG4gICAgICB3aWR0aDogJzEwMHZ3J1xuICAgIH0sXG4gICAgbWluaW1pemVkOiB7XG4gICAgICBzY2FsZTogMCxcbiAgICAgIHg6IHdpZHRoT2Zmc2V0ICsgdGFza2JhckVsZW1lbnRYLFxuICAgICAgeTogaGVpZ2h0T2Zmc2V0ICsgdGFza2JhckVsZW1lbnRZXG4gICAgfSxcbiAgICBtaW5tYXg6IHtcbiAgICAgIHNjYWxlOiAwLFxuICAgICAgeDogLSh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpICsgdGFza2JhckVsZW1lbnRYLFxuICAgICAgeTogLSh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSArIHRhc2tiYXJFbGVtZW50WVxuICAgIH1cbiAgfTtcbiAgY29uc3QgaW5pdGlhbEV4aXRUcmFuc2Zvcm06IFRyYW5zZm9ybVByb3BlcnRpZXMgPSB7XG4gICAgc2NhbGU6IDAsXG4gICAgeDogd2lkdGhPZmZzZXQgKyBsYXVuY2hFbGVtZW50WCxcbiAgICB5OiBoZWlnaHRPZmZzZXQgKyBsYXVuY2hFbGVtZW50WVxuICB9O1xuICBjb25zb2xlLmxvZyh4LCB5KVxuXG4gIHJldHVybiB7XG4gICAgaW5pdGlhbDoge1xuICAgICAgLi4uaW5pdGlhbEV4aXRUcmFuc2Zvcm1cbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgIC4uLmluaXRpYWxFeGl0VHJhbnNmb3JtXG4gICAgfSxcbiAgICBhbmltYXRlOiBhbmltYXRpb25WYXJpYW50c1thbmltYXRpb25dLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EU1xuICAgIH1cbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/motions.ts\n");

/***/ })

})