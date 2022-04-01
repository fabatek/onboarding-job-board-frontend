import { TypeJobsDispatch } from "../actions/jobActions";
import { JobType } from "../contants/action-type";

export const REQUEST_JOBS = "REQUEST_JOBS";
export const FETCH_JOBS = "FETCH_JOBS";
export const SEARCH_JOBS = "SEARCH_JOBS";
export interface DefaultStateI {
  start: boolean;
  message: string;
  allJobs: JobType[];
}
const defaultState: DefaultStateI = {
  start: false,
  message: "",
  allJobs: [],
};

export const jobReducer = (
  state: DefaultStateI = defaultState,
  action: TypeJobsDispatch
): DefaultStateI => {
  switch (action.type) {
    case REQUEST_JOBS:
      return {
        start: true,
        message: "Request Data...",
        allJobs: [],
      };
    case FETCH_JOBS:
      return {
        start: false,
        message: "Fetching Data Successfully",
        allJobs: action.payload,
      };
    case SEARCH_JOBS:
      return {
        start: false,
        message: "Search Data Successfully",
        allJobs: action.payload.allJobs,
      };
    default:
      return state;
  }
};
