import instance from "./config";

async function get() {
    try {
        const result = await instance({
            method: 'post',
            url:`/getProfileCompany`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
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

async function editProfileCompany(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/updateProfileCompany`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                id: payload.id,
                name: payload.name,
                alamat: payload.alamat,
                nomorHp: payload.nomorHp,
                instagram: payload.instagram,
                twitter: payload.instagram,
                facebook: payload.facebook,
                youtube: payload.youtube,
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
        if(error.response.data.alamat) {
            error.response.data.alamat.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.nomor_hp) {
            error.response.data.nomor_hp.map((item) => {
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
    get,
    editProfileCompany,
}