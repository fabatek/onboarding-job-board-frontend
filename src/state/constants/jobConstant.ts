export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

export interface Job {
  id: string,
  title: string,
  description: string,
  requirements: string,
  benefits: string,
  salary: number,
  company: string,
  createdAt: string
};

export interface getJobsAction {
  type: string,
  payload: Job[] | string
}

export interface getJobsLoading {
  type: string,
}