import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Job } from "../../containers/Home";
import { DispatchType } from "../configStore";
export interface JobState {
  jobsAPI: Job[];
}
const initialState: JobState = {
  jobsAPI: [],
};

const JobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {
    getJobAction: (state: JobState, action: PayloadAction<Job[]>) => {
      state.jobsAPI = action.payload;
    },
  },
});

export const { getJobAction } = JobReducer.actions;

export const jobAPI = () => {
  return async (dispatch: DispatchType) => {
    const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/job`);

    dispatch(getJobAction(result.data));
  };
};

export default JobReducer.reducer;
