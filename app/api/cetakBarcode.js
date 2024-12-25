import instance from "./config";

async function index() {
    try {
        const result = await instance({
            method: 'post',
            url:'/barcodes',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
        })
        return result.data
    } catch (error) {
        throw error
    }
}

async function searchBarcode(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/search-barcodes',
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


export {
    index,
    searchBarcode,
}