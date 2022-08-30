import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchJson from '../utils/fetchJson';
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '../utils/localStorage';

const initialState = {
    user: getLocalStorage('user'),
    isLoading: false,
};

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
        const res = await fetchJson.post('/auth/login', user);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.msg);
    }
});

export const updateUser = createAsyncThunk("user/updateUser", async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const res = await fetchJson.patch('/auth/updateUser', user);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.msg);
    }
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signOut: (state) => {
            state.user = null;
            removeLocalStorage("user");
        },
    },
    extraReducers: {
        [updateUser.pending]: (state) => {
            state.isLoading = true
        },
        [updateUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.user = payload
            setLocalStorage("user", payload)
        },
        [updateUser.rejected]: (state, { payload }) => {
            state.isLoading = false
        },

        [registerUser.pending]: (state) => {
            state.isLoading = true
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.user = payload
            setLocalStorage("user", payload)
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false
        },

        [loginUser.pending]: (state) => {
            state.isLoading = true
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.user = payload
            setLocalStorage("user", payload)
        },
        [loginUser.rejected]: (state) => {
            state.isLoading = false
        },
    },
});

export const { signOut } = userSlice.actions;

export default userSlice.reducer;