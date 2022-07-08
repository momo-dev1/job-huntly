import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = { user: null, isLoading: false };

export const registerUser = createAsyncThunk('user/registerUser', async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    console.log(`registerUser : ${ user }`)
    // try {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //     const data = res.json();
    //     return data;
    // } catch (error) {
    //     return rejectWithValue(error.message);
    // }
});

export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    console.log(`loginUser : ${ user }`)
    // try {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //     const data = res.json();
    //     return data;
    // } catch (error) {
    //     return rejectWithValue(error.message);
    // }
});
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        // [registerUser.pending]: (state) => {
        //     state.loading = true
        // },
        // [registerUser.fulfilled]: (state, { payload }) => {
        //     state.loading = false
        //     state.entities = payload
        // },
        // [registerUser.rejected]: (state) => {
        //     state.loading = false
        // },
        // [loginUser.pending]: (state) => {
        //     state.loading = true
        // },
        // [loginUser.fulfilled]: (state, { payload }) => {
        //     state.loading = false
        //     state.entities = payload
        // },
        // [loginUser.rejected]: (state) => {
        //     state.loading = false
        // },
    },
});

// export const { increment, decrement } = counterSlice.actions;
export default userSlice.reducer;