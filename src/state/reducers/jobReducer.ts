import { getJobsAction, GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING, Job,GET_PAGINATION_JOBS } from "../constants/jobConstant";

export interface jobState {
  jobs?: Job[];
  jobsOfPage: Job[];
  loading: boolean;
  error?: string;
}

const initialState : jobState = {
  jobs: [],
  jobsOfPage: [],
  loading: false,
  error: 'false',
}

export const getJobsData = (state: jobState = initialState, action: getJobsAction) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        jobs: action.payload,
        loading: false,
        jobsOfPage :action.payload.slice(0,10)
      }
    case GET_JOBS_LOADING:
      return {
        jobs: [],
        jobsOfPage:[],
        loading: true
      }
    case GET_JOBS_ERROR:
      return {
        loading: false,
        error: action.payload
      }
    case GET_PAGINATION_JOBS:
      const page = action.payload;
      const countPerPage = 10;
      const startJobs = (page * countPerPage - 9) - 1; 
      const endJobs = page * 10;
      const jobsOfPage =state.jobs ? state.jobs.slice(startJobs,endJobs) : [];
      return {
        jobs:state.jobs,
        jobsOfPage,
        loading: false
      }
    default:
      return state;
  }
}