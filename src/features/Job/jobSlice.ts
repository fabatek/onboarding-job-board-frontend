import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import jobListApi from '../../containers/Api/jobListApi';
import {Job} from '../../containers/App/JobInterface';
import { RootState } from '../../containers/App/store';

interface JobState {
    jobs: Job[],
    jobAmount: string,
    loading: string
}
const initialState: JobState = {
    jobs: [],
    jobAmount: 'loading...',
    loading: 'idle'
}

export const fetchAllJob = createAsyncThunk(
    'job/fetchAllJob',
    async (params: object, thunkAPI: any) => {
        const responce = await jobListApi.getAllJob(params);
        return responce.data;
    } 
);

export const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {

    },
    extraReducers: builder =>{
        builder.addCase(fetchAllJob.fulfilled, (state,action)=> {
            state.jobs.push(action.payload);
            state.jobAmount = action.payload['job-count'];
        });
    }
});
const {reducer} = jobSlice;
export const jobAmount = (state: RootState) => state.job.jobAmount;
export const jobs = (state: RootState) => state.job.jobs;
export default reducer;