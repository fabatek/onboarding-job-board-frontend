import {
  requestJobsType,
  getJobsType,
  requestJobType,
  getJobType,
  searchJob,
} from "./type";
import { typeStates } from "../type";
import Axios from "axios";
import { ThunkAction } from "redux-thunk";
import { API_URL } from "../../constant/api";

export type actionJobs =
  | requestJobsType
  | getJobsType
  | requestJobType
  | getJobType
  | searchJob;

//define type JobsThunk
export type JobsThunkAction = ThunkAction<void, typeStates, any, actionJobs>;

//request jobs
export const requestJobsAction = (): JobsThunkAction => (dispatch) => {
  Axios.get(`${API_URL}/jobs`).then((res) => {
    dispatch({
      type: "GET_JOBS",
      jobs: res.data,
    });
  });
};

//search
export const searchTitleJob =
  (key: string): JobsThunkAction =>
  (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: "SEARCH_TITLE_JOBS",
        key,
      });
    }, 500);
  };
