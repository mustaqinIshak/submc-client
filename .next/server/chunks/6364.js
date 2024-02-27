"use strict";
exports.id = 6364;
exports.ids = [6364];
exports.modules = {

/***/ 53480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ FieldNumber)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./helpers/handleKeyPress.js
function HandleKeyPress(event) {
    const keyCode = event.which || event.keyCode;
    const keyValue = String.fromCharCode(keyCode);
    // if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
    //     return
    // }
    if (/[^0-9\b\t]/.test(keyValue)) {
        event.preventDefault();
    }
// if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
//     return;
//   }
//   // Check if pasted content contains only numerical values
//   if (event.clipboardData) {
//     const pastedData = event.clipboardData.getData('text');
//     if (/^[0-9]+$/.test(pastedData)) {
//       return;
//     }
//   }
// Prevent default behavior for all other keys
//   event.preventDefault();
}

;// CONCATENATED MODULE: ./components/fieldNumber.js


const FieldNumber = ({ name = "field Number", id = "field Number", placeholder = "placeholder", isRequire = true, value, setValue, isError, keterangan })=>{
    const handleInput = (e)=>{
        const inputValue = e.target.value;
        // Allow digits and a single decimal point
        const newValue = inputValue.replace(/[^0-9.]/g, "");
        setValue(newValue);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: id,
                className: " block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                children: name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                id: id,
                className: "   bg-gray-50    border    border-gray-300    text-gray-900    text-sm    rounded-lg    focus:ring-blue-500    focus:border-blue-500    block w-full p-2.5    dark:bg-gray-700    dark:border-gray-600    dark:placeholder-gray-400    dark:text-white    dark:focus:ring-blue-500    dark:focus:border-blue-500",
                placeholder: placeholder,
                onKeyDown: HandleKeyPress,
                value: value,
                pattern: "[0-9.]*",
                onChange: handleInput,
                required: isRequire ? true : false
            }),
            isError && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-2 text-sm text-red-500",
                children: keterangan
            })
        ]
    });
};


/***/ }),

/***/ 72010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ FieldRupiah)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_handleChangRupiah__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10044);


const FieldRupiah = ({ value, setValue, title, isRequired = true, isError, keterangan })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-6 w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: title,
                className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                children: title
            }),
            isRequired ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                id: title,
                className: "   block    w-full    p-2    text-gray-900 border    border-gray-300    rounded-lg    bg-gray-50    sm:text-xs    focus:ring-blue-500    focus:border-blue-500    ",
                value: value,
                onChange: (e)=>setValue((0,_helpers_handleChangRupiah__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(e.target.value)),
                required: true
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                id: title,
                className: "   block    w-full    p-2    text-gray-900 border    border-gray-300    rounded-lg    bg-gray-50    sm:text-xs    focus:ring-blue-500    focus:border-blue-500    ",
                value: value,
                onChange: (e)=>setValue((0,_helpers_handleChangRupiah__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(e.target.value))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "mt-2 text-sm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-medium",
                        children: "Exp:Rp. 570.000"
                    }),
                    " Input harus berupa angka"
                ]
            }),
            isError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-2 text-sm text-red-500",
                children: keterangan
            })
        ]
    });
};


/***/ }),

/***/ 90804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FieldTanggal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function FieldTanggal({ name, value, setValue, handleChange, isError, keterangan, isRequire }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-6 flex gap-3 items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                htmlFor: "small-input",
                className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                children: [
                    name,
                    " :"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative max-w-sm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            "aria-hidden": "true",
                            className: "w-5 h-5 text-gray-500 dark:text-gray-400",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                                clipRule: "evenodd"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "date",
                        className: "   bg-gray-50    border    border-gray-300    text-gray-900    text-sm    rounded-lg    focus:ring-blue-500    focus:border-blue-500    block    mx:w-48     pl-10    p-2.5    ",
                        placeholder: "Select date",
                        value: value,
                        onChange: (e)=>{
                            setValue(e.target.value);
                        },
                        required: isRequire ? true : false
                    })
                ]
            }),
            isError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-2 text-sm text-red-500",
                children: keterangan
            })
        ]
    });
}


/***/ }),

/***/ 33434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ FieldTextArea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FieldTextArea = ({ name = "field text Area", id = "field text Area", placeholder = "placeholder", isRequire = true, value, setValue, isError, keterangan })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: id,
                className: " block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                rows: "4",
                id: id,
                className: "   block    p-2.5    w-full    text-sm    text-gray-900    bg-gray-50    rounded-lg border    border-gray-300    focus:ring-blue-500    focus:border-blue-500    dark:bg-gray-700    dark:border-gray-600    dark:placeholder-gray-400    dark:text-white    dark:focus:ring-blue-500    dark:focus:border-blue-500",
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


/***/ }),

/***/ 19433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MultiplePicForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function MultiplePicForm({ state, handleState, isError, keterangan }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-center w-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    htmlFor: "dropzone-file",
                    className: "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col items-center justify-center pt-5 pb-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: "w-8 h-8 mb-4 text-gray-500 dark:text-gray-400",
                                    "aria-hidden": "true",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 20 16",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mb-2 text-sm text-gray-500 dark:text-gray-400",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "font-semibold",
                                            children: "Click to upload"
                                        }),
                                        " or drag and drop"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                    children: "SVG, PNG, JPG or GIF (MAX. 800x400px)"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            id: "dropzone-file",
                            type: "file",
                            className: "hidden",
                            accept: "image/*",
                            multiple: true,
                            onChange: handleState
                        })
                    ]
                })
            }),
            isError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-2 text-sm text-red-500",
                children: keterangan
            })
        ]
    });
}


/***/ }),

/***/ 3210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ Select2SubKategori)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47640);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99322);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55742);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_api_subKategori__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90686);
/* __next_internal_client_entry_do_not_use__ Select2SubKategori auto */ 





function Select2SubKategori({ idKategori, value, setValue, isError, keterangan }) {
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default()((sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()));
    const loadOption = async ()=>{
        try {
            const arr = [];
            const response = await (0,_app_api_subKategori__WEBPACK_IMPORTED_MODULE_4__/* .getIndex */ .rw)(idKategori);
            if (response) {
                response.map((item)=>{
                    const payload = {
                        value: {
                            id: item["id"],
                            name: item["name"]
                        },
                        label: `${item["name"]}`
                    };
                    arr.push(payload);
                });
                setData(arr);
            } else {
                const defaultData = [
                    {
                        value: {
                            id: 0,
                            name: "Belum Ada Sub Kategori, Silahkan Buat Terlebih Dahulu"
                        },
                        label: "Belum Ada Sub Kategori, Silahkan Buat Terlebih Dahulu"
                    }
                ];
                setData(defaultData);
            }
        } catch (err) {
            MySwal.fire({
                icon: "error",
                title: err.message
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadOption();
    }, []);
    const handleOption = (value)=>{
        setValue(value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: " block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                children: "Sub Kategori"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                options: data,
                value: value,
                className: "basic-single",
                onChange: handleOption,
                isLoading: !data.length,
                required: true
            }),
            isError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-2 text-sm text-red-500",
                children: keterangan
            })
        ]
    });
}


/***/ }),

/***/ 29096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ normalizeBayar)
/* harmony export */ });
function normalizeBayar(nilai) {
    console.log("ini di normalieBayar", nilai);
    if (nilai) {
        const arr = nilai.split(".").join("");
        const filter = parseInt(arr.toString().replace(/[^0-9]/g, ""));
        return filter;
    }
}


/***/ })

};
;