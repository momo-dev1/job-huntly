import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchJson from '../utils/fetchJson';


const initialFilterState = {
    search: '',
    sortBy: 'latest',
    searchStatus: 'all',
    searchType: 'all',
    sortOptions: ["latest", "oldest", "alphabetical"],
    jobCounts: 0
}


const initialState = {
    isLoading: false,
    jobs: [],
    numOfPages: 0,
    currentPage: 1,
    stats: {},
    monthlyApplication: [],
    ...initialFilterState
}

export const getListingJobs = createAsyncThunk('jobSlice/getListingJobs', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const res = await fetchJson.get('/jobs');
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.msg);
    }
});

const jobListingSlice = createSlice({
    name: 'allJobsListing',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true
        },
        hideLoading: (state) => {
            state.isLoading = false
        },
    },
    extraReducers: {
        [getListingJobs.pending]: (state) => {
            state.isLoading = true
        },
        [getListingJobs.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.jobs = payload.jobs
            state.jobCounts = payload.job_Counts
        },
        [getListingJobs.rejected]: (state, { payload }) => {
            state.isLoading = false

        },
    }
});

export const { showLoading, hideLoading } = jobListingSlice.actions;
export default jobListingSlice.reducer;