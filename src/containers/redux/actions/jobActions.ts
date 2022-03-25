import pathStore from "../../apis/pathStore";
import { ActionTypes, JobType } from "../contants/action-type";
import { Dispatch } from "redux";

//Asynchronous Function Redux Thunk
//Fetch Jobs Data with FETCH_JOBS
export const fetchJobs =
  () =>
  async (dispatch: Dispatch<TypeJobsDispatch>): Promise<void> => {
    const response = await pathStore.get("/jobs");
    dispatch({ type: ActionTypes.FETCH_JOBS, payload: response.data });
  };
export interface FetchJobs {
  type: typeof ActionTypes.FETCH_JOBS;
  payload: JobType[];
}

export type TypeJobsDispatch = FetchJobs;
