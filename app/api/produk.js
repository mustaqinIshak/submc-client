import instance from "./config";

async function getAllProduk(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/getIndexProduk`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: payload
        })
  
        return result.data.data
    } catch (error) {
   
        const message = []

        if(error.response.data.message) {
            message.push(error.response.data.message)
        }
        const payload = message.join('')
        throw payload
    }
}

async function getSelectedProduk(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/getSelectedProduk`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                id: payload
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

        if(error.response.data.message) {
            message.push(error.response.data.message)
        }
        const payload = message.join('')
        throw payload
    }
}

async function search(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/getIndexProduk',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: payload
                // idCategori: payload.idCategori,
                // idSubCategori: payload.idSubCategori,
        })
        if(result.data.status) {
            return result.data.data
        }
    }
    catch(error) {
     
        throw error
    }
}

async function page(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:`/getIndexProduk?page=${payload.number}`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: payload
        })
        if(result.data.status) {
            return result.data.data
        }
    }
    catch(error) {
  
        throw error
    }
}

async function create(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/createProduk`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data:payload
        })
  
        return result.data
    } catch (error) {
   
        const message = []
        if(error.response.data.name) {
            error.response.data.name.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.harga) {
            error.response.data.harga.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.idCategori) {
            error.response.data.idCategori.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.idSubCategori) {
            error.response.data.idSubCategori.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.deskripsi) {
            error.response.data.deskripsi.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.gambar) {
            error.response.data.gambar.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.linkShoope) {
            error.response.data.linkShoope.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.status) {
            error.response.data.status.map((item) => {
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

async function editProduk(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/updateProduk`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data:payload
        })
  
        return result.data
    } catch (error) {
   
        const message = []
        if(error.response.id.name) {
            error.response.id.name.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.name) {
            error.response.data.name.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.harga) {
            error.response.data.harga.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.idCategori) {
            error.response.data.idCategori.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.idSubCategori) {
            error.response.data.idSubCategori.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.deskripsi) {
            error.response.data.deskripsi.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.linkShoope) {
            error.response.data.linkShoope.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.status) {
            error.response.data.status.map((item) => {
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

async function deleteProduk(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:`/deleteProduk`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                id: payload
            }
        })
        if(result.data.status) {
            return result.data.data
        }
    }
    catch(error) {
        const message = []
        if(error.response.id.name) {
            error.response.id.name.map((item) => {
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

async function getCountProduk() {
    try {
        const result = await instance({
            method: 'post',
            url:`/getCountProduk`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
            
        })
        if(result.data.status) {
            return result.data.data
        }
    } catch (error) {
        const message = []
        if(error.response.id.name) {
            error.response.id.name.map((item) => {
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

async function getDownloadStokOfName(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/stok-of-name-Produk/download`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data:payload
        })
        if(result.data.status) {
            return result.data.data
        }
    } catch (error) {
        const message = []
        if(error.response.id.name) {
            error.response.id.name.map((item) => {
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

// 
export {
    getAllProduk,
    getSelectedProduk,
    search,
    page,
    create,
    editProduk,
    deleteProduk,
    getCountProduk,
    getDownloadStokOfName,
}