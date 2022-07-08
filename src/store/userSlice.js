import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useLocalStorage } from '../hooks/useLocalStorage';
import fetchJson from '../utils/fetchJson';

const initialState = { user: null, isLoading: false };

export const registerUser = createAsyncThunk('user/registerUser', async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const res = await fetchJson.post('/auth/register', user);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.msg);
    }
});

export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const res = await fetchJson.get('/auth/login');
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.msg);
    }
});


const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            const { user } = payload
            state.isLoading = false
            state.user = user
            useLocalStorage("user", user)
        },
        [registerUser.rejected]: (state) => {
            state.isLoading = false
        },
        [loginUser.pending]: (state) => {
            state.isLoading = true
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            const { user } = payload
            state.isLoading = false
            state.user = user
            useLocalStorage("user", user)
        },
        [loginUser.rejected]: (state) => {
            state.isLoading = false
        },
    },
});


export default userSlice.reducer;