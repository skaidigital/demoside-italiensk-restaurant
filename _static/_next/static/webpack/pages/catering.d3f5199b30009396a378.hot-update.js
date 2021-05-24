self["webpackHotUpdate_N_E"]("pages/catering",{

/***/ "./components/Store/HeroDisplayFull.js":
/*!*********************************************!*\
  !*** ./components/Store/HeroDisplayFull.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroDisplayFull": function() { return /* binding */ HeroDisplayFull; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\GitHub\\skaidigital\\demoside-italiensk-restaurant\\components\\Store\\HeroDisplayFull.js",
    _this = undefined;



var myLoader = function myLoader(_ref) {
  var src = _ref.src,
      width = _ref.width,
      quality = _ref.quality;
  return "https://res.cloudinary.com/skai-digital/image/upload/q_auto/".concat(src);
};

var HeroDisplayFull = function HeroDisplayFull(_ref2) {
  var src = _ref2.src,
      alt = _ref2.alt,
      tittel = _ref2.tittel,
      brodteks = _ref2.brodteks;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex relative  h-380 lg:h-608 ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "z-1 bgImage",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: src,
        alt: alt,
        layout: "fill",
        objectFit: "cover",
        loader: myLoader
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "absolute inset-0 flex lg:text-center px-16 justify-center items-center flex-col z-2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-hvit",
          children: tittel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-hvit",
          children: brodteks
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};
_c = HeroDisplayFull;

var _c;

$RefreshReg$(_c, "HeroDisplayFull");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9yZS9IZXJvRGlzcGxheUZ1bGwuanMiXSwibmFtZXMiOlsibXlMb2FkZXIiLCJzcmMiLCJ3aWR0aCIsInF1YWxpdHkiLCJIZXJvRGlzcGxheUZ1bGwiLCJhbHQiLCJ0aXR0ZWwiLCJicm9kdGVrcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE2QjtBQUFBLE1BQTFCQyxHQUEwQixRQUExQkEsR0FBMEI7QUFBQSxNQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzVDLCtFQUFzRUYsR0FBdEU7QUFDRCxDQUZEOztBQUlPLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsUUFBb0M7QUFBQSxNQUFqQ0gsR0FBaUMsU0FBakNBLEdBQWlDO0FBQUEsTUFBNUJJLEdBQTRCLFNBQTVCQSxHQUE0QjtBQUFBLE1BQXZCQyxNQUF1QixTQUF2QkEsTUFBdUI7QUFBQSxNQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFDakUsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsNkJBQ0UsOERBQUMsbURBQUQ7QUFDRSxXQUFHLEVBQUVOLEdBRFA7QUFFRSxXQUFHLEVBQUVJLEdBRlA7QUFHRSxjQUFNLEVBQUMsTUFIVDtBQUlFLGlCQUFTLEVBQUMsT0FKWjtBQUtFLGNBQU0sRUFBRUw7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBVUU7QUFBSyxlQUFTLEVBQUMscUZBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsRUFBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyxXQUFkO0FBQUEsb0JBQTJCTTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBRyxtQkFBUyxFQUFDLFdBQWI7QUFBQSxvQkFBMEJDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBcEJNO0tBQU1ILGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZXJpbmcuZDNmNTE5OWIzMDAwOTM5NmEzNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcclxuICByZXR1cm4gYGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3NrYWktZGlnaXRhbC9pbWFnZS91cGxvYWQvcV9hdXRvLyR7c3JjfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0Rpc3BsYXlGdWxsID0gKHsgc3JjLCBhbHQsIHRpdHRlbCwgYnJvZHRla3MgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcmVsYXRpdmUgIGgtMzgwIGxnOmgtNjA4IFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMSBiZ0ltYWdlXCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBsZzp0ZXh0LWNlbnRlciBweC0xNiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgei0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWh2aXRcIj57dGl0dGVsfTwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWh2aXRcIj57YnJvZHRla3N9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=