import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./userSlice"
import jobSlice from "./jobSlice"

const store = configureStore({ reducer: { user: userSlice, job: jobSlice } })
export default store;