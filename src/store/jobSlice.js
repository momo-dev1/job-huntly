import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchJson from '../utils/fetchJson';
import { getLocalStorage } from '../utils/LocalStorage';

const initialState = {
    isLoading: false,
    company: "",
    location: "",
    position: "intern",
    positionType: ["intern", "junior", "senior", "lead", "manager"],
    status: "pending",
    statusType: ["applied", "interview", "pending", "hired", "rejected"],
    isEdit: false,
    editId: "",
};

export const createJob = createAsyncThunk('jobSlice/createJob', async (job, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI

    try {
        const res = await fetchJson.patch('/jobs', job, {
            headers: {
                Authorization: `Bearer ${ getState().user.user.token }`
            }
        });
        dispatch(clearValues());
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.msg);
    }
});

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setSelection: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        clearValues: (state) => {
            return initialState
        }
    }, extraReducers: {
        [createJob.pending]: (state) => {
            state.isLoading = true
        },
        [createJob.fulfilled]: (state, { payload }) => {
            state.isLoading = false
        },
        [createJob.rejected]: (state, { payload }) => {
            state.isLoading = false
            console.log(payload)
        },
    }
});


export const { setSelectiona, clearValues } = jobSlice.actions;

export default jobSlice.reducer;

