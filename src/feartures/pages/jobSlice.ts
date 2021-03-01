import Job from "../../types/Job";
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import jobAPI from "../../services/jobAPI";
import { RootState } from "../../store/store";



interface JobState {
    totalJobs: string | number,
    jobList: Job[],
}
const initialState: JobState = {
    totalJobs: 'Loading...',
    jobList: [],
}

export const fetchAllJobs = createAsyncThunk(
    'job/fetchAllJobs',
    async (params: object, thunkAPI: any) => {
        const response = await jobAPI.getAll(params);
        return response.data;
    }
);

export const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchAllJobs.fulfilled, (state, action) => {
            state.totalJobs = action.payload['job-count'];
            state.jobList = action.payload['jobs'];
        })
    }
});

const {reducer} = jobSlice;
export const totalJobs = (state: RootState) => state.job.totalJobs;
export const jobList = (state: RootState) => state.job.jobList;

export default reducer;