self["webpackHotUpdate_N_E"]("pages/meny",{

/***/ "./components/Sider/1_Meny/3_MenyPizza.js":
/*!************************************************!*\
  !*** ./components/Sider/1_Meny/3_MenyPizza.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Data_retter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/retter */ "./components/Data/retter.js");
/* harmony import */ var _Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Små/BaseElementer */ "./components/Små/BaseElementer.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\GitHub\\skaidigital\\demoside-italiensk-restaurant\\components\\Sider\\1_Meny\\3_MenyPizza.js",
    _this = undefined;



var pizzaene = _Data_retter__WEBPACK_IMPORTED_MODULE_1__.Pizza.map(function (_ref, id) {
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

var MenyPizza = function MenyPizza() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.SectionContainerUtenPadding, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.Layout, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex md:justify-center mb-56",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-black mb-8 text-h2",
          children: "PIZZA"
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
        children: pizzaene
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

_c = MenyPizza;
/* harmony default export */ __webpack_exports__["default"] = (MenyPizza);

var _c;

$RefreshReg$(_c, "MenyPizza");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlci8xX01lbnkvM19NZW55UGl6emEuanMiXSwibmFtZXMiOlsicGl6emFlbmUiLCJQaXp6YSIsImlkIiwidGl0dGVsIiwiYmVza3JpdmVsc2UiLCJwcmlzIiwiTWVueVBpenphIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQSxJQUFNQSxRQUFRLEdBQUdDLG1EQUFBLENBQVUsZ0JBQWdDQyxFQUFoQztBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLE1BQVdDLFdBQVgsUUFBV0EsV0FBWDtBQUFBLE1BQXdCQyxJQUF4QixRQUF3QkEsSUFBeEI7QUFBQSxzQkFDekIsOERBQUMsdURBQUQ7QUFBVSxLQUFDLEVBQUMsWUFBWjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG9DQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLGtDQUFkO0FBQUEsa0JBQWtERjtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFHLGlCQUFTLEVBQUMsa0NBQWI7QUFBQSxrQkFBaURFO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQUEsZ0JBQUlEO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUR5QjtBQUFBLENBQVYsQ0FBakI7O0FBVUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixzQkFDRSw4REFBQywwRUFBRDtBQUFBLDJCQUNFLDhEQUFDLHFEQUFEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUEsK0JBQ0U7QUFBSSxtQkFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUsOERBQUMsbURBQUQ7QUFBTSxTQUFDLEVBQUMsT0FBUjtBQUFBLGtCQUFpQk47QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWEQ7O0tBQU1NLFM7QUFhTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZW55LjcwMDJjZTAyYWMyYjQxZDQ1Y2RiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXp6YSB9IGZyb20gXCIuLi8uLi9EYXRhL3JldHRlclwiO1xyXG5pbXBvcnQge1xyXG4gIEdyaWQsXHJcbiAgR3JpZEl0ZW0sXHJcbiAgTGF5b3V0LFxyXG4gIFNlY3Rpb25Db250YWluZXJVdGVuUGFkZGluZyxcclxufSBmcm9tIFwiLi4vLi4vU23DpS9CYXNlRWxlbWVudGVyXCI7XHJcblxyXG5jb25zdCBwaXp6YWVuZSA9IFBpenphLm1hcCgoeyB0aXR0ZWwsIGJlc2tyaXZlbHNlLCBwcmlzIH0sIGlkKSA9PiAoXHJcbiAgPEdyaWRJdGVtIGM9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG1iLThcIj5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtaDUgdGV4dC1ibGFjayBmb250LXNlbWlib2xkXCI+e3RpdHRlbH08L2gzPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWg1IHRleHQtYmxhY2sgZm9udC1zZW1pYm9sZFwiPntwcmlzfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPHA+e2Jlc2tyaXZlbHNlfTwvcD5cclxuICA8L0dyaWRJdGVtPlxyXG4pKTtcclxuXHJcbmNvbnN0IE1lbnlQaXp6YSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb25Db250YWluZXJVdGVuUGFkZGluZz5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6anVzdGlmeS1jZW50ZXIgbWItNTZcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIG1iLTggdGV4dC1oMlwiPlBJWlpBPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8R3JpZCBjPVwibWItODBcIj57cGl6emFlbmV9PC9HcmlkPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvU2VjdGlvbkNvbnRhaW5lclV0ZW5QYWRkaW5nPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW55UGl6emE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=