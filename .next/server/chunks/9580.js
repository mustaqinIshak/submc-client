"use strict";
exports.id = 9580;
exports.ids = [9580];
exports.modules = {

/***/ 59580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ FieldPassword)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80418);


const FieldPassword = ({ name = "field password", id = "field password", placeholder = "placeholder", isRequire = true, value, setValue, isShowPassword = false, setisShowPassword, isError, keterangan })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: id,
                className: " block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                children: name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: isShowPassword ? "text" : "password",
                        id: id,
                        className: "   bg-gray-50    border    border-gray-300    text-gray-900    text-sm    rounded-lg    focus:ring-blue-500    focus:border-blue-500    block w-full p-2.5    dark:bg-gray-700    dark:border-gray-600    dark:placeholder-gray-400    dark:text-white    dark:focus:ring-blue-500    dark:focus:border-blue-500",
                        placeholder: placeholder,
                        value: value,
                        onChange: (e)=>setValue(e.target.value),
                        required: isRequire ? true : false
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "   absolute    right-2.5   bottom-2.5   flex    items-center    pl-3   cursor-pointer   ",
                        onClick: ()=>setisShowPassword(!isShowPassword),
                        children: isShowPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__/* .RiEyeLine */ .VhL, {
                            className: "text-black dark:text-white"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__/* .RiEyeCloseLine */ .nO8, {
                            className: " text-black dark:text-white"
                        })
                    })
                ]
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