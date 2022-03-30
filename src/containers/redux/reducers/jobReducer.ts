import { TypeJobsDispatch } from "../actions/jobActions";
import { JobType } from "../contants/action-type";

export const FETCH_JOBS = "FETCH_JOBS";
export const SEARCH_JOBS = "SEARCH_JOBS";
//Create defaultState
export interface DefaultStateI {
  start: boolean;
  searchJobs: string;
  allJobs?: JobType[];
}
const defaultState: DefaultStateI = {
  start: false,
  searchJobs: "",
};

//Create JobReducer Process State & Payload
export const jobReducer = (
  state: DefaultStateI = defaultState,
  action: TypeJobsDispatch
): DefaultStateI => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        start: false,
        searchJobs: "",
        allJobs: action.payload,
      };
    case SEARCH_JOBS:
      return {
        start: false,
        searchJobs: action.payload.searchJobs,
        allJobs: action.payload.allJobs,
      };
    default:
      return state;
  }
};
