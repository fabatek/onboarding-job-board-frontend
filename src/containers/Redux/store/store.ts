import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "../jobs/jobSlice";
import searchSlice from "../search/searchSlice";
export const store = configureStore({
  reducer: {
    jobs: jobSlice,
    search: searchSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
