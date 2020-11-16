import { createSlice} from '@reduxjs/toolkit';
import axios from 'axios'
import {JobList} from '../typeDefinition'

const initialState : JobList = {job: []}
  
export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    stateConcat: (state, action) => {
      state.job = [...state.job,...action.payload]
    },
  },
});

export const { stateConcat } = jobSlice.actions;

export const fetchJobs = (setJobList:any) =>  async (dispatch:any) => {
  await axios.get('https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs')
  .then(
    function (response) {
    dispatch(stateConcat(response.data.jobs));
    setJobList(response.data.jobs.slice(0,100))
  })
  .catch(function (error) {
    console.log(error);
  })
                   
};

export const selectJob = (state:any) => state.job;
export default jobSlice.reducer;
