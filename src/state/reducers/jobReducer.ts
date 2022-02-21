import { getJobsAction, GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING, Job, SEARCH_JOBS, SEARCH_JOBS_TEXT, DEFAULT_LIMIT } from "../constants/jobConstant";

export interface jobState {
  jobs?: Job[];
  jobsOfPage: Job[];
  loading: boolean;
  error?: string;
}

const initialState: jobState = {
  jobs: [],
  jobsOfPage: [],
  loading: false,
  error: 'false',
}

export const getJobsData = (state: jobState = initialState, action: getJobsAction) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        jobs: action.payload.jobs,
        loading: false,
        jobsOfPage: action.payload.jobsOfPage
      }
    case GET_JOBS_LOADING:
      return {
        ...state,
        jobsOfPage: [],
        loading: true
      }
    case GET_JOBS_ERROR:
      return {
        loading: false,
        error: action.payload
      }

    case SEARCH_JOBS:
      const { jobsOfSearch } = action.payload;
      return {
        ...state,
        loading: false,
        jobs: jobsOfSearch,
        jobsOfPage: jobsOfSearch,
      }
    case SEARCH_JOBS_TEXT:
      const { jobsOfSearchPage } = action.payload;
      return {
        ...state,
        loading: false,
        jobsOfPage: jobsOfSearchPage,
      }
    default:
      return state;
  }
}