import { configureStore } from '@reduxjs/toolkit';
import jobReducer from '../features/job/jobSlice';

export default configureStore({
  reducer: {
    job: jobReducer,
  },
});
