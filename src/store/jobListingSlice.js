import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchJson from '../utils/fetchJson';


const initialFilterState = {
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sortBy: 'latest',
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
        setSelection: (state, { payload: { name, value } }) => {
            state[name] = value
        },
        clearFilters: (state) => {
            return { ...state, ...initialFilterState }
        },
        changePage: (state, { payload }) => {
            state.currentPage = payload
        }
    },
    extraReducers: {
        [getListingJobs.pending]: (state) => {
            state.isLoading = true
        },
        [getListingJobs.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.jobs = payload.jobs
            state.jobCounts = payload.job_Counts
            state.numOfPages = payload.numOfPages
        },
        [getListingJobs.rejected]: (state, { payload }) => {
            state.isLoading = false

        },
    }
});

export const { showLoading, hideLoading, setSelection, clearFilters, changePage } = jobListingSlice.actions;
export default jobListingSlice.reducer;