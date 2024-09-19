import instance from "./config";

async function metodePembayaran() {
    try{
        const result = await instance({
            method: 'post',
            url:'/jenisPembayaran',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
        })
        console.log(result)
        return result.data
    }
    catch(error) {
        throw error
    }
}

export {
    metodePembayaran
}