import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Job from "../../types/types";
import jobsAPI from "../../services/services";
import { RootState } from "../store";

interface JobState {
  jobs: Job[];
  loading: boolean;
  error: boolean;
}

const initialState: JobState = {
  jobs: [],
  loading: false,
  error: false,
};

export const fetchAllJobs = createAsyncThunk("jobs/fetchAllJobs", async () => {
  const response = await jobsAPI.getAllJobs();
  return response.data;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllJobs.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllJobs.fulfilled, (state, action) => {
      state.jobs = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

const { reducer } = jobsSlice;
export const jobsSelector = (state: RootState) => state.jobs.jobs;
export const jobStatusSelector = (state: RootState) => state.jobs.loading;
export const jobErrorSelector = (state: RootState) => state.jobs.error;
export default reducer;
