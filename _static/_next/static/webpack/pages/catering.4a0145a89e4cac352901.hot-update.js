self["webpackHotUpdate_N_E"]("pages/catering",{

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
      width = _ref2.width;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col lg:flex-row-reverse justify-between",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
        c: "col-span-4 md:col-start-5 lg:col-start-7 lg:col-span-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: src,
          alt: alt,
          height: height,
          width: width,
          loader: myLoader
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
        c: "col-span-4 lg:col-span-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col lg:max-w-80",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "text-h2",
            children: tittel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "my-16 text-p",
            children: beskrivelse
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_Buttons__WEBPACK_IMPORTED_MODULE_3__.MainButton, {
            btnText: buttonText,
            path: href
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col lg:flex-row justify-between",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "lg:hidden",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: src,
        alt: alt,
        height: height,
        width: width,
        loader: myLoader
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "hidden lg:flex lg:relative lg:flex-1",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: src,
        alt: alt,
        layout: "fill",
        objectFit: "cover",
        loader: myLoader
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex mt-12 lg:mt-0 lg:flex-1 lg:justify-end",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col lg:max-w-80",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-h2",
          children: tittel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "my-16 text-p",
          children: beskrivelse
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_Buttons__WEBPACK_IMPORTED_MODULE_3__.MainButton, {
          btnText: buttonText,
          path: href
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9yZS9DYXJkcy5qcyJdLCJuYW1lcyI6WyJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsIlBpY3R1cmVDYXJkUmV2ZXJzZWQiLCJhbHQiLCJ0aXR0ZWwiLCJiZXNrcml2ZWxzZSIsImJ1dHRvblRleHQiLCJocmVmIiwiaGVpZ2h0IiwiUGljdHVyZUNhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTZCO0FBQUEsTUFBMUJDLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDNUMsK0VBQXNFRixHQUF0RTtBQUNELENBRkQ7O0FBSU8sSUFBTUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixRQVM3QjtBQUFBLE1BUkpILEdBUUksU0FSSkEsR0FRSTtBQUFBLE1BUEpJLEdBT0ksU0FQSkEsR0FPSTtBQUFBLE1BTkpDLE1BTUksU0FOSkEsTUFNSTtBQUFBLE1BTEpDLFdBS0ksU0FMSkEsV0FLSTtBQUFBLE1BSkpDLFVBSUksU0FKSkEsVUFJSTtBQUFBLE1BSEpDLElBR0ksU0FISkEsSUFHSTtBQUFBLE1BRkpDLE1BRUksU0FGSkEsTUFFSTtBQUFBLE1BREpSLEtBQ0ksU0FESkEsS0FDSTtBQUNKLHNCQUNFO0FBQUssYUFBUyxFQUFDLG1EQUFmO0FBQUEsMkJBQ0UsOERBQUMsbURBQUQ7QUFBQSw4QkFDRSw4REFBQyx1REFBRDtBQUFVLFNBQUMsRUFBQyx3REFBWjtBQUFBLCtCQUVFLDhEQUFDLG1EQUFEO0FBQ0UsYUFBRyxFQUFFRCxHQURQO0FBRUUsYUFBRyxFQUFFSSxHQUZQO0FBR0UsZ0JBQU0sRUFBRUssTUFIVjtBQUlFLGVBQUssRUFBRVIsS0FKVDtBQUtFLGdCQUFNLEVBQUVGO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXFCRSw4REFBQyx1REFBRDtBQUFVLFNBQUMsRUFBQywwQkFBWjtBQUFBLCtCQUVFO0FBQUssbUJBQVMsRUFBQywyQkFBZjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxTQUFkO0FBQUEsc0JBQXlCTTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFDLGNBQWI7QUFBQSxzQkFBNkJDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSw4REFBQyxtREFBRDtBQUFZLG1CQUFPLEVBQUVDLFVBQXJCO0FBQWlDLGdCQUFJLEVBQUVDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0E3Q007S0FBTUwsbUI7QUErQ04sSUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQWMsUUFTckI7QUFBQSxNQVJKVixHQVFJLFNBUkpBLEdBUUk7QUFBQSxNQVBKSSxHQU9JLFNBUEpBLEdBT0k7QUFBQSxNQU5KQyxNQU1JLFNBTkpBLE1BTUk7QUFBQSxNQUxKSSxNQUtJLFNBTEpBLE1BS0k7QUFBQSxNQUpKUixLQUlJLFNBSkpBLEtBSUk7QUFBQSxNQUhKSyxXQUdJLFNBSEpBLFdBR0k7QUFBQSxNQUZKQyxVQUVJLFNBRkpBLFVBRUk7QUFBQSxNQURKQyxJQUNJLFNBREpBLElBQ0k7QUFDSixzQkFDRTtBQUFLLGFBQVMsRUFBQywyQ0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUNFLFdBQUcsRUFBRVIsR0FEUDtBQUVFLFdBQUcsRUFBRUksR0FGUDtBQUdFLGNBQU0sRUFBRUssTUFIVjtBQUlFLGFBQUssRUFBRVIsS0FKVDtBQUtFLGNBQU0sRUFBRUY7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBVUU7QUFBSyxlQUFTLEVBQUMsc0NBQWY7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUNFLFdBQUcsRUFBRUMsR0FEUDtBQUVFLFdBQUcsRUFBRUksR0FGUDtBQUdFLGNBQU0sRUFBQyxNQUhUO0FBSUUsaUJBQVMsRUFBQyxPQUpaO0FBS0UsY0FBTSxFQUFFTDtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsZUFtQkU7QUFBSyxlQUFTLEVBQUMsNkNBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsMkJBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsU0FBZDtBQUFBLG9CQUF5Qk07QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQyxjQUFiO0FBQUEsb0JBQTZCQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0UsOERBQUMsbURBQUQ7QUFBWSxpQkFBTyxFQUFFQyxVQUFyQjtBQUFpQyxjQUFJLEVBQUVDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZCRCxDQXZDTTtNQUFNRSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVyaW5nLjRhMDE0NWE4OWU0Y2FjMzUyOTAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgR3JpZCwgR3JpZEl0ZW0gfSBmcm9tIFwiLi4vU23DpS9CYXNlRWxlbWVudGVyXCI7XHJcbmltcG9ydCB7IE1haW5CdXR0b24gfSBmcm9tIFwiLi4vU23DpS9CdXR0b25zXCI7XHJcblxyXG5jb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfSkgPT4ge1xyXG4gIHJldHVybiBgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2thaS1kaWdpdGFsL2ltYWdlL3VwbG9hZC9xX2F1dG8vJHtzcmN9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQaWN0dXJlQ2FyZFJldmVyc2VkID0gKHtcclxuICBzcmMsXHJcbiAgYWx0LFxyXG4gIHRpdHRlbCxcclxuICBiZXNrcml2ZWxzZSxcclxuICBidXR0b25UZXh0LFxyXG4gIGhyZWYsXHJcbiAgaGVpZ2h0LFxyXG4gIHdpZHRoLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdy1yZXZlcnNlIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICA8R3JpZD5cclxuICAgICAgICA8R3JpZEl0ZW0gYz1cImNvbC1zcGFuLTQgbWQ6Y29sLXN0YXJ0LTUgbGc6Y29sLXN0YXJ0LTcgbGc6Y29sLXNwYW4tNlwiPlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibGc6aGlkZGVuXCI+ICovfVxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICBhbHQ9e2FsdH1cclxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgICAgbG9hZGVyPXtteUxvYWRlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggbGc6cmVsYXRpdmUgbGc6ZmxleC0xXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPEdyaWRJdGVtIGM9XCJjb2wtc3Bhbi00IGxnOmNvbC1zcGFuLTVcIj5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMTIgbGc6bXQtMCBsZzpmbGV4LTEgbGc6anVzdGlmeS1zdGFydFwiPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzptYXgtdy04MFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1oMlwiPnt0aXR0ZWx9PC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMTYgdGV4dC1wXCI+e2Jlc2tyaXZlbHNlfTwvcD5cclxuICAgICAgICAgICAgPE1haW5CdXR0b24gYnRuVGV4dD17YnV0dG9uVGV4dH0gcGF0aD17aHJlZn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBpY3R1cmVDYXJkID0gKHtcclxuICBzcmMsXHJcbiAgYWx0LFxyXG4gIHRpdHRlbCxcclxuICBoZWlnaHQsXHJcbiAgd2lkdGgsXHJcbiAgYmVza3JpdmVsc2UsXHJcbiAgYnV0dG9uVGV4dCxcclxuICBocmVmLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpoaWRkZW5cIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgIGxvYWRlcj17bXlMb2FkZXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggbGc6cmVsYXRpdmUgbGc6ZmxleC0xXCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMTIgbGc6bXQtMCBsZzpmbGV4LTEgbGc6anVzdGlmeS1lbmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6bWF4LXctODBcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWgyXCI+e3RpdHRlbH08L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMTYgdGV4dC1wXCI+e2Jlc2tyaXZlbHNlfTwvcD5cclxuICAgICAgICAgIDxNYWluQnV0dG9uIGJ0blRleHQ9e2J1dHRvblRleHR9IHBhdGg9e2hyZWZ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==