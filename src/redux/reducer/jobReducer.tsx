import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import { http } from "../../utils/config";
import { ITEM_PER_PAGE } from "../../static/data";
import { JobModel } from "../../types/types";

const initialState: any = {
  jobList: [],
  isLoading: false,
  jobPaginationList: [],
};

const jobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {
    getAllJobsAction: (state, action: PayloadAction<JobModel[]>) => {
      state.jobList = action.payload;
    },
    changeIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    paginationAction: (state, action: PayloadAction<JobModel[]>) => {
      state.jobPaginationList = action.payload;
    },
  },
});

export const { getAllJobsAction, changeIsLoading, paginationAction } =
  jobReducer.actions;

export default jobReducer.reducer;

export const getAllJobsApi = () => {
  return async (dispatch: DispatchType) => {
    dispatch(changeIsLoading(true));
    const result = await http.get("/jobs");
    dispatch(getAllJobsAction(result.data));
    dispatch(changeIsLoading(false));
  };
};

export const paginationApi = (currentPage: number) => {
  return async (dispatch: DispatchType) => {
    dispatch(changeIsLoading(true));
    const result = await http.get(
      `/jobs/?page=${currentPage}&limit=${ITEM_PER_PAGE}`
    );
    dispatch(paginationAction(result.data));
    dispatch(changeIsLoading(false));
  };
};
