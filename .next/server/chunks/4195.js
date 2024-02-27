"use strict";
exports.id = 4195;
exports.ids = [4195];
exports.modules = {

/***/ 84195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ FieldText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FieldText = ({ name = "field text", id = "field text", placeholder = "placeholder", isRequire = true, value, setValue, isError, keterangan })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: id,
                className: " block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                id: id,
                className: "   bg-gray-50    border    border-gray-300    text-gray-900    text-sm    rounded-lg    focus:ring-blue-500    focus:border-blue-500    block w-full p-2.5    dark:bg-gray-700    dark:border-gray-600    dark:placeholder-gray-400    dark:text-white    dark:focus:ring-blue-500    dark:focus:border-blue-500",
                placeholder: placeholder,
                value: value,
                onChange: (e)=>setValue(e.target.value),
                required: isRequire ? true : false
            }),
            isError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-2 text-sm text-red-500",
                children: keterangan
            })
        ]
    });
};


/***/ })

};
;