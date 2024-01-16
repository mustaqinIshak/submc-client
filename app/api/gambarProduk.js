import instance from "./config";

async function getGambarProduk(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/getGambarProduk`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                id: payload,
            }
        })
        return result.data
    } catch (error) {
    
        const message = []
        if(error.response.data.id) {
            error.response.data.id.map((item) => {
                message.push(item)
            })
        }
        const payload = message.join('')
        throw payload
    }
}

async function createGambarProduk(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/createGambarProduk`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: payload
        })
        return result.data
    } catch (error) {
    
        const message = []
        if(error.response.data.idProduk) {
            error.response.data.idProduk.map((item) => {
                message.push(item)
            })
        }

        if(error.response.data.gambar) {
            error.response.data.gambar.map((item) => {
                message.push(item)
            })
        }
        const payload = message.join('')
        throw payload
    }
}


async function deleteGambar(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/deleteGambarProduk`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                id: payload.id,
                idProduk: payload.idProduk
            }
        })
        return result.data
    } catch (error) {
    
        const message = []
        if(error.response.data.id) {
            error.response.data.id.map((item) => {
                message.push(item)
            })
        }

        if(error.response.data.message) {
            message.push(error.response.data.message)
        }
        const payload = message.join('')
        throw payload
    }
}

export {
    getGambarProduk,
    createGambarProduk,
    deleteGambar,
}