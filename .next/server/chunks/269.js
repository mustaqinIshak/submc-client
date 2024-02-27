"use strict";
exports.id = 269;
exports.ids = [269];
exports.modules = {

/***/ 50269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ButtonAllert({ name = "button", action = ()=>{
    console.log("no function in button allert");
}, width = "w-auto" }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            type: "button",
            className: `
                focus:outline-none 
                text-white 
                bg-red-700 
                hover:bg-red-800 
                focus:ring-4 
                focus:ring-red-300 
                font-medium 
                rounded-lg 
                text-sm 
                px-5 
                py-2.5 
                mr-2 
                mb-2 
                dark:bg-red-600 
                dark:hover:bg-red-700 
                dark:focus:ring-red-900
                ${width}                      
                `,
            onClick: action,
            children: name
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonAllert);


/***/ })

};
;