import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./reducer/jobReducer";

export const store = configureStore({
  reducer: { jobReducer: jobReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
