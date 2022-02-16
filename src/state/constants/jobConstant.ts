export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";
export const GET_PAGINATION_JOBS = "GET_PAGINATION_JOBS";
export const API = "https://6201d6f6b8735d00174cb605.mockapi.io/api/job";
export const DEFAULT_LIMIT = 10;
export const SEARCH_JOBS = "SEARCH_JOBS";



export interface Job {
  id: string,
  title: string,
  description: string,
  requirements: string,
  benefits: string,
  salary: number,
  company: string,
  createAt: string
};

export interface getJobsAction {
  type: string,
  payload: Job[] | string | number | any
}

export interface getJobsLoading {
  type: string,
}