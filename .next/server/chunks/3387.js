"use strict";
exports.id = 3387;
exports.ids = [3387];
exports.modules = {

/***/ 11749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function Pagination({ first, last, total, pageNumber, pageHandle, previousHandle, nextHandle }) {
    const loopArray = Array.from({
        length: last
    }, (_, index)=>index);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: last > first && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: "mt-6 w-full flex items-center justify-center",
            "aria-label": "Page navigation example",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "inline-flex -space-x-px text-base h-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: previousHandle,
                            className: `
                                    flex 
                                    items-center 
                                    justify-center 
                                    px-4 
                                    h-10 
                                    ml-0 
                                    leading-tight 
                                    text-gray-500 
                                    bg-white border 
                                    border-gray-300 
                                    rounded-l-lg 
                                    hover:bg-gray-100 
                                    hover:text-gray-700 
                                    dark:bg-gray-800 
                                    dark:border-gray-700 
                                    dark:text-gray-400 
                                    dark:hover:bg-gray-700 
                                    dark:hover:text-white
                                    `,
                            children: "Prev"
                        })
                    }),
                    loopArray.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            onClick: ()=>pageHandle(item + 1),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `
                                            ${pageNumber == item + 1 ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 "}
                                            flex 
                                            items-center 
                                            justify-center 
                                            px-4 
                                            h-10 
                                            border
                                            border-gray-300 
                                            `,
                                children: item + 1
                            })
                        }, index)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: nextHandle,
                            className: `
                                 
                                    flex 
                                    items-center 
                                    justify-center 
                                    px-4 
                                    h-10 
                                    leading-tight 
                                    text-gray-500 
                                    bg-white border 
                                    border-gray-300 
                                    rounded-r-lg 
                                    hover:bg-gray-100 
                                    hover:text-gray-700 
                                    dark:bg-gray-800 
                                    dark:border-gray-700 
                                    dark:text-gray-400 
                                    dark:hover:bg-gray-700 
                                    dark:hover:text-white
                                    `,
                            children: "Next"
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 32724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SearchForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SearchForm({ value, setValue, action }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: "",
            onSubmit: action,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    htmlFor: "default-search",
                    className: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",
                    children: "Search"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative w-96",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                "aria-hidden": "true",
                                className: "w-5 h-5 text-gray-500 dark:text-gray-400",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "search",
                            id: "default-search",
                            className: "   block    w-full    p-4    pl-10    text-sm    text-gray-900    border    border-gray-300    rounded-lg    bg-gray-50    focus:ring-blue-500    focus:border-blue-500    ",
                            placeholder: "Silahkan Masukkan data yg ingin dicari",
                            value: value,
                            onChange: (e)=>setValue(e.target.value)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: "   text-white    absolute    right-2.5    bottom-2.5    bg-blue-700    hover:bg-blue-800    focus:ring-4    focus:outline-none    focus:ring-blue-300    font-medium    rounded-lg    text-sm    px-4    py-2    dark:bg-blue-600    dark:hover:bg-blue-700    dark:focus:ring-blue-800",
                            children: "Cari"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 40336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ SelectRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SelectRow = ({ value, setValue, id, width })=>{
    const jumlahRow = [
        10,
        25,
        50,
        100
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
            id: id,
            className: `
                        bg-gray-50 
                        border 
                        border-gray-300 
                        text-gray-900 
                        text-sm 
                        rounded-lg 
                        focus:ring-blue-500 
                        focus:border-blue-500 
                        block 
                        ${width ? `${width}` : `w-auto`}  
                        p-2.5 
                        `,
            value: value,
            onChange: (e)=>setValue(e.target.value),
            children: jumlahRow.map((item, index)=>{
                return item === "10" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                    defaultValue: item,
                    value: item,
                    children: item
                }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                    value: item,
                    children: item
                }, index);
            })
        })
    });
};


/***/ })

};
;