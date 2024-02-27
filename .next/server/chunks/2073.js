exports.id = 2073;
exports.ids = [2073];
exports.modules = {

/***/ 82073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Login)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./components/buttonAllert.js
var buttonAllert = __webpack_require__(50269);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./components/buttonPrimary.js
var buttonPrimary = __webpack_require__(22066);
// EXTERNAL MODULE: ./components/fieldText.js
var fieldText = __webpack_require__(84195);
// EXTERNAL MODULE: ./components/fieldPassword.js
var fieldPassword = __webpack_require__(59580);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./app/api/config.js
var config = __webpack_require__(7846);
;// CONCATENATED MODULE: ./app/api/login.js

async function login(payload) {
    const username = payload.username;
    const password = payload.password;
    try {
        const result = await (0,config/* default */.Z)({
            method: "post",
            url: "/login",
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            data: {
                username: username,
                password: password
            }
        });
        return result.data.token;
    } catch (error) {
        throw error;
    }
}

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./app/login/login.css
var login_login = __webpack_require__(75517);
;// CONCATENATED MODULE: ./app/login/page.js
/* __next_internal_client_entry_do_not_use__ default auto */ 










function Login() {
    const router = (0,navigation.useRouter)();
    const [name, setName] = (0,react_.useState)("");
    const [password, setpassword] = (0,react_.useState)("");
    const [isShowPassword, setisShowPassword] = (0,react_.useState)(false);
    const [isError, setIsError] = (0,react_.useState)("");
    const [isLoading, setIsLoading] = (0,react_.useState)(false);
    const showText = ()=>{
        console.log("hello");
    };
    (0,react_.useEffect)(()=>{
        if (localStorage.getItem("token")) {
            router.replace("/dashboard");
        } else {
            router.replace("/login");
        }
    }, []);
    const fetchLogin = async (event)=>{
        event.preventDefault();
        setIsLoading(true);
        setIsError("");
        try {
            const payload = {
                username: name,
                password: password
            };
            const result = await login(payload);
            if (result) {
                localStorage.setItem("token", result);
                router.replace("/");
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error.response.data);
            setIsError("Username atau password anda salah");
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "center-login",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            alt: "cmm apparel",
                            src: "/logo/logoblack.png",
                            width: 100,
                            height: 100
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-semibold",
                            children: "Portal CMS"
                        })
                    ]
                }),
                isError && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",
                    role: "alert",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-medium",
                            children: "Peringatan!"
                        }),
                        " ",
                        isError
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: fetchLogin,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(fieldText/* FieldText */.y, {
                            name: "Username",
                            id: "username",
                            isRequire: true,
                            placeholder: "username",
                            value: name,
                            setValue: setName
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(fieldPassword/* FieldPassword */.y, {
                            name: "Password",
                            id: "password",
                            placeholder: "password123456",
                            isRequire: true,
                            value: password,
                            setValue: setpassword,
                            isShowPassword: isShowPassword,
                            setisShowPassword: setisShowPassword
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(buttonPrimary/* ButtonPrimary */.D, {
                            isLoading: isLoading,
                            name: "Login",
                            width: "w-full"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 75517:
/***/ (() => {



/***/ })

};
;