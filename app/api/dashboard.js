import instance from "./config";

async function getCharts(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/dashboard-chart',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: payload
        })
        if(result.data.status) {
            return result.data.data
        } else {
            throw result.data
        }
    }
    catch {
     
        const message = []
        if(error.message) {
            message.push(message)
        }
        throw message
    }
}

export {
    getCharts,
}