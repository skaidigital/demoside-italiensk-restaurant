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
      c: "col-span-4 md:col-start-5 lg:col-start-7 lg:col-span-6 items-self-stretch grid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "flex",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          objectFit: " ",
          src: src,
          alt: alt,
          layout: layout,
          height: height,
          width: width,
          loader: myLoader,
          className: "h-auto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)
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
      c: "col-span-4 row-start-1 lg:col-span-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-h2",
        children: tittel
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-16 text-p",
        children: beskrivelse
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_Buttons__WEBPACK_IMPORTED_MODULE_3__.MainButton, {
        btnText: buttonText,
        path: href
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      c: "col-span-4 lg:col-span-6 grid items-self-stretch",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        objectFit: "cover",
        src: src,
        alt: alt,
        height: height,
        width: width,
        loader: myLoader
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_BaseElementer__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
      c: "col-span-4 lg:col-span-5 md:col-start-5 lg:col-start-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-h2",
        children: tittel
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "my-16 text-p",
        children: beskrivelse
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sm_Buttons__WEBPACK_IMPORTED_MODULE_3__.MainButton, {
        btnText: buttonText,
        path: href
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9yZS9DYXJkcy5qcyJdLCJuYW1lcyI6WyJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsIlBpY3R1cmVDYXJkUmV2ZXJzZWQiLCJhbHQiLCJ0aXR0ZWwiLCJiZXNrcml2ZWxzZSIsImJ1dHRvblRleHQiLCJocmVmIiwiaGVpZ2h0IiwibGF5b3V0IiwiUGljdHVyZUNhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTZCO0FBQUEsTUFBMUJDLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDNUMsK0VBQXNFRixHQUF0RTtBQUNELENBRkQ7O0FBSU8sSUFBTUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixRQVU3QjtBQUFBLE1BVEpILEdBU0ksU0FUSkEsR0FTSTtBQUFBLE1BUkpJLEdBUUksU0FSSkEsR0FRSTtBQUFBLE1BUEpDLE1BT0ksU0FQSkEsTUFPSTtBQUFBLE1BTkpDLFdBTUksU0FOSkEsV0FNSTtBQUFBLE1BTEpDLFVBS0ksU0FMSkEsVUFLSTtBQUFBLE1BSkpDLElBSUksU0FKSkEsSUFJSTtBQUFBLE1BSEpDLE1BR0ksU0FISkEsTUFHSTtBQUFBLE1BRkpSLEtBRUksU0FGSkEsS0FFSTtBQUFBLE1BREpTLE1BQ0ksU0FESkEsTUFDSTtBQUNKLHNCQUNFLDhEQUFDLG1EQUFEO0FBQUEsNEJBQ0UsOERBQUMsdURBQUQ7QUFBVSxPQUFDLEVBQUMsZ0ZBQVo7QUFBQSw2QkFDRTtBQUFLLGlCQUFNLE1BQVg7QUFBQSwrQkFDRSw4REFBQyxtREFBRDtBQUNFLG1CQUFTLEVBQUMsR0FEWjtBQUVFLGFBQUcsRUFBRVYsR0FGUDtBQUdFLGFBQUcsRUFBRUksR0FIUDtBQUlFLGdCQUFNLEVBQUVNLE1BSlY7QUFLRSxnQkFBTSxFQUFFRCxNQUxWO0FBTUUsZUFBSyxFQUFFUixLQU5UO0FBT0UsZ0JBQU0sRUFBRUYsUUFQVjtBQVFFLG1CQUFTLEVBQUM7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWVFLDhEQUFDLHVEQUFEO0FBQVUsT0FBQyxFQUFDLHNDQUFaO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFNBQWQ7QUFBQSxrQkFBeUJNO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUEsa0JBQTZCQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSw4REFBQyxtREFBRDtBQUFZLGVBQU8sRUFBRUMsVUFBckI7QUFBaUMsWUFBSSxFQUFFQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0FsQ007S0FBTUwsbUI7QUFvQ04sSUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsUUFTckI7QUFBQSxNQVJKWCxHQVFJLFNBUkpBLEdBUUk7QUFBQSxNQVBKSSxHQU9JLFNBUEpBLEdBT0k7QUFBQSxNQU5KQyxNQU1JLFNBTkpBLE1BTUk7QUFBQSxNQUxKSSxNQUtJLFNBTEpBLE1BS0k7QUFBQSxNQUpKUixLQUlJLFNBSkpBLEtBSUk7QUFBQSxNQUhKSyxXQUdJLFNBSEpBLFdBR0k7QUFBQSxNQUZKQyxVQUVJLFNBRkpBLFVBRUk7QUFBQSxNQURKQyxJQUNJLFNBREpBLElBQ0k7QUFDSixzQkFDRSw4REFBQyxtREFBRDtBQUFBLDRCQUNFLDhEQUFDLHVEQUFEO0FBQVUsT0FBQyxFQUFDLGtEQUFaO0FBQUEsNkJBQ0UsOERBQUMsbURBQUQ7QUFDRSxpQkFBUyxFQUFDLE9BRFo7QUFFRSxXQUFHLEVBQUVSLEdBRlA7QUFHRSxXQUFHLEVBQUVJLEdBSFA7QUFJRSxjQUFNLEVBQUVLLE1BSlY7QUFLRSxhQUFLLEVBQUVSLEtBTFQ7QUFNRSxjQUFNLEVBQUVGO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVdFLDhEQUFDLHVEQUFEO0FBQVUsT0FBQyxFQUFDLHdEQUFaO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFNBQWQ7QUFBQSxrQkFBeUJNO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUEsa0JBQTZCQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSw4REFBQyxtREFBRDtBQUFZLGVBQU8sRUFBRUMsVUFBckI7QUFBaUMsWUFBSSxFQUFFQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0E3Qk07TUFBTUcsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NzcxMzgxMzRmMjljNGZjYTU0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IEdyaWQsIEdyaWRJdGVtIH0gZnJvbSBcIi4uL1Ntw6UvQmFzZUVsZW1lbnRlclwiO1xyXG5pbXBvcnQgeyBNYWluQnV0dG9uIH0gZnJvbSBcIi4uL1Ntw6UvQnV0dG9uc1wiO1xyXG5cclxuY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcclxuICByZXR1cm4gYGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3NrYWktZGlnaXRhbC9pbWFnZS91cGxvYWQvcV9hdXRvLyR7c3JjfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUGljdHVyZUNhcmRSZXZlcnNlZCA9ICh7XHJcbiAgc3JjLFxyXG4gIGFsdCxcclxuICB0aXR0ZWwsXHJcbiAgYmVza3JpdmVsc2UsXHJcbiAgYnV0dG9uVGV4dCxcclxuICBocmVmLFxyXG4gIGhlaWdodCxcclxuICB3aWR0aCxcclxuICBsYXlvdXQsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQ+XHJcbiAgICAgIDxHcmlkSXRlbSBjPVwiY29sLXNwYW4tNCBtZDpjb2wtc3RhcnQtNSBsZzpjb2wtc3RhcnQtNyBsZzpjb2wtc3Bhbi02IGl0ZW1zLXNlbGYtc3RyZXRjaCBncmlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCIgXCJcclxuICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgICAgICBsYXlvdXQ9e2xheW91dH1cclxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgICAgbG9hZGVyPXtteUxvYWRlcn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1hdXRvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgIDxHcmlkSXRlbSBjPVwiY29sLXNwYW4tNCByb3ctc3RhcnQtMSBsZzpjb2wtc3Bhbi01XCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtaDJcIj57dGl0dGVsfTwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMTYgdGV4dC1wXCI+e2Jlc2tyaXZlbHNlfTwvcD5cclxuICAgICAgICA8TWFpbkJ1dHRvbiBidG5UZXh0PXtidXR0b25UZXh0fSBwYXRoPXtocmVmfSAvPlxyXG4gICAgICA8L0dyaWRJdGVtPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUGljdHVyZUNhcmQgPSAoe1xyXG4gIHNyYyxcclxuICBhbHQsXHJcbiAgdGl0dGVsLFxyXG4gIGhlaWdodCxcclxuICB3aWR0aCxcclxuICBiZXNrcml2ZWxzZSxcclxuICBidXR0b25UZXh0LFxyXG4gIGhyZWYsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQ+XHJcbiAgICAgIDxHcmlkSXRlbSBjPVwiY29sLXNwYW4tNCBsZzpjb2wtc3Bhbi02IGdyaWQgaXRlbXMtc2VsZi1zdHJldGNoXCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgIGFsdD17YWx0fVxyXG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICBsb2FkZXI9e215TG9hZGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgIDxHcmlkSXRlbSBjPVwiY29sLXNwYW4tNCBsZzpjb2wtc3Bhbi01IG1kOmNvbC1zdGFydC01IGxnOmNvbC1zdGFydC04XCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtaDJcIj57dGl0dGVsfTwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMTYgdGV4dC1wXCI+e2Jlc2tyaXZlbHNlfTwvcD5cclxuICAgICAgICA8TWFpbkJ1dHRvbiBidG5UZXh0PXtidXR0b25UZXh0fSBwYXRoPXtocmVmfSAvPlxyXG4gICAgICA8L0dyaWRJdGVtPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=