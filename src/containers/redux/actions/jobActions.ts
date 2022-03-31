import pathStore from "../../apis/pathStore";
import { JobType } from "../contants/action-type";
import { Dispatch } from "redux";
import { REQUEST_JOBS, FETCH_JOBS, SEARCH_JOBS } from "../reducers/jobReducer";

export const fetchJobs =
  (itemSearch: string = "") =>
  async (dispatch: Dispatch<TypeJobsDispatch>): Promise<void> => {
    dispatch({
      type: REQUEST_JOBS,
    });
    const response = await pathStore.get(`/jobs?title=${itemSearch}`);
    itemSearch
      ? dispatch({
          type: FETCH_JOBS,
          payload: response.data,
        })
      : dispatch({
          type: SEARCH_JOBS,
          payload: { searchJobs: itemSearch, allJobs: response.data },
        });
  };
export interface RequestJobs {
  type: typeof REQUEST_JOBS;
}
export interface FetchJobs {
  type: typeof FETCH_JOBS;
  payload: JobType[];
}
export interface SearchJobs {
  type: typeof SEARCH_JOBS;
  payload: { searchJobs: string; allJobs: JobType[] };
}

export type TypeJobsDispatch = FetchJobs | RequestJobs | SearchJobs;
