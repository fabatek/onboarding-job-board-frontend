import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./slices/JobsSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
