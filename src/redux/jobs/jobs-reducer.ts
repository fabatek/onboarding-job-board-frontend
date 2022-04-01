import { JobDispatchTypes, JobType } from "./jobs-action-types";
import {
  JOBS_LOADING,
  JOBS_SUCCESS,
  JOBS_FAIL,
  JOBS_FILTER,
} from "./jobs-action-types";

interface IState {
  job: JobType[];
  loading: boolean;
}

const intitalState: IState = {
  job: [],
  loading: false,
};

const jobsReducer = (
  state: IState = intitalState,
  action: JobDispatchTypes
): IState => {
  switch (action.type) {
    case JOBS_LOADING: {
      return {
        loading: true,
        job: [],
      };
    }
    case JOBS_FAIL: {
      return {
        loading: false,
        job: [],
      };
    }
    case JOBS_SUCCESS: {
      return {
        loading: false,
        job: action.payload,
      };
    }
    case JOBS_FILTER: {
      return {
        loading: false,
        job: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default jobsReducer;
