import { configureStore } from "@reduxjs/toolkit";
import JobReducer from "./reducer/JobReducer";
export const store = configureStore({
  reducer: {
    JobReducer: JobReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
