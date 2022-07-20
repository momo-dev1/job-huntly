import axios from "axios"


const fetchJson = axios.create({
    baseURL: "https://mo-jobs-api-v1.herokuapp.com/api/v1",
})
export default fetchJson