import instance from "./config";
async function getIndex(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/getBrand',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                limit: payload.limit,
                search: payload.search
            }
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

async function getAll() {
    try{
        const result = await instance({
            method: 'post',
            url:'/getAllBrand',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
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


async function page(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:`/getBrand?page=${payload.number}`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                limit: payload.limit,
                search: payload.search
            }
        })
        if(result.data.status) {
            return result.data.data
        }
    }
    catch(error) {
  
        throw error
    }
}


async function getSelected(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:`/getSelectedBrand`,
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
        } else {
            throw result.data
        }
    }
    catch (error){
  
        const message = []
        if(error.response.data.id) {
            error.response.data.id.map((item) => {
                message.push(item)
            })
        }
        if(error.message) {
            message.push(message)
        }
        throw message
    }
}


async function create(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/createBrand`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                name: payload.name,
            }
        })
        return result.data
    } catch (error) {
   
        const message = []
        if(error.response.data.name) {
            error.response.data.name.map((item) => {
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
            url:`/updateBrand`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                id: payload.id,
                name: payload.name,
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
        const payload = message.join('')
        throw payload
    }
}

export {
    getIndex,
    getAll,
    getSelected,
    page,
    create,
    edit,
}