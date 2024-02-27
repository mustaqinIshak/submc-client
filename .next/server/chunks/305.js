"use strict";
exports.id = 305;
exports.ids = [305];
exports.modules = {

/***/ 30305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Select2Kategori)
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
/* harmony import */ var _app_api_kategori__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10320);
/* __next_internal_client_entry_do_not_use__ Select2Kategori auto */ 





function Select2Kategori({ value, setValue, isError, keterangan }) {
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default()((sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()));
    const loadOption = async ()=>{
        try {
            const arr = [];
            const response = await (0,_app_api_kategori__WEBPACK_IMPORTED_MODULE_4__/* .getIndex */ .rw)();
            console.log(response);
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
                            name: "silahkan Memilih Kategori"
                        },
                        label: "silahkan Memilih Kategori"
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
                children: "Kategori"
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


/***/ })

};
;