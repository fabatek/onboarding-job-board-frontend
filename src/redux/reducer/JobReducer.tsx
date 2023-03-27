import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Job } from "../../containers/Home";
import { DispatchType } from "../configStore";
export interface JobState {
  jobs: Job[];
  jobsBase: Job[];
  jobDetail: any;
}
const initialState: JobState = {
  jobs: [],
  jobsBase: [],
  jobDetail: {},
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
      if (action.payload === "".trim()) {
        state.jobs = state.jobsBase;
      } else {
        state.jobs = state.jobsBase.filter((job) =>
          job.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
    getJobDetailAction: (state: JobState, action: PayloadAction<{}>) => {
      state.jobDetail = action.payload;
    },
  },
});

export const { getJobAction, filterAction, getJobDetailAction } =
  JobReducer.actions;

export const jobAPI = () => {
  return async (dispatch: DispatchType) => {
    const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/job`);

    dispatch(getJobAction(result.data));
  };
};
export const getJobDetailAPI = (id: number) => {
  return async (dispatch: DispatchType) => {
    const result = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/job/${id}`
    );
    if (result.data) {
      dispatch(getJobDetailAction(result.data));
    }
  };
};
export default JobReducer.reducer;
