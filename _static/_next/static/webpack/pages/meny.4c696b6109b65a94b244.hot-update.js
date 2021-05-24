self["webpackHotUpdate_N_E"]("pages/meny",{

/***/ "./components/Sider/1_Meny/2_MenyPasta.js":
/*!************************************************!*\
  !*** ./components/Sider/1_Meny/2_MenyPasta.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Data_retter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/retter */ "./components/Data/retter.js");
/* harmony import */ var _Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Små/BaseElementer */ "./components/Små/BaseElementer.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\GitHub\\skaidigital\\demoside-italiensk-restaurant\\components\\Sider\\1_Meny\\2_MenyPasta.js",
    _this = undefined;



var Pastaene = _Data_retter__WEBPACK_IMPORTED_MODULE_1__.Pasta.map(_c = function _c(_ref, id) {
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
_c2 = Pastaene;

var MenyPasta = function MenyPasta() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.SectionContainerUtenPadding, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.Layout, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-center mb-56",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-black mb-8",
          children: "PASTA"
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
        c: "mb-80",
        children: Pastaene
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

_c3 = MenyPasta;
/* harmony default export */ __webpack_exports__["default"] = (MenyPasta);

var _c, _c2, _c3;

$RefreshReg$(_c, "Pastaene$Pasta.map");
$RefreshReg$(_c2, "Pastaene");
$RefreshReg$(_c3, "MenyPasta");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlci8xX01lbnkvMl9NZW55UGFzdGEuanMiXSwibmFtZXMiOlsiUGFzdGFlbmUiLCJQYXN0YSIsImlkIiwidGl0dGVsIiwiYmVza3JpdmVsc2UiLCJwcmlzIiwiTWVueVBhc3RhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQSxJQUFNQSxRQUFRLEdBQUdDLG1EQUFBLE1BQVUsa0JBQWdDQyxFQUFoQztBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLE1BQVdDLFdBQVgsUUFBV0EsV0FBWDtBQUFBLE1BQXdCQyxJQUF4QixRQUF3QkEsSUFBeEI7QUFBQSxzQkFDekIsOERBQUMsdURBQUQ7QUFBVSxLQUFDLEVBQUMsWUFBWjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG9DQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLGtDQUFkO0FBQUEsa0JBQWtERjtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFHLGlCQUFTLEVBQUMsa0NBQWI7QUFBQSxrQkFBaURFO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQUEsZ0JBQUlEO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUR5QjtBQUFBLENBQVYsQ0FBakI7TUFBTUosUTs7QUFVTixJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLHNCQUNFLDhEQUFDLDBFQUFEO0FBQUEsMkJBQ0UsOERBQUMscURBQUQ7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsMkJBQWY7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSw4REFBQyxtREFBRDtBQUFNLFNBQUMsRUFBQyxPQUFSO0FBQUEsa0JBQWlCTjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FYRDs7TUFBTU0sUztBQWFOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lbnkuNGM2OTZiNjEwOWI2NWE5NGIyNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhc3RhIH0gZnJvbSBcIi4uLy4uL0RhdGEvcmV0dGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgR3JpZCxcclxuICBHcmlkSXRlbSxcclxuICBMYXlvdXQsXHJcbiAgU2VjdGlvbkNvbnRhaW5lclV0ZW5QYWRkaW5nLFxyXG59IGZyb20gXCIuLi8uLi9TbcOlL0Jhc2VFbGVtZW50ZXJcIjtcclxuXHJcbmNvbnN0IFBhc3RhZW5lID0gUGFzdGEubWFwKCh7IHRpdHRlbCwgYmVza3JpdmVsc2UsIHByaXMgfSwgaWQpID0+IChcclxuICA8R3JpZEl0ZW0gYz1cImNvbC1zcGFuLTRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbWItOFwiPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1oNSB0ZXh0LWJsYWNrIGZvbnQtc2VtaWJvbGRcIj57dGl0dGVsfTwvaDM+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtaDUgdGV4dC1ibGFjayBmb250LXNlbWlib2xkXCI+e3ByaXN9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cD57YmVza3JpdmVsc2V9PC9wPlxyXG4gIDwvR3JpZEl0ZW0+XHJcbikpO1xyXG5cclxuY29uc3QgTWVueVBhc3RhID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2VjdGlvbkNvbnRhaW5lclV0ZW5QYWRkaW5nPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi01NlwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgbWItOFwiPlBBU1RBPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8R3JpZCBjPVwibWItODBcIj57UGFzdGFlbmV9PC9HcmlkPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvU2VjdGlvbkNvbnRhaW5lclV0ZW5QYWRkaW5nPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW55UGFzdGE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=