"use strict";
exports.id = 4839;
exports.ids = [4839];
exports.modules = {

/***/ 94839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Md: () => (/* binding */ page),
/* harmony export */   U2: () => (/* binding */ get),
/* harmony export */   Ue: () => (/* binding */ create),
/* harmony export */   d0: () => (/* binding */ getRoleUser),
/* harmony export */   eP: () => (/* binding */ edit),
/* harmony export */   ey: () => (/* binding */ getSelected)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7846);

async function getRoleUser() {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: "getAllRoleUser",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        if (result.data.status) {
            return result.data.data;
        } else {
            throw result.data.message;
        }
    } catch (error) {
        throw error;
    }
}
async function get(payload) {
    try {
        if (payload.search) {
            const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
                method: "post",
                url: "getRoleUser",
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
        } else {
            const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
                method: "post",
                url: "getRoleUser",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                data: {
                    limit: payload.limit
                }
            });
            if (result.data.status) {
                return result.data.data;
            } else {
                throw result.data.message;
            }
        }
    } catch (error) {
        throw error;
    }
}
async function page(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: `/getRoleUser?page=${payload.number}`,
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
        } else {
            throw result.data.message;
        }
    } catch (error) {
        throw error;
    }
}
async function getSelected(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: "getSelectedRoleUser",
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
        } else {
            throw result.data.message;
        }
    } catch (error) {
        const message = [];
        if (error.response.data.id) {
            error.response.data.id.map((item)=>{
                message.push(item);
            });
        }
        const payload = message.join("");
        throw payload;
    }
}
async function create(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: "createRoleUser",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: payload
        });
        return result.data.status;
    } catch (error) {
        const message = [];
        if (error.response.data.name) {
            error.response.data.name.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.aksesMenu) {
            error.response.data.aksesMenu.map((item)=>{
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
            url: "editRoleUser",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: payload
        });
        if (result.data.status) {
            return result.data.status;
        } else {
            throw result.data.message;
        }
    } catch (error) {
        const message = [];
        if (error.response.data.name) {
            error.response.data.name.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.aksesMenu) {
            error.response.data.aksesMenu.map((item)=>{
                message.push(item);
            });
        }
        const payload = message.join("");
        throw payload;
    }
}



/***/ })

};
;