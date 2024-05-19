import axios from "axios"

const fetchJson = axios.create({
    baseURL: "/api/v2",
})

export default fetchJson
