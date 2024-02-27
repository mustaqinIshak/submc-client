"use strict";
exports.id = 686;
exports.ids = [686];
exports.modules = {

/***/ 90686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Md: () => (/* binding */ page),
/* harmony export */   Ue: () => (/* binding */ create),
/* harmony export */   eP: () => (/* binding */ edit),
/* harmony export */   ey: () => (/* binding */ getSelected),
/* harmony export */   go: () => (/* binding */ getAll),
/* harmony export */   rw: () => (/* binding */ getIndex),
/* harmony export */   wz: () => (/* binding */ deleteItem),
/* harmony export */   yC: () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7846);

async function getIndex(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: "/getIndexSubCategori",
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
            throw result.data;
        }
    } catch (error) {
        if (error.response.data.id) {
            error.response.data.id.map((item)=>{
                message.push(item);
            });
        }
        const message = [];
        if (error.message) {
            message.push(message);
        }
        throw message;
    }
}
async function getAll(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: "/getAllSubCategori",
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
            throw result.data;
        }
    } catch (error) {
        const message = [];
        if (error.response.data.limit) {
            error.response.data.limit.map((item)=>{
                message.push(item);
            });
        }
        if (error.message) {
            message.push(message);
        }
        throw message;
    }
}
async function search(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: "/getAllSubCategori",
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
            throw result.data;
        }
    } catch (error) {
        const message = [];
        if (error.response.data.limit) {
            error.response.data.limit.map((item)=>{
                message.push(item);
            });
        }
        if (error.message) {
            message.push(message);
        }
        throw message;
    }
}
async function getSelected(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: "/getSelectedSubCategori",
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
            throw result.data;
        }
    } catch (error) {
        const message = [];
        if (error.response.data.id) {
            error.response.data.id.map((item)=>{
                message.push(item);
            });
        }
        if (error.message) {
            message.push(message);
        }
        throw message;
    }
}
async function page(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: `/getAllSubCategori?page=${payload.number}`,
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
            throw result.data;
        }
    } catch (error) {
        const message = [];
        if (error.response.data.id) {
            error.response.data.id.map((item)=>{
                message.push(item);
            });
        }
        if (error.message) {
            message.push(message);
        }
        throw message;
    }
}
async function create(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: `/createSubCategori`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: {
                idCategori: payload.idCategori,
                name: payload.name
            }
        });
        return result.data;
    } catch (error) {
        const message = [];
        if (error.response.data.idCategori) {
            error.response.data.idCategori.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.name) {
            error.response.data.name.map((item)=>{
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
            url: `/updateSubCategori`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: {
                id: payload.id,
                idCategori: payload.idCategori,
                name: payload.name
            }
        });
        return result.data;
    } catch (error) {
        const message = [];
        if (error.response.data.id) {
            error.response.data.id.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.idCategori) {
            error.response.data.idCategori.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.name) {
            error.response.data.name.map((item)=>{
                message.push(item);
            });
        }
        const payload = message.join("");
        throw payload;
    }
}
async function deleteItem(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: `/deleteSubCategori`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: {
                id: payload
            }
        });
        return result.data;
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



/***/ })

};
;