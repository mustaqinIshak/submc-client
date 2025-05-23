import instance from "./config";

async function getSize(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/getSize`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                id: payload,
            }
        })
        return result.data.data
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

async function createSize(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/createSize`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                idProduk: payload.idProduk,
                nama_artikel: payload.nama_artikel,
                name: payload.name,
                jumlah: payload.jumlah
            }
        })
        return result.data
    } catch (error) {
    
        const message = []
        if(error.response.data.idProduk) {
            error.response.data.id.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.name) {
            error.response.data.name.map((item) => {
                message.push(item)
            })
        }

        if(error.response.data.jumlah) {
            error.response.data.jumlah.map((item) => {
                message.push(item)
            })
        }
        const payload = message.join('')
        throw payload
    }
}

async function edit(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/updateSize`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                id: payload.id,
                name: payload.name,
                jumlah: payload.jumlah,
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
        if(error.response.data.name) {
            error.response.data.name.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.jumlah) {
            error.response.data.jumlah.map((item) => {
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

async function deleteItem(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/deleteSize`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                id: payload.id,
                idProduk : payload.idProduk
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
    getSize,
    createSize,
    edit,
    deleteItem,
}