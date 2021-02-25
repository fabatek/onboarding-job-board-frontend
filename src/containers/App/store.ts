import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import jobReducer from '../../features/Job/jobSlice';
export const store = configureStore({
    reducer: {
        job:  jobReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;