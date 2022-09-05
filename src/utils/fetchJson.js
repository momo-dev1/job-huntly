import axios from "axios"
import { clearStore } from "../store/userSlice"
import { getLocalStorage } from "./localStorage"

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

// export const checkForUnauthorizedResponse = (error, thunkAPI) => {
//     const { dispatch, rejectWithValue } = thunkAPI
//     if (error.response.status === 401) {
//         dispatch(clearStore());
//         return rejectWithValue('Unauthorized! Logging Out...');
//     }
//     return rejectWithValue(error.response.data.msg);
// };
export default fetchJson

