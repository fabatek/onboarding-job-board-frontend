import { createSlice } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import { http } from "../../utils/config";

export interface JobModel {
  id: number;
  jobTitle: string;
  image: string;
  salary: string;
  place: string;
}

const initialState = {
  jobList: [],
};

const JobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {
    getAllJobsAction: (state, action) => {
      state.jobList = action.payload;
    },
  },
});

export const { getAllJobsAction } = JobReducer.actions;

export default JobReducer.reducer;

export const getAllJobsApi = () => {
  return async (dispatch: DispatchType) => {
    const result = await http.get("/jobs");
    dispatch(getAllJobsAction(result.data));
  };
};