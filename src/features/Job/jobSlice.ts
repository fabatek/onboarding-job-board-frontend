import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import jobListApi from '../../containers/Api/jobListApi';
import {Job} from '../../containers/App/JobInterface';
import JobList from './page/JobList';
import { RootState } from '../../containers/App/store';

interface JobState {
    jobs: Job[],
    jobAmount: number,
    loading: string
}
const initialState: JobState = {
    jobs: [],
    jobAmount: 0,
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
            console.log(state.jobAmount);
        });
    }
});
const {actions, reducer} = jobSlice;
export const jobAmount = (state: RootState) => state.job.jobAmount;
export default reducer;