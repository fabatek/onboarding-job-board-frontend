import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import { http } from "../../utils/config";

export interface JobModel {
  id: number;
  jobTitle: string;
  image: string;
  salary: string;
  place: string;
}

const initialState: any = {
  jobList: [],
  isLoading: true,
};

const JobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {
    getAllJobsAction: (state, action: PayloadAction<JobModel[]>) => {
      state.jobList = action.payload;
    },
    changeIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getAllJobsAction, changeIsLoading } = JobReducer.actions;

export default JobReducer.reducer;

export const getAllJobsApi = () => {
  return async (dispatch: DispatchType) => {
    const result = await http.get("/jobs");
    dispatch(getAllJobsAction(result.data));
    dispatch(changeIsLoading(false));
  };
};
