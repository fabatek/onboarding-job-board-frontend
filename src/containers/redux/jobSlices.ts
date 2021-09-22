import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Jobs } from '../Home/component/Jobs';

//Defining our initialState's type
type initialStateType = {
  jobLists: Jobs[];
};

const jobLists: Jobs[] = [];

const initialState: initialStateType = {
  jobLists,
};

export const jobSlices = createSlice({
  name: 'job',
  initialState,
  reducers: {
    addNewJob: (state, action: PayloadAction<Jobs>) => {
      state.jobLists.push(action.payload);
    },
  },
});


export const { addNewJob } = jobSlices.actions;
export const selectJobList = (state: RootState) => state.jobs.jobLists;

export default jobSlices.reducer;