import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import { http } from "../../utils/config";
import { ITEM_PER_PAGE } from "../../static/data";
import { JobModel } from "../../types/types";

const initialState: any = {
  jobList: [],
  isLoading: false,
  jobPaginationList: [],
  jobItem: null,
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
    getJobByIdAction: (state, action: PayloadAction<JobModel>) => {
      state.jobItem = action.payload;
    },
  },
});

export const {
  getAllJobsAction,
  changeIsLoading,
  paginationAction,
  searchJobAction,
  getJobByIdAction,
} = jobReducer.actions;

export default jobReducer.reducer;

export const getAllJobsApi = () => {
  return async (dispatch: DispatchType) => {
    dispatch(changeIsLoading(true));
    try {
      const result = await http.get("/jobs");
      dispatch(getAllJobsAction(result.data));
      dispatch(changeIsLoading(false));
    } catch (error) {
      window.location.href = "http://localhost:3000/pagenotfound";
    }
  };
};

export const paginationApi = (currentPage: number) => {
  return async (dispatch: DispatchType) => {
    dispatch(changeIsLoading(true));
    try {
      const result = await http.get(
        `/jobs/?page=${currentPage}&limit=${ITEM_PER_PAGE}`
      );
      dispatch(paginationAction(result.data));
      dispatch(changeIsLoading(false));
    } catch (error) {
      window.location.href = "http://localhost:3000/pagenotfound";
    }
  };
};

export const searchJobApi = (option: string, searchValue: string) => {
  return async (dispatch: DispatchType) => {
    dispatch(changeIsLoading(true));
    try {
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
    } catch (error) {
      window.location.href = "http://localhost:3000/pagenotfound";
    }
  };
};

export const getJobByIdApi = (jobId: number) => {
  return async (dispatch: DispatchType) => {
    dispatch(changeIsLoading(true));
    try {
      const result = await http.get(`/jobs/${jobId}`);
      dispatch(getJobByIdAction(result.data));
      dispatch(changeIsLoading(false));
    } catch (error) {
      window.location.href = "http://localhost:3000/pagenotfound";
    }
  };
};
