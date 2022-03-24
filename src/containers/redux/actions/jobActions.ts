import pathStore from "../../apis/pathStore";
import { ActionTypes } from "../contants/action-type";

//Asynchronous Function Redux Thunk
//Fetch Jobs Data with FETCH_JOBS
export const fetchJobs =
  () =>
  async (dispatch: any): Promise<void> => {
    const response = await pathStore.get("/jobs");
    dispatch({ type: ActionTypes.FETCH_JOBS, payload: response.data });
  };

export const setJobs = () => {
  //Get Jobs with SET_JOBS
  return { type: ActionTypes.SET_JOBS, payload: null };
};

export const selectedJobs = () => {
  //Selected Jobs With SELECTED_JOB
  return { type: ActionTypes.SELECTED_JOB, payload: null };
};

export const removeSelectedJob = () => {
  //Remove Selected Jobs With REMOVE_SELECTED_JOB
  return { type: ActionTypes.REMOVE_SELECTED_JOB, payload: null };
};
