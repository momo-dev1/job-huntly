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


const jobListingSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {},
});

// export const {  } = allJobsSlice.actions;
export default jobListingSlice.reducer;