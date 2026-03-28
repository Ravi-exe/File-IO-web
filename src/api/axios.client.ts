


import axios from "axios"


const serverUrl = "http://localhost"
const port = 4000


const AxiosClient = axios.create({
    baseURL: `${serverUrl}:${port}`,
    headers: {
        "Content-Type": "application/json"
    },
})



export default AxiosClient

