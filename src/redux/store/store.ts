import { configureStore } from '@reduxjs/toolkit'
import jobReducer from '../reducer/jobs'
import searchJob from '../reducer/searchJob'
const store = configureStore({
  reducer: {
    jobReducer,
    searchJob
  },
})
export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
export default store