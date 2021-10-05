// @flow
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

export type actionJobs =
  | requestJobsType
  | getJobsType
  | requestJobType
  | getJobType;

export const requestJobsAction =
  (): ThunkAction<void, typeStates, null, Action<string>> => (dispatch) => {
    Axios.get("https://615bd6ecc298130017735dac.mockapi.io/api/jobs").then(
      (res) => {
        dispatch({
          type: "GET_JOBS",
          jobs: res.data,
        });
      }
    );
  };
