import axios from "axios"
import { getLocalStorage } from "./LocalStorage"

const fetchJson = axios.create({
    baseURL: "https://mo-jobs-api-v1.herokuapp.com/api/v1",
})

fetchJson.interceptors.request.use(config => {
    const user = getLocalStorage()
    if (user) {
        config.headers.common["Authorization"] = `Bearer ${ user.token }`
    }
    return config
})
export default fetchJson

