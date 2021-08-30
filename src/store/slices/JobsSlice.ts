import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Job from "../../types/types";
import jobsAPI from "../../services/services";
import { RootState } from "../store";

interface JobState {
  jobs: Job[];
}

const initialState: JobState = {
  jobs: [],
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
    builder.addCase(fetchAllJobs.fulfilled, (state, action) => {
      state.jobs = action.payload;
    });
  },
});

const { reducer } = jobsSlice;
export const jobsSelector = (state: RootState) => state.jobs.jobs;
export default reducer;
