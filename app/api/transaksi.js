import instance from "./config";

async function searchProdukTransaksi(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/transaction/search-products',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: payload
        })
        return result.data
    }
    catch(error) {
        throw error
    }
}

async function  store(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:'/transaction/search-products',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: payload
        })
        return result.data
    } catch (error) {
        throw error
    }
}

export {
    searchProdukTransaksi,
    store,
}