import {
  JOBS_FAIL,
  JOBS_LOADING,
  JOBS_SUCCESS,
  JobDispatchTypes,
  JobType,
} from '../actions/JobsActionType';

interface DefaultStateI {
  loading: boolean;
  job?: JobType[];
}

const defaultState: DefaultStateI = {
  loading: false,
};

const jobReducer = (
  state: DefaultStateI = defaultState,
  action: JobDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case JOBS_FAIL:
      return {
        loading: false,
      };

    case JOBS_LOADING:
      return {
        loading: true,
      };

    case JOBS_SUCCESS:
      return {
        loading: false,
        job: action.payload,
      };

    default: return state
  }
};

export default jobReducer
