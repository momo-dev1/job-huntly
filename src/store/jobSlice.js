import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchJson from '../utils/fetchJson';
import { getLocalStorage } from '../utils/LocalStorage';

const initialState = {
    isLoading: false,
    company: "",
    position: "intern",
    positionType: ["intern", "junior", "senior", "lead", "manager"],
    status: "pending",
    statusType: ["applied", "interview", "pending", "hired", "rejected"],
    isEdit: false,
    editId: "",
};




const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {},
});



export default jobSlice.reducer;

