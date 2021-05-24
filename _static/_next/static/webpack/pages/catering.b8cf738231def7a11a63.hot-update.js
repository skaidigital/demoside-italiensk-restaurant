self["webpackHotUpdate_N_E"]("pages/catering",{

/***/ "./components/Små/BaseElementer.js":
/*!*****************************************!*\
  !*** ./components/Små/BaseElementer.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionContainer": function() { return /* binding */ SectionContainer; },
/* harmony export */   "SectionContainerUtenPadding": function() { return /* binding */ SectionContainerUtenPadding; },
/* harmony export */   "Layout": function() { return /* binding */ Layout; },
/* harmony export */   "LayoutOmOss": function() { return /* binding */ LayoutOmOss; },
/* harmony export */   "HeroContainer": function() { return /* binding */ HeroContainer; },
/* harmony export */   "HeroContainerUtenPadding": function() { return /* binding */ HeroContainerUtenPadding; },
/* harmony export */   "NavContainer": function() { return /* binding */ NavContainer; },
/* harmony export */   "FooterContainer": function() { return /* binding */ FooterContainer; },
/* harmony export */   "Grid": function() { return /* binding */ Grid; },
/* harmony export */   "GridItem": function() { return /* binding */ GridItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\GitHub\\skaidigital\\demoside-italiensk-restaurant\\components\\Sm\xE5\\BaseElementer.js",
    _this = undefined;


var SectionContainer = function SectionContainer(_ref) {
  var children = _ref.children,
      id = _ref.id,
      farge = _ref.farge,
      pt = _ref.pt;
  var padding = pt;
  var paddingMD = padding * 2;
  var paddingLG = paddingMD * 2;
  var paddingXL = paddingLG;
  var ut = pt != undefined ? "py-".concat(padding, " md:py-").concat(paddingMD, " lg:py-").concat(paddingLG, " xl:py-").concat(paddingXL) : "py-80 md:py-160 lg:py-160 xl:py-160";
  var klassenavn = "bg-".concat(farge, " mx-auto align-center py-80 md:py-120 lg:py-120 ");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: id,
    className: klassenavn,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Element, {
      name: id,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};
_c = SectionContainer;
var SectionContainerUtenPadding = function SectionContainerUtenPadding(_ref2) {
  var children = _ref2.children,
      id = _ref2.id,
      farge = _ref2.farge,
      pt = _ref2.pt;
  var klassenavn = "bg-".concat(farge, " mx-auto align-center");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: id,
    className: klassenavn,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Element, {
      name: id,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};
_c2 = SectionContainerUtenPadding;
var Layout = function Layout(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container mx-auto w-screen md:max-w lg:max-w xl:max-w",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-95 mx-auto align-center",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};
_c3 = Layout;
var LayoutOmOss = function LayoutOmOss(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container mx-auto w-screen md:max-w lg:max-w xl:max-w",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "lg:max-w-60 mx-auto align-center",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, _this);
};
_c4 = LayoutOmOss;
var HeroContainer = function HeroContainer(_ref5) {
  var children = _ref5.children,
      id = _ref5.id,
      farge = _ref5.farge,
      pt = _ref5.pt,
      c = _ref5.c;
  var klassenavn = "z-1 bg-".concat(farge, " mx-auto align-center pb-80 ").concat(c, " pt-40 md:pb-120 md:pt-56 lg:pb-240 lg:pt-80 ");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: id,
    className: klassenavn,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Element, {
      name: id,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
};
_c5 = HeroContainer;
var HeroContainerUtenPadding = function HeroContainerUtenPadding(_ref6) {
  var children = _ref6.children,
      id = _ref6.id,
      farge = _ref6.farge,
      pt = _ref6.pt,
      klasseNavn = _ref6.klasseNavn;
  var klassenavn = "bg-".concat(farge, " mx-auto align-center pt-40 md:pt-56 lg:pt-80 z-1");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: id,
    className: klassenavn,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Element, {
      name: id,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, _this);
};
_c6 = HeroContainerUtenPadding;
var NavContainer = function NavContainer(_ref7) {
  var children = _ref7.children,
      id = _ref7.id;
  var klassenavn = "z-2";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: id,
    className: klassenavn,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Element, {
      name: id,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, _this);
};
_c7 = NavContainer;
var FooterContainer = function FooterContainer(_ref8) {
  var children = _ref8.children,
      id = _ref8.id;
  var klassenavn = "z-2";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: id,
    className: klassenavn,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Element, {
      name: id,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }, _this);
};
_c8 = FooterContainer;
var Grid = function Grid(_ref9) {
  var children = _ref9.children,
      c = _ref9.c;
  var klasseNavn = "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-24 ".concat(c);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: klasseNavn,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 10
  }, _this);
};
_c9 = Grid;
var GridItem = function GridItem(_ref10) {
  var c = _ref10.c,
      children = _ref10.children,
      id = _ref10.id;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: c,
    children: children
  }, id, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, _this);
};
_c10 = GridItem;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "SectionContainer");
$RefreshReg$(_c2, "SectionContainerUtenPadding");
$RefreshReg$(_c3, "Layout");
$RefreshReg$(_c4, "LayoutOmOss");
$RefreshReg$(_c5, "HeroContainer");
$RefreshReg$(_c6, "HeroContainerUtenPadding");
$RefreshReg$(_c7, "NavContainer");
$RefreshReg$(_c8, "FooterContainer");
$RefreshReg$(_c9, "Grid");
$RefreshReg$(_c10, "GridItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbcOlL0Jhc2VFbGVtZW50ZXIuanMiXSwibmFtZXMiOlsiU2VjdGlvbkNvbnRhaW5lciIsImNoaWxkcmVuIiwiaWQiLCJmYXJnZSIsInB0IiwicGFkZGluZyIsInBhZGRpbmdNRCIsInBhZGRpbmdMRyIsInBhZGRpbmdYTCIsInV0IiwidW5kZWZpbmVkIiwia2xhc3NlbmF2biIsIlNlY3Rpb25Db250YWluZXJVdGVuUGFkZGluZyIsIkxheW91dCIsIkxheW91dE9tT3NzIiwiSGVyb0NvbnRhaW5lciIsImMiLCJIZXJvQ29udGFpbmVyVXRlblBhZGRpbmciLCJrbGFzc2VOYXZuIiwiTmF2Q29udGFpbmVyIiwiRm9vdGVyQ29udGFpbmVyIiwiR3JpZCIsIkdyaWRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQWlDO0FBQUEsTUFBOUJDLFFBQThCLFFBQTlCQSxRQUE4QjtBQUFBLE1BQXBCQyxFQUFvQixRQUFwQkEsRUFBb0I7QUFBQSxNQUFoQkMsS0FBZ0IsUUFBaEJBLEtBQWdCO0FBQUEsTUFBVEMsRUFBUyxRQUFUQSxFQUFTO0FBQy9ELE1BQUlDLE9BQU8sR0FBR0QsRUFBZDtBQUNBLE1BQUlFLFNBQVMsR0FBR0QsT0FBTyxHQUFHLENBQTFCO0FBQ0EsTUFBSUUsU0FBUyxHQUFHRCxTQUFTLEdBQUcsQ0FBNUI7QUFDQSxNQUFJRSxTQUFTLEdBQUdELFNBQWhCO0FBRUEsTUFBSUUsRUFBRSxHQUNKTCxFQUFFLElBQUlNLFNBQU4sZ0JBQ1VMLE9BRFYsb0JBQzJCQyxTQUQzQixvQkFDOENDLFNBRDlDLG9CQUNpRUMsU0FEakUseUNBREY7QUFLQSxNQUFNRyxVQUFVLGdCQUFTUixLQUFULHFEQUFoQjtBQUNBLHNCQUNFO0FBQVMsTUFBRSxFQUFFRCxFQUFiO0FBQWlCLGFBQVMsRUFBRVMs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QUFBQSxNQUFuQmYsUUFBbUIsVUFBbkJBLFFBQW1CO0FBQUEsTUFBVEMsRUFBUyxVQUFUQSxFQUFTO0FBQy9DLHNCQUNFO0FBQWMsYUFBUyxFQUFFYyxDQUF6QjtBQUFBLGNBQ0dmO0FBREgsS0FBVUMsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5NO09BQU1vQixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVyaW5nLmI4Y2Y3MzgyMzFkZWY3YTExYTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25Db250YWluZXIgPSAoeyBjaGlsZHJlbiwgaWQsIGZhcmdlLCBwdCB9KSA9PiB7XHJcbiAgbGV0IHBhZGRpbmcgPSBwdDtcclxuICBsZXQgcGFkZGluZ01EID0gcGFkZGluZyAqIDI7XHJcbiAgbGV0IHBhZGRpbmdMRyA9IHBhZGRpbmdNRCAqIDI7XHJcbiAgbGV0IHBhZGRpbmdYTCA9IHBhZGRpbmdMRztcclxuXHJcbiAgbGV0IHV0ID1cclxuICAgIHB0ICE9IHVuZGVmaW5lZFxyXG4gICAgICA/IGBweS0ke3BhZGRpbmd9IG1kOnB5LSR7cGFkZGluZ01EfSBsZzpweS0ke3BhZGRpbmdMR30geGw6cHktJHtwYWRkaW5nWEx9YFxyXG4gICAgICA6IGBweS04MCBtZDpweS0xNjAgbGc6cHktMTYwIHhsOnB5LTE2MGA7XHJcblxyXG4gIGNvbnN0IGtsYXNzZW5hdm4gPSBgYmctJHtmYXJnZX0gbXgtYXV0byBhbGlnbi1jZW50ZXIgcHktODAgbWQ6cHktMTIwIGxnOnB5LTEyMCBgO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD17aWR9IGNsYXNzTmFtZT17a2xhc3NlbmF2bn0+XHJcbiAgICAgIDxFbGVtZW50IG5hbWU9e2lkfT57Y2hpbGRyZW59PC9FbGVtZW50PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkNvbnRhaW5lclV0ZW5QYWRkaW5nID0gKHsgY2hpbGRyZW4sIGlkLCBmYXJnZSwgcHQgfSkgPT4ge1xyXG4gIGNvbnN0IGtsYXNzZW5hdm4gPSBgYmctJHtmYXJnZX0gbXgtYXV0byBhbGlnbi1jZW50ZXJgO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD17aWR9IGNsYXNzTmFtZT17a2xhc3NlbmF2bn0+XHJcbiAgICAgIDxFbGVtZW50IG5hbWU9e2lkfT57Y2hpbGRyZW59PC9FbGVtZW50PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHctc2NyZWVuIG1kOm1heC13IGxnOm1heC13IHhsOm1heC13XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctOTUgbXgtYXV0byBhbGlnbi1jZW50ZXJcIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgTGF5b3V0T21Pc3MgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gdy1zY3JlZW4gbWQ6bWF4LXcgbGc6bWF4LXcgeGw6bWF4LXdcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptYXgtdy02MCBteC1hdXRvIGFsaWduLWNlbnRlclwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSGVyb0NvbnRhaW5lciA9ICh7IGNoaWxkcmVuLCBpZCwgZmFyZ2UsIHB0LCBjIH0pID0+IHtcclxuICBjb25zdCBrbGFzc2VuYXZuID0gYHotMSBiZy0ke2ZhcmdlfSBteC1hdXRvIGFsaWduLWNlbnRlciBwYi04MCAke2N9IHB0LTQwIG1kOnBiLTEyMCBtZDpwdC01NiBsZzpwYi0yNDAgbGc6cHQtODAgYDtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e2tsYXNzZW5hdm59PlxyXG4gICAgICA8RWxlbWVudCBuYW1lPXtpZH0+e2NoaWxkcmVufTwvRWxlbWVudD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlcm9Db250YWluZXJVdGVuUGFkZGluZyA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgaWQsXHJcbiAgZmFyZ2UsXHJcbiAgcHQsXHJcbiAga2xhc3NlTmF2bixcclxufSkgPT4ge1xyXG4gIGNvbnN0IGtsYXNzZW5hdm4gPSBgYmctJHtmYXJnZX0gbXgtYXV0byBhbGlnbi1jZW50ZXIgcHQtNDAgbWQ6cHQtNTYgbGc6cHQtODAgei0xYDtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e2tsYXNzZW5hdm59PlxyXG4gICAgICA8RWxlbWVudCBuYW1lPXtpZH0+e2NoaWxkcmVufTwvRWxlbWVudD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkNvbnRhaW5lciA9ICh7IGNoaWxkcmVuLCBpZCB9KSA9PiB7XHJcbiAgY29uc3Qga2xhc3NlbmF2biA9IGB6LTJgO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD17aWR9IGNsYXNzTmFtZT17a2xhc3NlbmF2bn0+XHJcbiAgICAgIDxFbGVtZW50IG5hbWU9e2lkfT57Y2hpbGRyZW59PC9FbGVtZW50PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBGb290ZXJDb250YWluZXIgPSAoeyBjaGlsZHJlbiwgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IGtsYXNzZW5hdm4gPSBgei0yYDtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e2tsYXNzZW5hdm59PlxyXG4gICAgICA8RWxlbWVudCBuYW1lPXtpZH0+e2NoaWxkcmVufTwvRWxlbWVudD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWQgPSAoeyBjaGlsZHJlbiwgYyB9KSA9PiB7XHJcbiAgY29uc3Qga2xhc3NlTmF2biA9IGBncmlkIGdyaWQtY29scy00IG1kOmdyaWQtY29scy04IGxnOmdyaWQtY29scy0xMiBnYXAtMjQgJHtjfWA7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtrbGFzc2VOYXZufT57Y2hpbGRyZW59PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRJdGVtID0gKHsgYywgY2hpbGRyZW4sIGlkIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9e2N9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9