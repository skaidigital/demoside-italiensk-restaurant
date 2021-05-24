self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Store/Cards.js":
/*!***********************************!*\
  !*** ./components/Store/Cards.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PictureCardReversed": function() { return /* binding */ PictureCardReversed; },
/* harmony export */   "PictureCard": function() { return /* binding */ PictureCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Små/BaseElementer */ "./components/Små/BaseElementer.js");
/* harmony import */ var _Sm_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Små/Buttons */ "./components/Små/Buttons.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\GitHub\\skaidigital\\demoside-italiensk-restaurant\\components\\Store\\Cards.js",
    _this = undefined;





var myLoader = function myLoader(_ref) {
  var src = _ref.src,
      width = _ref.width,
      quality = _ref.quality;
  return "https://res.cloudinary.com/skai-digital/image/upload/q_auto/".concat(src);
};

var PictureCardReversed = function PictureCardReversed(_ref2) {
  var src = _ref2.src,
      alt = _ref2.alt,
      tittel = _ref2.tittel,
      beskrivelse = _ref2.beskrivelse,
      buttonText = _ref2.buttonText,
      href = _ref2.href,
      height = _ref2.height,
      width = _ref2.width,
      layout = _ref2.layout;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
      c: "row-start-1 col-span-4 md:col-span-8 lg:col-start-7 lg:col-span-6 items-self-stretch grid h-400 min-h-0",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: "",
        objectFit: "cover",
        src: src,
        alt: alt,
        layout: layout,
        height: height,
        width: width,
        loader: myLoader
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
      c: "col-span-4 row-start-1 md:col-span-8 lg:col-span-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-h2",
        children: tittel
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-16 text-p",
        children: beskrivelse
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_Buttons__WEBPACK_IMPORTED_MODULE_3__.MainButton, {
        btnText: buttonText,
        path: href
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};
_c = PictureCardReversed;
var PictureCard = function PictureCard(_ref3) {
  var src = _ref3.src,
      alt = _ref3.alt,
      tittel = _ref3.tittel,
      height = _ref3.height,
      width = _ref3.width,
      beskrivelse = _ref3.beskrivelse,
      buttonText = _ref3.buttonText,
      href = _ref3.href;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
      c: "row-start-1  row-start-1 col-span-4 md:col-span-8 lg:col-span-6 grid items-self-stretch h-400 min-h-0",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: "",
        objectFit: "cover",
        src: src,
        alt: alt,
        height: height,
        width: width,
        loader: myLoader
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
      c: "col-span-4 lg:col-span-5 md:col-span-8 lg:col-start-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-h2",
        children: tittel
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-16 text-p",
        children: beskrivelse
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_Buttons__WEBPACK_IMPORTED_MODULE_3__.MainButton, {
        btnText: buttonText,
        path: href
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, _this);
};
_c2 = PictureCard;

var _c, _c2;

$RefreshReg$(_c, "PictureCardReversed");
$RefreshReg$(_c2, "PictureCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9yZS9DYXJkcy5qcyJdLCJuYW1lcyI6WyJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsIlBpY3R1cmVDYXJkUmV2ZXJzZWQiLCJhbHQiLCJ0aXR0ZWwiLCJiZXNrcml2ZWxzZSIsImJ1dHRvblRleHQiLCJocmVmIiwiaGVpZ2h0IiwibGF5b3V0IiwiUGljdHVyZUNhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTZCO0FBQUEsTUFBMUJDLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDNUMsK0VBQXNFRixHQUF0RTtBQUNELENBRkQ7O0FBSU8sSUFBTUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixRQVU3QjtBQUFBLE1BVEpILEdBU0ksU0FUSkEsR0FTSTtBQUFBLE1BUkpJLEdBUUksU0FSSkEsR0FRSTtBQUFBLE1BUEpDLE1BT0ksU0FQSkEsTUFPSTtBQUFBLE1BTkpDLFdBTUksU0FOSkEsV0FNSTtBQUFBLE1BTEpDLFVBS0ksU0FMSkEsVUFLSTtBQUFBLE1BSkpDLElBSUksU0FKSkEsSUFJSTtBQUFBLE1BSEpDLE1BR0ksU0FISkEsTUFHSTtBQUFBLE1BRkpSLEtBRUksU0FGSkEsS0FFSTtBQUFBLE1BREpTLE1BQ0ksU0FESkEsTUFDSTtBQUNKLHNCQUNFLDhEQUFDLG1EQUFEO0FBQUEsNEJBQ0UsOERBQUMsdURBQUQ7QUFBVSxPQUFDLEVBQUMseUdBQVo7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUNFLGlCQUFTLEVBQUMsRUFEWjtBQUVFLGlCQUFTLEVBQUMsT0FGWjtBQUdFLFdBQUcsRUFBRVYsR0FIUDtBQUlFLFdBQUcsRUFBRUksR0FKUDtBQUtFLGNBQU0sRUFBRU0sTUFMVjtBQU1FLGNBQU0sRUFBRUQsTUFOVjtBQU9FLGFBQUssRUFBRVIsS0FQVDtBQVFFLGNBQU0sRUFBRUY7QUFSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBYUUsOERBQUMsdURBQUQ7QUFBVSxPQUFDLEVBQUMsb0RBQVo7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsU0FBZDtBQUFBLGtCQUF5Qk07QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQSxrQkFBNkJDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFLDhEQUFDLG1EQUFEO0FBQVksZUFBTyxFQUFFQyxVQUFyQjtBQUFpQyxZQUFJLEVBQUVDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQWhDTTtLQUFNTCxtQjtBQWtDTixJQUFNUSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxRQVNyQjtBQUFBLE1BUkpYLEdBUUksU0FSSkEsR0FRSTtBQUFBLE1BUEpJLEdBT0ksU0FQSkEsR0FPSTtBQUFBLE1BTkpDLE1BTUksU0FOSkEsTUFNSTtBQUFBLE1BTEpJLE1BS0ksU0FMSkEsTUFLSTtBQUFBLE1BSkpSLEtBSUksU0FKSkEsS0FJSTtBQUFBLE1BSEpLLFdBR0ksU0FISkEsV0FHSTtBQUFBLE1BRkpDLFVBRUksU0FGSkEsVUFFSTtBQUFBLE1BREpDLElBQ0ksU0FESkEsSUFDSTtBQUNKLHNCQUNFLDhEQUFDLG1EQUFEO0FBQUEsNEJBQ0UsOERBQUMsdURBQUQ7QUFBVSxPQUFDLEVBQUMsdUdBQVo7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUNFLGlCQUFTLEVBQUMsRUFEWjtBQUVFLGlCQUFTLEVBQUMsT0FGWjtBQUdFLFdBQUcsRUFBRVIsR0FIUDtBQUlFLFdBQUcsRUFBRUksR0FKUDtBQUtFLGNBQU0sRUFBRUssTUFMVjtBQU1FLGFBQUssRUFBRVIsS0FOVDtBQU9FLGNBQU0sRUFBRUY7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBWUUsOERBQUMsdURBQUQ7QUFBVSxPQUFDLEVBQUMsdURBQVo7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsU0FBZDtBQUFBLGtCQUF5Qk07QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQSxrQkFBNkJDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFLDhEQUFDLG1EQUFEO0FBQVksZUFBTyxFQUFFQyxVQUFyQjtBQUFpQyxZQUFJLEVBQUVDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQTlCTTtNQUFNRyxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZjMDViYzUzZTcyODJlMTI4OTFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgR3JpZCwgR3JpZEl0ZW0gfSBmcm9tIFwiLi4vU23DpS9CYXNlRWxlbWVudGVyXCI7XHJcbmltcG9ydCB7IE1haW5CdXR0b24gfSBmcm9tIFwiLi4vU23DpS9CdXR0b25zXCI7XHJcblxyXG5jb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfSkgPT4ge1xyXG4gIHJldHVybiBgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2thaS1kaWdpdGFsL2ltYWdlL3VwbG9hZC9xX2F1dG8vJHtzcmN9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQaWN0dXJlQ2FyZFJldmVyc2VkID0gKHtcclxuICBzcmMsXHJcbiAgYWx0LFxyXG4gIHRpdHRlbCxcclxuICBiZXNrcml2ZWxzZSxcclxuICBidXR0b25UZXh0LFxyXG4gIGhyZWYsXHJcbiAgaGVpZ2h0LFxyXG4gIHdpZHRoLFxyXG4gIGxheW91dCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZD5cclxuICAgICAgPEdyaWRJdGVtIGM9XCJyb3ctc3RhcnQtMSBjb2wtc3Bhbi00IG1kOmNvbC1zcGFuLTggbGc6Y29sLXN0YXJ0LTcgbGc6Y29sLXNwYW4tNiBpdGVtcy1zZWxmLXN0cmV0Y2ggZ3JpZCBoLTQwMCBtaW4taC0wXCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICBhbHQ9e2FsdH1cclxuICAgICAgICAgIGxheW91dD17bGF5b3V0fVxyXG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgIDxHcmlkSXRlbSBjPVwiY29sLXNwYW4tNCByb3ctc3RhcnQtMSBtZDpjb2wtc3Bhbi04IGxnOmNvbC1zcGFuLTVcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1oMlwiPnt0aXR0ZWx9PC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0xNiB0ZXh0LXBcIj57YmVza3JpdmVsc2V9PC9wPlxyXG4gICAgICAgIDxNYWluQnV0dG9uIGJ0blRleHQ9e2J1dHRvblRleHR9IHBhdGg9e2hyZWZ9IC8+XHJcbiAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQaWN0dXJlQ2FyZCA9ICh7XHJcbiAgc3JjLFxyXG4gIGFsdCxcclxuICB0aXR0ZWwsXHJcbiAgaGVpZ2h0LFxyXG4gIHdpZHRoLFxyXG4gIGJlc2tyaXZlbHNlLFxyXG4gIGJ1dHRvblRleHQsXHJcbiAgaHJlZixcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZD5cclxuICAgICAgPEdyaWRJdGVtIGM9XCJyb3ctc3RhcnQtMSAgcm93LXN0YXJ0LTEgY29sLXNwYW4tNCBtZDpjb2wtc3Bhbi04IGxnOmNvbC1zcGFuLTYgZ3JpZCBpdGVtcy1zZWxmLXN0cmV0Y2ggaC00MDAgbWluLWgtMFwiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgPEdyaWRJdGVtIGM9XCJjb2wtc3Bhbi00IGxnOmNvbC1zcGFuLTUgbWQ6Y29sLXNwYW4tOCBsZzpjb2wtc3RhcnQtOFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWgyXCI+e3RpdHRlbH08L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTE2IHRleHQtcFwiPntiZXNrcml2ZWxzZX08L3A+XHJcbiAgICAgICAgPE1haW5CdXR0b24gYnRuVGV4dD17YnV0dG9uVGV4dH0gcGF0aD17aHJlZn0gLz5cclxuICAgICAgPC9HcmlkSXRlbT5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9