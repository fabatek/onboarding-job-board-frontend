import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "../jobs/jobSlice";
import searchSlice from "../search/searchSlice";
import jobDetailSlice from "../jobDetail/jobDetailSlice";
export const store = configureStore({
  reducer: {
    jobs: jobSlice,
    jobDetail: jobDetailSlice,
    search: searchSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
