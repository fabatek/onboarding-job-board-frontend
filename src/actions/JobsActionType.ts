export const JOBS_LOADING = 'JOBS_LOADING';
export const JOBS_FAIL = 'JOBS_FAIL';
export const JOBS_SUCCESS = 'JOBS_SUCCESS';
export const SEARCH_FILTER = 'SEARCH_FILTER';

export type JobType = {
  name: string;
  description: string;
  address: string;
  company: string;
  image: string;
  hot: boolean;
  status: boolean;
  id: string;
};

export type Job = {
  jobs: JobType[];
  search: string;
};

export interface JobLoading {
  type: typeof JOBS_LOADING;
}
export interface JobFail {
  type: typeof JOBS_FAIL;
}
export interface JobSuccess {
  type: typeof JOBS_SUCCESS;
  payload: JobType[];
}
export interface SearchFilter {
  type: typeof SEARCH_FILTER;
  payload: Job;
}

export type JobDispatchTypes = JobLoading | JobFail | JobSuccess | SearchFilter;
