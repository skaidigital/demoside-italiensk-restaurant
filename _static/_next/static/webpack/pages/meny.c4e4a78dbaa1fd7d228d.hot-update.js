self["webpackHotUpdate_N_E"]("pages/meny",{

/***/ "./components/Sider/1_Meny/4_MenyDessert.js":
/*!**************************************************!*\
  !*** ./components/Sider/1_Meny/4_MenyDessert.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Data_retter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/retter */ "./components/Data/retter.js");
/* harmony import */ var _Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Små/BaseElementer */ "./components/Små/BaseElementer.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\GitHub\\skaidigital\\demoside-italiensk-restaurant\\components\\Sider\\1_Meny\\4_MenyDessert.js",
    _this = undefined;



var dessertene = _Data_retter__WEBPACK_IMPORTED_MODULE_1__.Dessert.map(function (_ref, id) {
  var tittel = _ref.tittel,
      beskrivelse = _ref.beskrivelse,
      pris = _ref.pris;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
    c: "col-span-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-row justify-between mb-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "text-h5 text-black font-semibold",
        children: tittel
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-h5 text-black font-semibold",
        children: pris
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: beskrivelse
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, _this);
});

var MenyDessert = function MenyDessert() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.SectionContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.Layout, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-center mb-56 border-b-2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-black mb-8",
          children: "DESSERT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        children: dessertene
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_c = MenyDessert;
/* harmony default export */ __webpack_exports__["default"] = (MenyDessert);

var _c;

$RefreshReg$(_c, "MenyDessert");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlci8xX01lbnkvNF9NZW55RGVzc2VydC5qcyJdLCJuYW1lcyI6WyJkZXNzZXJ0ZW5lIiwiRGVzc2VydCIsImlkIiwidGl0dGVsIiwiYmVza3JpdmVsc2UiLCJwcmlzIiwiTWVueURlc3NlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BLElBQU1BLFVBQVUsR0FBR0MscURBQUEsQ0FBWSxnQkFBZ0NDLEVBQWhDO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsTUFBV0MsV0FBWCxRQUFXQSxXQUFYO0FBQUEsTUFBd0JDLElBQXhCLFFBQXdCQSxJQUF4QjtBQUFBLHNCQUM3Qiw4REFBQyx1REFBRDtBQUFVLEtBQUMsRUFBQyxZQUFaO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsb0NBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsa0NBQWQ7QUFBQSxrQkFBa0RGO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUcsaUJBQVMsRUFBQyxrQ0FBYjtBQUFBLGtCQUFpREU7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0U7QUFBQSxnQkFBSUQ7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRDZCO0FBQUEsQ0FBWixDQUFuQjs7QUFVQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLHNCQUNFLDhEQUFDLCtEQUFEO0FBQUEsMkJBQ0UsOERBQUMscURBQUQ7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsc0NBQWY7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSw4REFBQyxtREFBRDtBQUFBLGtCQUFPTjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQVhEOztLQUFNTSxXO0FBYU4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVueS5jNGU0YTc4ZGJhYTFmZDdkMjI4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVzc2VydCB9IGZyb20gXCIuLi8uLi9EYXRhL3JldHRlclwiO1xyXG5pbXBvcnQge1xyXG4gIEdyaWQsXHJcbiAgR3JpZEl0ZW0sXHJcbiAgTGF5b3V0LFxyXG4gIFNlY3Rpb25Db250YWluZXIsXHJcbn0gZnJvbSBcIi4uLy4uL1Ntw6UvQmFzZUVsZW1lbnRlclwiO1xyXG5cclxuY29uc3QgZGVzc2VydGVuZSA9IERlc3NlcnQubWFwKCh7IHRpdHRlbCwgYmVza3JpdmVsc2UsIHByaXMgfSwgaWQpID0+IChcclxuICA8R3JpZEl0ZW0gYz1cImNvbC1zcGFuLTRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbWItOFwiPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1oNSB0ZXh0LWJsYWNrIGZvbnQtc2VtaWJvbGRcIj57dGl0dGVsfTwvaDM+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtaDUgdGV4dC1ibGFjayBmb250LXNlbWlib2xkXCI+e3ByaXN9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cD57YmVza3JpdmVsc2V9PC9wPlxyXG4gIDwvR3JpZEl0ZW0+XHJcbikpO1xyXG5cclxuY29uc3QgTWVueURlc3NlcnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uQ29udGFpbmVyPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi01NiBib3JkZXItYi0yXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBtYi04XCI+REVTU0VSVDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEdyaWQ+e2Rlc3NlcnRlbmV9PC9HcmlkPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVueURlc3NlcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=