export const FETCH_JOB_LOADING = 'FETCH_JOBS_LOADING';
export const FETCH_JOB_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOB_FAIL ='FETCH_JOBS_FAIL';
interface RootState {
    Job: [],
    loading: boolean,
    error: null
  }
export function fetchJobsLoading() {
    return {
        type: FETCH_JOB_LOADING
    }
}

export function fetchJobsSuccess(Job:RootState) {
    return {
        type: FETCH_JOB_SUCCESS,
        payload: Job
    }
}

export function fetchJobsError(error: RootState) {
    return {
        type: FETCH_JOB_FAIL,
        error: error
    }
}