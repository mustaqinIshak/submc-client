import instance from "./config";

async function searchReport(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/report-transaksi',
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

async function page(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:`/report-transaksi?page=${payload.number}`,
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

async function downloadReport(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:`/report-transaksi/download-excel`,
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
// 
export {
    searchReport,
    page,
    downloadReport,
}