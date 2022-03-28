import {
  JOBS_FAIL,
  JOBS_LOADING,
  JOBS_SUCCESS,
  SEARCH_FILTER,
  JobDispatchTypes,
  JobType,
} from '../actions/JobsActionType';

export interface DefaultStateI {
  loading: boolean;
  search: string;
  job?: JobType[];
}

const defaultState: DefaultStateI = {
  loading: false,
  search: '',
};

const jobReducer = (
  state: DefaultStateI = defaultState,
  action: JobDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case JOBS_FAIL:
      return {
        loading: false,
        search: '',
      };

    case JOBS_LOADING:
      return {
        loading: true,
        search: '',
      };

    case JOBS_SUCCESS:
      return {
        loading: false,
        search: '',
        job: action.payload,
      };
    case SEARCH_FILTER:
      return {
        loading: false,
        search: action.payload.search,
        job: action.payload.jobs,
      };

    default:
      return state;
  }
};

export default jobReducer;
