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
    searchJobAction: (state, action: PayloadAction<JobModel[]>) => {
      state.jobPaginationList = action.payload;
      state.jobList = action.payload;
    },
  },
});

export const {
  getAllJobsAction,
  changeIsLoading,
  paginationAction,
  searchJobAction,
} = jobReducer.actions;

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

export const searchJobApi = (option: string, searchValue: string) => {
  return async (dispatch: DispatchType) => {
    dispatch(changeIsLoading(true));
    switch (option) {
      case "1": {
        const result = await http.get(`/jobs/?jobTitle=${searchValue}`);
        if (result.data.length === 0) {
          dispatch(paginationAction(result.data));
        }
        dispatch(searchJobAction(result.data));
        dispatch(changeIsLoading(false));
        break;
      }
      case "2": {
        const result = await http.get(`/jobs/?category=${searchValue}`);
        if (result.data.length === 0) {
          dispatch(paginationAction(result.data));
        }
        dispatch(searchJobAction(result.data));
        dispatch(changeIsLoading(false));
        break;
      }
      default: {
        const result = await http.get(`/jobs/?place=${searchValue}`);
        if (result.data.length === 0) {
          dispatch(paginationAction(result.data));
        }
        dispatch(searchJobAction(result.data));
        dispatch(changeIsLoading(false));
      }
    }
  };
};
