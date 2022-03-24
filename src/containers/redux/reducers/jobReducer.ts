import { TypeJobsDispatch } from "../actions/jobActions";
import { ActionTypes, JobType } from "../contants/action-type";

//Create defaultState
export interface DefaultState {
  start: boolean;
  allJobs?: JobType[];
}
const defaultState: DefaultState = {
  start: false,
};

//Create JobReducer Process State & Payload
export const jobReducer = (
  state: DefaultState = defaultState,
  action: TypeJobsDispatch
): DefaultState => {
  switch (action.type) {
    case ActionTypes.FETCH_JOBS:
      return {
        start: false,
        allJobs: action.payload,
      };
    default:
      return state;
  }
};
