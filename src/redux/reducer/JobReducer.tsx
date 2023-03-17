import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Job } from "../../containers/Home";
import { DispatchType } from "../configStore";
export interface JobState {
  jobs: Job[];
  jobsBase: Job[];
}
const initialState: JobState = {
  jobs: [],
  jobsBase: [],
};

const JobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {
    getJobAction: (state: JobState, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
      state.jobsBase = action.payload;
    },
    filterAction: (state: JobState, action: PayloadAction<string>) => {
      state.jobs = state.jobsBase.filter((job) =>
        job.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { getJobAction, filterAction } = JobReducer.actions;

export const jobAPI = () => {
  return async (dispatch: DispatchType) => {
    const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/job`);

    dispatch(getJobAction(result.data));
  };
};

export default JobReducer.reducer;
