import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./userSlice";
import jobSlice from "./jobSlice";
import jobListingSlice from "./jobListingSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        job: jobSlice,
        jobListing: jobListingSlice,
    },
});

// Type for the root state
export type RootState = ReturnType<typeof store.getState>;

// Type for the AppDispatch
export type AppDispatch = typeof store.dispatch;

export default store;
