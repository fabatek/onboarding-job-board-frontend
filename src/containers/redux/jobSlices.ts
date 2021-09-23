import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Jobs } from '../Home/component/Jobs';

type initialStateType = {
    totalJobList: Jobs[];
};

const totalJobList: Jobs[] = [];
const initialState: initialStateType = {
    totalJobList,
};

export const jobSlices = createSlice({
    name: 'job',
    initialState: initialState,
    reducers: {
        addJobList: (state, action: PayloadAction<[]>) => {
            state.totalJobList = action.payload
        },
    },
});


export const { addJobList } = jobSlices.actions;
export const jobList = (state: RootState) => state.jobs.totalJobList;

export default jobSlices.reducer;