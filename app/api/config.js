import axios from "axios";

const instance = axios.create({
    // baseURL: process.env.NEXT_LOCAL_BASE_API_URL
    baseURL: process.env.NEXT_LIVE_BASE_API_URL
})

export default instance