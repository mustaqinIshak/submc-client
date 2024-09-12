import instance from "./config";

async function getAllUser(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/userAll',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                limit: payload.limit,
            }
        })
        return result.data.data
    }
    catch(error) {
     
        throw error
    }
}

async function search(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/userAll',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                limit: payload.limit,
                search: payload.search,
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

async function page(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:`/userAll?page=${payload.number}`,
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

async function getSelectedUser(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/user',
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
  
        throw error
    }
}
async function create(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/addUser',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data : {
                "name": payload.name,
                "username": payload.username,
                "password": payload.password,
                "id_role" : payload.id_role,
            }
        })
        return result.data
    }
    catch(error) {
    
        const message = []
        if(error.response.data.name) {
            error.response.data.name.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.username) {
            error.response.data.username.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.password) {
            error.response.data.password.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.id_role) {
            error.response.data.id_role.map((item) => {
                message.push(item)
            })
        }
        const payload = message.join('')
        throw payload
    }
}

async function editUser(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/editUser',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data : payload
        })
        return result.data
    }
    catch(error) {
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
        if(error.response.data.username) {
            error.response.data.username.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.password) {
            error.response.data.password.map((item) => {
                message.push(item)
            })
        }
        if(error.response.data.id_role) {
            error.response.data.id_role.map((item) => {
                message.push(item)
            })
        }
        const payload = message.join('')
        throw payload
    }
}

async function deleteUser(payload) {
    try{
        const result = await instance({
            method: 'post',
            url:'/deleteUser',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data : {
                "id": payload,
            }
        })
        if(result.data.status) {
            return Promise
        } else {
            throw result.data.message
        }
    }
    catch(error) {
   
        throw error
    }
}
export {
    getAllUser,
    getSelectedUser,
    search,
    page,
    create,
    editUser,
    deleteUser,
}