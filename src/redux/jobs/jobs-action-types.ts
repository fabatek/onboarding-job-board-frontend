export const JOBS_LOADING = "JOBS_LOADING";
export const JOBS_SUCCESS = "JOBS_SUCCESS";
export const JOBS_FAIL = "JOBS_FAIL";
export const JOBS_FILTER = "JOBS_FILTER";

export type JobType = {
  id: number;
  name: string;
  benefits: string;
  languages: string;
  address1: string;
  address2: string;
  hot: boolean;
  description: string;
};

interface JobLoading {
  type: typeof JOBS_LOADING;
}

interface JobFail {
  type: typeof JOBS_FAIL;
  //payload:''
}

interface JobSuccess {
  type: typeof JOBS_SUCCESS;
  payload: JobType[];
}

interface JobFilter {
  type: typeof JOBS_FILTER;
  payload:{
      keyword:string, 
      jobs:JobType[];
  }
}

export type JobDispatchTypes = JobLoading | JobFail | JobSuccess | JobFilter;
