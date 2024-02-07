import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import fetchJson from '../utils/fetchJson';
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '../utils/localStorage';
import { clearAllJobs } from './jobListingSlice';
import { clearValues } from './jobSlice';

interface UserState {
    user: any; // Replace `any` with a more specific type if available
    isLoading: boolean;
}

interface User {
    username: string;
    password: string;
    // Add other user properties as needed
}

const initialState: UserState = {
    user: getLocalStorage('user'),
    isLoading: false,
};

export const registerUser = createAsyncThunk('user/registerUser', async (user: User, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const res = await fetchJson.post('/auth/register', user);
        return res.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data.msg);
    }
});

export const loginUser = createAsyncThunk('user/loginUser', async (user: User, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const res = await fetchJson.post('/auth/login', user);
        return res.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data.msg);
    }
});

export const updateUser = createAsyncThunk('user/updateUser', async (user: Partial<User>, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const res = await fetchJson.patch('/auth/updateUser', user);
        return res.data;
    } catch (error: any) {
        return rejectWithValue(error.response.data.msg);
    }
});

export const clearStore = createAsyncThunk('user/clearStore', async (_, thunkAPI) => {
    const { dispatch } = thunkAPI;

    try {
        dispatch(signOut());
        dispatch(clearAllJobs());
        dispatch(clearValues());
        return Promise.resolve();
    } catch (error) {
        return Promise.reject();
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signOut: (state) => {
            state.user = null;
            removeLocalStorage("user");
            removeLocalStorage("isDark");
            document.documentElement.classList.remove("dark");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, action: PayloadAction<any>) => { // Replace `any` with a specific type
                state.isLoading = false;
                state.user = action.payload;
                toast.success("User profile has been updated");
                setLocalStorage("user", action.payload);
            })
            .addCase(updateUser.rejected, (state) => {
                state.isLoading = false;
                toast.error("error!!");
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => { // Replace `any` with a specific type
                state.isLoading = false;
                state.user = action.payload;
                setLocalStorage("user", action.payload);
            })
            .addCase(registerUser.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                toast.error(action.payload);
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => { // Replace `any` with a specific type
                state.isLoading = false;
                state.user = action.payload;
                toast.success(`Welcome ${ action.payload.username }`);
                setLocalStorage("user", action.payload);
            })
            .addCase(loginUser.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                toast.error(action.payload);
            })
            .addCase(clearStore.rejected, (state) => {
                toast.error("error while cleaning store");
            });
    },
});

export const { signOut } = userSlice.actions;

export default userSlice.reducer;



