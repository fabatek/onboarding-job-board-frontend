import pathStore from "../../apis/pathStore";
import { JobType } from "../contants/action-type";
import { Dispatch } from "redux";
import { FETCH_JOBS, SEARCH_JOBS } from "../reducers/jobReducer";

//Asynchronous Function Redux Thunk
//Fetch Jobs Data with FETCH_JOBS
export const fetchJobs =
  (itemSearch: string) =>
  async (dispatch: Dispatch<TypeJobsDispatch>): Promise<void> => {
    if (itemSearch === "") {
      const response = await pathStore.get(`/jobs/`);
      dispatch({
        type: FETCH_JOBS,
        payload: response.data,
      });
    } else {
      const response = await pathStore.get(`/jobs?name=${itemSearch}`);
      dispatch({
        type: SEARCH_JOBS,
        payload: { searchJobs: itemSearch, allJobs: response.data },
      });
    }
  };
export interface FetchJobs {
  type: typeof FETCH_JOBS;
  payload: JobType[];
}
export interface SearchJobs {
  type: typeof SEARCH_JOBS;
  payload: { searchJobs: string; allJobs: JobType[] };
}

export type TypeJobsDispatch = FetchJobs | SearchJobs;
