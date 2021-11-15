import { getJobsAction, GET_JOBS, GET_JOBS_ERROR, Job } from "../constants/jobConstant";

interface jobState {
  jobs?: Job[],
  loading: boolean,
  error?: string
}

export const getJobsData = (state: jobState = { loading: false }, action: getJobsAction) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        jobs: action.payload,
        loading: false
      }
    case GET_JOBS_ERROR:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}