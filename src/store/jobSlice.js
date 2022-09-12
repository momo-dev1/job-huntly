import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import fetchJson from '../utils/fetchJson';
import { getListingJobs, showLoading, hideLoading } from "./jobListingSlice"

const initialState = {
    isLoading: false,
    company: "",
    location: "",
    position: "intern",
    positionType: ["intern", "junior", "senior", "lead", "manager"],
    status: "pending",
    statusType: ["applied", "pending", "interview", "hired", "rejected"],
    isEdit: false,
    editId: null,
    deleteId: null,
    modalIsOpen: false,
};

export const createJob = createAsyncThunk('jobSlice/createJob', async (job, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI

    try {
        const res = await fetchJson.post('/jobs', job);
        dispatch(clearValues());
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.msg);
    }
});

export const deleteJob = createAsyncThunk('jobSlice/deleteJob', async (jobId, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI
    dispatch(showLoading())
    try {
        const res = await fetchJson.delete(`/jobs/${ jobId }`);
        dispatch(getListingJobs());
        return res.data;
    } catch (error) {
        dispatch(hideLoading())
        return rejectWithValue(error.response.data.msg);
    }
});

export const updateJob = createAsyncThunk('jobSlice/updateJob', async ({ jobId, job }, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI

    try {
        const res = await fetchJson.patch(`/jobs/${ jobId }`, job);
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
        setSelection: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
        clearValues: (state) => {
            return initialState
        },
        updateJobs: (state, { payload }) => {
            return { ...state, isEdit: true, ...payload }
        },
        showModal: (state, { payload }) => {
            state.modalIsOpen = true
            state.deleteId = payload
        },
        hideModal: (state) => {
            state.modalIsOpen = false
        }
    },
    extraReducers: {
        [createJob.pending]: (state) => {
            state.isLoading = true
            toast.success('Job has been created successfully')
        },
        [createJob.fulfilled]: (state, { payload }) => {
            state.isLoading = false
        },
        [createJob.rejected]: (state) => {
            state.isLoading = false
            toast.error('error!!')
        },
        [updateJob.pending]: (state) => {
            state.isLoading = true
        },
        [updateJob.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            toast.success("job has been updated")
        },
        [updateJob.rejected]: (state, { payload }) => {
            state.isLoading = false

        },
    }
});


export const { setSelection, clearValues, updateJobs, showModal, hideModal, setAvatarColor } = jobSlice.actions;

export default jobSlice.reducer;

