import {
  requestJobsType,
  getJobsType,
  requestJobType,
  getJobType,
} from "./type";
import { typeStates } from "../type";
import Axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { API_URL } from "../../constant/api";

export type actionJobs =
  | requestJobsType
  | getJobsType
  | requestJobType
  | getJobType;

export const requestJobsAction =
  (): ThunkAction<void, typeStates, null, Action<string>> => (dispatch) => {
    Axios.get(`${API_URL}/jobs`).then((res) => {
      dispatch({
        type: "GET_JOBS",
        jobs: res.data,
      });
    });
  };
