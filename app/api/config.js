import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
    // baseURL: "http://103.77.206.78:2226/api/dev"
    // baseURL: "https://apinavicampus.pipmakassar.ac.id/api/live"
})

export default instance