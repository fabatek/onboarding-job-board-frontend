import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit'
import { jobSlices } from './jobSlices'
export const store = configureStore({
    reducer: {
        jobs: jobSlices.reducer, 
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
