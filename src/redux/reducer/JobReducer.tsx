import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Job } from "../../containers/Home";
import { DispatchType } from "../configStore";
export interface search {
  searchInput: string;
  typeJob: string;
}
export interface JobState {
  jobs: Job[];
  jobsBase: Job[];
  jobDetail: any;
  jobType: Array<string>;
  loading: boolean;
}

const initialState: JobState = {
  jobs: [],
  jobsBase: [],
  jobDetail: {},
  jobType: [],
  loading: false,
};

const JobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {
    getJobAction: (state: JobState, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
      state.jobsBase = action.payload;

      const arr: Array<String> = [];
      state.jobsBase.forEach((job) => {
        arr.push(job.type);
      });

      state.jobType = arr.filter((type, index) => {
        return arr.indexOf(type) === index;
      }) as Array<string>;
    },
    filterAction: (state: JobState, action: PayloadAction<search>) => {
      const searchInput = action.payload.searchInput;
      const jobType = action.payload.typeJob;

      state.jobs = state.jobsBase.filter(
        (job) =>
          (jobType === "All" || job.type === jobType) &&
          job.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    },

    getJobDetailAction: (state: JobState, action: PayloadAction<{}>) => {
      state.jobDetail = action.payload;
    },
    updateLoading: (state: JobState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { getJobAction, filterAction, getJobDetailAction, updateLoading } =
  JobReducer.actions;

export const jobAPI = () => {
  return async (dispatch: DispatchType) => {
    dispatch(updateLoading(true));

    const result = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/job`);
    if (result.data) {
      dispatch(updateLoading(false));

      dispatch(getJobAction(result.data));
    }
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
