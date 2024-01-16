import instance from "./config";

// 

async function getAllBanner(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/getBannerHome`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
        })
  
        return result.data
    } catch (error) {
   
        const message = []
        if(error.response.data.gambar) {
            error.response.data.gambar.map((item) => {
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


async function create(payload) {

    try {
        const result = await instance({
            method: 'post',
            url:`/createBannerHome`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: payload,
        })
        return result.data
    } catch (error) {
 
        const message = []
        if(error.response.data.gambar) {
            error.response.data.gambar.map((item) => {
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

async function deleteBanner(payload) {

    try {
        const result = await instance({
            method: 'post',
            url:`/deleteBannerHome`,
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

        if(error.response.data.message) {
            message.push(error.response.data.message)
        }
        const payload = message.join('')
        throw payload
    }
}

export {
    getAllBanner,
    create,
    deleteBanner,
}