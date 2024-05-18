import axios from "axios"

const fetchJson = axios.create({
    baseURL: "https://jobify-api-mlvw.onrender.com/api/v2",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
})

export default fetchJson

