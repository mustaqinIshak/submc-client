import instance from "./config";
export default async function login(payload) {
    const username = payload.username
    const password = payload.password
    try{
        const result = await instance({
            method: 'post',
            url:'/login',
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            data:{
                username: username,
                password: password,
            }
        })
        
        return result.data.token
    }
    catch(error) {
        throw error
    }
}