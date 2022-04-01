import pathStore from "../../apis/pathStore";
import { JobType } from "../contants/action-type";
import { Dispatch } from "redux";
import { REQUEST_JOBS, FETCH_JOBS, SEARCH_JOBS } from "../reducers/jobReducer";

export const fetchJobs =
  (itemSearch?: string) =>
  async (dispatch: Dispatch<TypeJobsDispatch>): Promise<void> => {
    //Loading...
    dispatch({
      type: REQUEST_JOBS,
    });
    if (itemSearch) {
      const response = await pathStore.get(`/jobs?title=${itemSearch}`);
      dispatch({
        type: SEARCH_JOBS,
        payload: { allJobs: response.data },
      });
    } else {
      const response = await pathStore.get(`/jobs`);
      dispatch({
        type: FETCH_JOBS,
        payload: response.data,
      });
    }
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
  payload: { allJobs: JobType[] };
}

export type TypeJobsDispatch = FetchJobs | RequestJobs | SearchJobs;
