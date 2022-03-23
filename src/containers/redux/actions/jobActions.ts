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

export const setJobs = (jobs: any) => {
  //Get Jobs with SET_JOBS
  return { type: ActionTypes.SET_JOBS, payload: jobs };
};

export const selectedJobs = (job: any) => {
  //Selected Jobs With SELECTED_JOB
  return { type: ActionTypes.SELECTED_JOB, payload: job };
};

export const removeSelectedJob = (job: any) => {
  //Remove Selected Jobs With REMOVE_SELECTED_JOB
  return { type: ActionTypes.REMOVE_SELECTED_JOB, payload: job };
};
