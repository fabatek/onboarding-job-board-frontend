export const JOBS_LOADING = "JOBS_LOADING";
export const JOBS_LOADING_FAIL = "JOBS_LOADING_FAIL";
export const JOBS_LOADING_SUCCESS = "JOBS_LOADING_SUCCESS";

export type JobTpye = {
    jobs: any,
    'job-count': number
}

export interface JobsLoading {
    type: typeof JOBS_LOADING
}

export interface JobsLoadingFail {
    type: typeof JOBS_LOADING_FAIL
}

export interface JobsLoadingSuccess {
    type: typeof JOBS_LOADING_SUCCESS,
    payload: JobTpye
}

export type JobsDispatchType = JobsLoading | JobsLoadingFail | JobsLoadingSuccess