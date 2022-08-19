import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchJson from '../utils/fetchJson';


const initialFilterState = {
    search: '',
    sortBy: 'latest',
    searchStatus: 'all',
    searchType: 'all',
    sortOptions: ["latest", "oldest", "alphabetical"],
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

    try {
        const res = await fetchJson.get('/jobs', {
            headers: {
                Authorization: `Bearer ${ getState().user.user.token }`
            }
        });
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.msg);
    }
});

const jobListingSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {},
    extraReducers: {
        [getListingJobs.pending]: (state) => {
            state.isLoading = true
        },
        [getListingJobs.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.jobs = payload.jobs
        },
        [getListingJobs.rejected]: (state, { payload }) => {
            state.isLoading = false

        },
    }
});

// export const {  } = allJobsSlice.actions;
export default jobListingSlice.reducer;