import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./userSlice"
import jobSlice from "./jobSlice"
import allJobsSlice from "./allJobsSlice"

const store = configureStore({
    reducer: {
        user: userSlice,
        job: jobSlice,
        allJobs: allJobsSlice
    }
})
export default store;