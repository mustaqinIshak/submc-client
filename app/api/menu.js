import instance from "./config";
async function menu() {
    try{
        const result = await instance({
            method: 'post',
            url:'getAllAksesMenu',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
        })
   
        if(result.data.status) {
            return result.data.data
        }
    }
    catch(error) {
     
        throw error
    }
}

export {
    menu,
}