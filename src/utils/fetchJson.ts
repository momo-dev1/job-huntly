import axios from "axios"
import { getLocalStorage } from "./localStorage"

const fetchJson = axios.create({
    baseURL: "https://mo-jobs-api-v1.herokuapp.com/api/v1",
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

