import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import fetchJson from '../utils/fetchJson';

interface InitialFilterState {
    search: string;
    searchStatus: string;
    searchType: string;
    sortBy: string;
    sortOptions: string[];
    jobCounts: number;
}

interface Job {
    // Define job properties here
}

interface Stats {
    // Define stats properties here
}

interface JobListingState extends InitialFilterState {
    isLoading: boolean;
    jobs: Job[];
    numOfPages: number;
    currentPage: number;
    stats: Stats;
    totalStats: number;
    monthlyApplications: any[]; // Specify a more detailed type if possible
}

const initialFilterState: InitialFilterState = {
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sortBy: 'latest',
    sortOptions: ["latest", "oldest", "alphabetical"],
    jobCounts: 0,
};

const initialState: JobListingState = {
    isLoading: false,
    jobs: [],
    numOfPages: 0,
    currentPage: 1,
    stats: {},
    totalStats: 0,
    monthlyApplications: [],
    ...initialFilterState,
};

export const getListingJobs = createAsyncThunk('jobSlice/getListingJobs', async (_, { rejectWithValue, getState }) => {
    const { search, currentPage, searchStatus, searchType, sortBy } = getState() as JobListingState;
    let url = `/jobs?status=${searchStatus}&position=${searchType}&sort=${sortBy}&page=${currentPage}`;
    if (search) {
        url += `&search=${search}`;
    }
    try {
        const res = await fetchJson.get(url);
        return res.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data.msg);
    }
});

export const getStats = createAsyncThunk('jobSlice/getStats', async (_, { rejectWithValue }) => {
    try {
        const res = await fetchJson.get("/jobs/stats");
        return res.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data.msg);
    }
});

const jobListingSlice = createSlice({
    name: 'allJobsListing',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true;
        },
        hideLoading: (state) => {
            state.isLoading = false;
        },
        setSelection: (state, action: PayloadAction<{ name: keyof JobListingState; value: any }>) => {
            state.currentPage = 1;
            state[action.payload.name] = action.payload.value;
        },
        clearFilters: (state) => {
            return { ...state, ...initialFilterState };
        },
        changePage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        clearAllJobs: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getListingJobs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getListingJobs.fulfilled, (state, action: PayloadAction<{ jobs: Job[]; jobCounts: number; numOfPages: number; }>) => {
                state.isLoading = false;
                state.jobs = action.payload.jobs;
                state.jobCounts = action.payload.jobCounts;
                state.numOfPages = action.payload.numOfPages;
            })
            .addCase(getListingJobs.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getStats.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getStats.fulfilled, (state, action: PayloadAction<{ defaultStats: Stats; totalStats: number; monthlyApplications: any[]; }>) => {
                state.isLoading = false;
                state.stats = action.payload.defaultStats;
                state.totalStats = action.payload.totalStats;
                state.monthlyApplications = action.payload.monthlyApplications;
            })
            .addCase(getStats.rejected, (state) => {
                state.isLoading = false;
            });
    }
});

export const {
    changePage,
    showLoading,
    hideLoading,
    setSelection,
    clearAllJobs,
    clearFilters,
} = jobListingSlice.actions;

export default jobListingSlice.reducer;
