import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchJson from '../utils/fetchJson';
import { getLocalStorage } from '../utils/LocalStorage';
import { getListingJobs, showLoading, hideLoading } from "./jobListingSlice"

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
        const res = await fetchJson.post('/jobs', job, {
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

export const deleteJob = createAsyncThunk('jobSlice/deleteJob', async (jobId, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI
    dispatch(showLoading())
    try {
        const res = await fetchJson.delete(`/jobs/${ jobId }`, {
            headers: {
                Authorization: `Bearer ${ getState().user.user.token }`
            }
        });
        dispatch(getListingJobs());
        return res.data;
    } catch (error) {
        dispatch(hideLoading())
        return rejectWithValue(error.response.data.msg);
    }
});

export const updateJob = createAsyncThunk('jobSlice/updateJob', async ({ jobId, job }, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI
    dispatch(showLoading())
    try {
        const res = await fetchJson.patch(`/jobs/${ jobId }`, job, {
            headers: {
                Authorization: `Bearer ${ getState().user.user.token }`
            }
        });
        dispatch(clearValues());
        return res.data;
    } catch (error) {
        dispatch(hideLoading())
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
        },
        updateJobs: (state, { payload }) => {
            return { ...state, isEdit: true, ...payload }
        }
    },
    extraReducers: {
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
        [updateJob.pending]: (state) => {
            state.isLoading = true
        },
        [updateJob.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            console.log("job has been updated")
        },
        [updateJob.rejected]: (state, { payload }) => {
            state.isLoading = false

        },
    }
});


export const { setSelection, clearValues, updateJobs } = jobSlice.actions;

export default jobSlice.reducer;

