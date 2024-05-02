import axios from "axios"
import { getLocalStorage } from "./localStorage"

const fetchJson = axios.create({
    baseURL: "https://localhost:5500/api/v2",
})

fetchJson.interceptors.request.use(config => {
    const user = getLocalStorage("user")

    if (user) {
        config.headers = config.headers || {}
        config.headers.common["Authorization"] = `Bearer ${user.token}`
    }
    return config
})

export default fetchJson

