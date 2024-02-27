"use strict";
exports.id = 6326;
exports.ids = [6326];
exports.modules = {

/***/ 41529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jd: () => (/* binding */ getAllProduk),
/* harmony export */   Md: () => (/* binding */ page),
/* harmony export */   N9: () => (/* binding */ editProduk),
/* harmony export */   Ue: () => (/* binding */ create),
/* harmony export */   Z0: () => (/* binding */ deleteProduk),
/* harmony export */   jx: () => (/* binding */ getSelectedProduk),
/* harmony export */   yC: () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7846);

async function getAllProduk(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: `/getIndexProduk`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: {
                limit: payload.limit,
                search: payload.search
            }
        });
        return result.data.data;
    } catch (error) {
        const message = [];
        if (error.response.data.message) {
            message.push(error.response.data.message);
        }
        const payload = message.join("");
        throw payload;
    }
}
async function getSelectedProduk(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: `/getSelectedProduk`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: {
                id: payload
            }
        });
        return result.data.data;
    } catch (error) {
        const message = [];
        if (error.response.data.id) {
            error.response.data.id.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.message) {
            message.push(error.response.data.message);
        }
        const payload = message.join("");
        throw payload;
    }
}
async function search(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: "/getIndexProduk",
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
            url: `/getIndexProduk?page=${payload.number}`,
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
async function create(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: `/createProduk`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: payload
        });
        return result.data;
    } catch (error) {
        const message = [];
        if (error.response.data.name) {
            error.response.data.name.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.harga) {
            error.response.data.harga.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.idCategori) {
            error.response.data.idCategori.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.idSubCategori) {
            error.response.data.idSubCategori.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.deskripsi) {
            error.response.data.deskripsi.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.gambar) {
            error.response.data.gambar.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.linkShoope) {
            error.response.data.linkShoope.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.status) {
            error.response.data.status.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.message) {
            message.push(error.response.data.message);
        }
        const payload = message.join("");
        throw payload;
    }
}
async function editProduk(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: `/updateProduk`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            data: payload
        });
        return result.data;
    } catch (error) {
        const message = [];
        if (error.response.id.name) {
            error.response.id.name.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.name) {
            error.response.data.name.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.harga) {
            error.response.data.harga.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.idCategori) {
            error.response.data.idCategori.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.idSubCategori) {
            error.response.data.idSubCategori.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.deskripsi) {
            error.response.data.deskripsi.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.linkShoope) {
            error.response.data.linkShoope.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.status) {
            error.response.data.status.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.message) {
            message.push(error.response.data.message);
        }
        const payload = message.join("");
        throw payload;
    }
}
async function deleteProduk(payload) {
    try {
        const result = await (0,_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            method: "post",
            url: `/deleteProduk`,
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
        const message = [];
        if (error.response.id.name) {
            error.response.id.name.map((item)=>{
                message.push(item);
            });
        }
        if (error.response.data.message) {
            message.push(error.response.data.message);
        }
        const payload = message.join("");
        throw payload;
    }
}



/***/ }),

/***/ 10044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ handleChangeRupiah)
/* harmony export */ });
function handleChangeRupiah(angka) {
    if (angka) {
        angka = angka + "";
        var number_string = angka.replace(/[^,\d]/g, "").toString(), split = number_string.split(","), sisa = split[0].length % 3, rupiah = split[0].substr(0, sisa), ribuan = split[0].substr(sisa).match(/\d{3}/gi);
        // tambahkan titik jika yang di input sudah menjadi angka ribuan
        if (ribuan) {
            let separator = sisa ? "." : "";
            rupiah += separator + ribuan.join(".");
        }
        rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
        return rupiah;
    }
}


/***/ })

};
;