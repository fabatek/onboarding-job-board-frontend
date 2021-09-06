import { createSlice } from "@reduxjs/toolkit";
import { Job } from "../../types/types";
import { RootState } from "../store";

export interface JobState {
  jobs: Job[];
  loading: boolean;
  error: boolean;
}

const initialState: JobState = {
  jobs: [],
  loading: false,
  error: false,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    fetchJobs(state) {
      state.loading = true;
    },
    fetchJobsSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.jobs = action.payload.jobs;
    },
    fetchJobsFailed(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

//actions
export const jobsActions = jobsSlice.actions;

//selectors
export const jobsSelector = (state: RootState) => state.jobs.jobs;
export const jobStatusSelector = (state: RootState) => state.jobs.loading;
export const jobErrorSelector = (state: RootState) => state.jobs.error;

export default jobsSlice.reducer;
