import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import fetchJson from '../utils/fetchJson';
import { getListingJobs, showLoading, hideLoading } from "./jobListingSlice"

interface JobState {
    isLoading: boolean;
    company: string;
    location: string;
    position: string;
    positionType: string[];
    status: string;
    statusType: string[];
    skills: string[];
    isEdit: boolean;
    editId: string | null;
    deleteId: string | null;
    modalIsOpen: boolean;
}

const initialState: JobState = {
    isLoading: false,
    company: "",
    location: "",
    position: "intern",
    positionType: ["intern", "junior", "senior", "lead", "manager"],
    status: "pending",
    statusType: ["applied", "pending", "interview", "hired", "rejected"],
    skills: [],
    isEdit: false,
    editId: null,
    deleteId: null,
    modalIsOpen: false,
};

export const createJob = createAsyncThunk('jobSlice/createJob', async (job: any, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    try {
        const res = await fetchJson.post('/jobs', job);
        dispatch(clearValues());
        return res.data;
    } catch (error: any) {
        dispatch(hideLoading());
        return rejectWithValue(error.response.data.msg);
    }
});

export const deleteJob = createAsyncThunk('jobSlice/deleteJob', async (jobId: string, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    dispatch(showLoading());
    try {
        const res = await fetchJson.delete(`/jobs/${ jobId }`);
        dispatch(getListingJobs());
        return res.data;
    } catch (error: any) {
        dispatch(hideLoading());
        return rejectWithValue(error.response.data.msg);
    }
});

export const updateJob = createAsyncThunk('jobSlice/updateJob', async ({ jobId, job }: { jobId: string, job: any }, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    try {
        const res = await fetchJson.patch(`/jobs/${ jobId }`, job);
        dispatch(clearValues());
        return res.data;
    } catch (error: any) {
        dispatch(hideLoading());
        return rejectWithValue(error.response.data.msg);
    }
});

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setSelection: (state, action: PayloadAction<{ name: string, value: any }>) => {
            const { name, value } = action.payload;
            (state as any)[name] = value; // Use a more specific type instead of any if possible
        },
        setMultiSelection: (state, action: PayloadAction<string[]>) => {
            state.skills = action.payload;
        },
        clearValues: () => {
            return initialState;
        },
        updateJobs: (state, action: PayloadAction<any>) => { // Replace `any` with a specific type if possible
            return { ...state, isEdit: true, ...action.payload };
        },
        showModal: (state, action: PayloadAction<string>) => {
            state.modalIsOpen = true;
            state.deleteId = action.payload;
        },
        hideModal: (state) => {
            state.modalIsOpen = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createJob.pending, (state) => {
                state.isLoading = true;
                toast.success('Job has been created successfully');
            })
            .addCase(createJob.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(createJob.rejected, (state) => {
                state.isLoading = false;
                toast.error('Error!!');
            })
            .addCase(updateJob.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateJob.fulfilled, (state) => {
                state.isLoading = false;
                toast.success("Job has been updated");
            })
            .addCase(updateJob.rejected, (state) => {
                state.isLoading = false;
            });
    }
});

export const { setSelection, clearValues, updateJobs, showModal, hideModal, setMultiSelection } = jobSlice.actions;

export default jobSlice.reducer;
