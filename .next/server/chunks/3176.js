"use strict";
exports.id = 3176;
exports.ids = [3176];
exports.modules = {

/***/ 43176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Md: () => (/* binding */ page),
/* harmony export */   R_: () => (/* binding */ getSelectedUser),
/* harmony export */   Ue: () => (/* binding */ create),
/* harmony export */   Y8: () => (/* binding */ getAllUser),
/* harmony export */   eP: () => (/* binding */ edit),
/* harmony export */   h8: () => (/* binding */ deleteUser),
/* harmony export */   yC: () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7846);

async function getAllUser(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: "/userAll",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: {
                limit: payload.limit
            }
        });
        return result.data;
    } catch (error) {
        throw error;
    }
}
async function search(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: "/userAll",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: {
                limit: payload.limit,
                search: payload.search
            }
        });
        if (result.data.status) {
            return result.data.data;
        }
    } catch (error) {
        throw error;
    }
}
async function page(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: `/userAll?page=${payload.number}`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: {
                limit: payload.limit,
                search: payload.search
            }
        });
        if (result.data.status) {
            return result.data.data;
        }
    } catch (error) {
        throw error;
    }
}
async function getSelectedUser(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: "/user",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: {
                id: payload
            }
        });
        if (result.data.status) {
            return result.data.data;
        }
    } catch (error) {
        throw error;
    }
}
async function create(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: "/addUser",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: {
                "name": payload.name,
                "username": payload.username,
                "password": payload.password,
                "id_role": payload.id_role
            }
        });
        return result.data;
    } catch (error) {
        const message = [];
        if (error.response.data.name) {
            error.response.data.name.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.username) {
            error.response.data.username.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.password) {
            error.response.data.password.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.id_role) {
            error.response.data.id_role.map((item)=>{
                message.push(item);
            });
        }
        const payload = message.join("");
        throw payload;
    }
}
async function edit(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: "/editUser",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: payload
        });
        return result.data;
    } catch (error) {
        const message = [];
        if (error.response.data.id) {
            error.response.data.id.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.name) {
            error.response.data.name.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.username) {
            error.response.data.username.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.password) {
            error.response.data.password.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.id_role) {
            error.response.data.id_role.map((item)=>{
                message.push(item);
            });
        }
        const payload = message.join("");
        throw payload;
    }
}
async function deleteUser(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: "/deleteUser",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: {
                "id": payload
            }
        });
        if (result.data.status) {
            return Promise;
        } else {
            throw result.data.message;
        }
    } catch (error) {
        throw error;
    }
}



/***/ })

};
;