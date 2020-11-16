import { createSlice} from '@reduxjs/toolkit';
import axios from 'axios'


type Job = {
    id: number,
    url: string,
    title: string,
    company_name: string,
    category: string,
    tags: string[],
    job_type: string,
    publication_date: string,
    candidate_required_location: string,
    salary: string,
    description: string
}
type JobList ={
    job: Job[]
}
const initialState : JobList = {job: []}
  
export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    // increment: state => {
    //   state.value += 1;
    // },
    incrementByAmount: (state, action) => {
      state.job = [...state.job,...action.payload]
      
    },
  },
});

export const { incrementByAmount } = jobSlice.actions;

export const fetchJobs = () =>  async (dispatch:any) => {
  const res = await axios.get('https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs');
  dispatch(incrementByAmount(res.data.jobs));
};

export const selectJob = (state:any) => state.job;
export default jobSlice.reducer;
