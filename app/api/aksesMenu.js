import instance from "./config";

async function getSelectedAksesMenu (id) {
    try{
        const result = await instance({
            method: 'post',
            url:'/getSelectedAksesMenu',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                "id_menu": id
            }
        })
        if(result.data.status) {
            return result.data.data
        } else {
            throw result.data.message
        }
    }
    catch(error) {
    
        throw error
    }
}

export default {
    getSelectedAksesMenu,
}