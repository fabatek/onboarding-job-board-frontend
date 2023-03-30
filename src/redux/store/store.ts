import { configureStore } from '@reduxjs/toolkit'
import jobReducer from '../reducer/jobs'
const store = configureStore({
  reducer: {
    jobReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
export default store