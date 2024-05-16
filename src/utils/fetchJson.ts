import axios from "axios"

const fetchJson = axios.create({
    baseURL: "http://localhost:5500/api/v2",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
})

export default fetchJson

