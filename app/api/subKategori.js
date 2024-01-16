import instance from "./config";

async function getIndex(payload) {
    try {
        const result = await instance({
            method: 'post',
            url: '/getIndexSubCategori',
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
    } catch (error) {
  
        if(error.response.data.id) {
            error.response.data.id.map((item) => {
                message.push(item)
            })
        }
        const message = []
        if(error.message) {
            message.push(message)
        }
        throw message
    }
}

async function getAll(payload) {
    try {
        const result = await instance({
            method: 'post',
            url: '/getAllSubCategori',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                limit: payload.limit
            }
        })
 
        if(result.data.status) {
            return result.data.data
        } else {
            throw result.data
        } 
    } catch (error) {
        const message = []
        if(error.response.data.limit) {
            error.response.data.limit.map((item) => {
                message.push(item)
            })
        }
        if(error.message) {
            message.push(message)
        }
        throw message
    }
}

async function search(payload) {
    try {
        const result = await instance({
            method: 'post',
            url: '/getAllSubCategori',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                limit: payload.limit
            }
        })
        if(result.data.status) {
            return result.data.data
        } else {
            throw result.data
        } 
    } catch (error) {
        const message = []
        if(error.response.data.limit) {
            error.response.data.limit.map((item) => {
                message.push(item)
            })
        }
        if(error.message) {
            message.push(message)
        }
        throw message
    }
}

async function getSelected(payload) {
    try {
        const result = await instance({
            method: 'post',
            url: '/getSelectedSubCategori',
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
    } catch (error) {
   
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

async function page(payload) {
    try {
        const result = await instance({
            method: 'post',
            url: `/getAllSubCategori?page=${payload.number}`,
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
    } catch (error) {
    
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
            url:`/createSubCategori`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                idCategori: payload.idCategori,
                name: payload.name,
            }
        })
        return result.data
    } catch (error) {
  
        const message = []
        if(error.response.data.idCategori) {
            error.response.data.idCategori.map((item) => {
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

async function edit(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/updateSubCategori`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                id: payload.id,
                idCategori: payload.idCategori,
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
        if(error.response.data.idCategori) {
            error.response.data.idCategori.map((item) => {
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

async function deleteItem(payload) {
    try {
        const result = await instance({
            method: 'post',
            url:`/deleteSubCategori`,
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
        const payload = message.join('')
        throw payload
    }
}

export {
    getIndex,
    getAll,
    getSelected,
    search,
    page,
    create,
    edit,
    deleteItem,
}