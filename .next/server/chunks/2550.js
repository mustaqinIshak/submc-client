"use strict";
exports.id = 2550;
exports.ids = [2550];
exports.modules = {

/***/ 52550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Togle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Togle({ title, value, setValue, disable = false }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mb-6",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            className: "relative inline-flex items-center cursor-pointer",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    checked: value,
                    type: "checkbox",
                    value: value,
                    onChange: (e)=>setValue(!value),
                    className: "sr-only peer",
                    disabled: disable
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "   w-11    h-6    bg-gray-200    peer-focus:outline-none    peer-focus:ring-4    peer-focus:ring-blue-300    dark:peer-focus:ring-blue-800    rounded-full peer    dark:bg-gray-700    peer-checked:after:translate-x-full    peer-checked:after:border-white after:content-['']    after:absolute    after:top-[2px]    after:left-[2px]    after:bg-white    after:border-gray-300    after:border    after:rounded-full    after:h-5    after:w-5    after:transition-all    dark:border-gray-600    peer-checked:bg-blue-600"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",
                    children: title
                })
            ]
        })
    });
}


/***/ })

};
;