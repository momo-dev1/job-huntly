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
    const { rejectWithValue, getState } = thunkAPI
    const { search, currentPage, searchStatus, searchType, sortBy } = getState().jobListing
    let url = `/jobs?status=${ searchStatus }&position=${ searchType }&sort=${ sortBy }&page=${ currentPage }`
    if (search) {
        url = url + `&search=${ search }`
    }
    try {
        const res = await fetchJson.get(url);
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
            state.currentPage = 1
            state[name] = value
        },
        clearFilters: (state) => {
            return { ...state, ...initialFilterState }
        },
        changePage: (state, { payload }) => {
            state.currentPage = payload
        },
        clearAllJobs: () => initialState
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

export const { showLoading, hideLoading, setSelection, clearFilters, changePage, clearAllJobs } = jobListingSlice.actions;
export default jobListingSlice.reducer;