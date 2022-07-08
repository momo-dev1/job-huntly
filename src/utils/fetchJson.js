import axios from "axios"


const fetchJson = axios.create({
    baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
})
export default fetchJson