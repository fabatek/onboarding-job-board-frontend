<<<<<<< HEAD
import { RootState } from "../reducer/reducer";

export const FETCH_JOB_LOADING = 'FETCH_JOBS_LOADING';
export const FETCH_JOB_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOB_FAIL = 'FETCH_JOBS_FAIL';
export const SEARCH_JOB = 'SEARCH_JOB'
export const SET_PERPAGE = 'SET_PERPAGE';
export const SET_PAPE_COUNT = 'SET_PAPE_COUNT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_JOBS = 'SET_JOBS';

export function fetchJobsLoading() {
    return {
        type: FETCH_JOB_LOADING
    }
}

export function fetchJobsSuccess(allJobs: RootState['allJobs']) {
    return {
        type: FETCH_JOB_SUCCESS,
        payload: allJobs
    }
}

export function fetchJobsError(error: RootState) {
    return {
        type: FETCH_JOB_FAIL,
        error: error
    }
}

export function search(value: RootState['value']) {
    return {
        type: SEARCH_JOB,
        payload: {
            value
        }
    }
}

export function setOffset(offset: RootState['offset']) {
    return {
        type: SET_OFFSET,
        payload: offset
    }
}

export function setJobs(jobs: RootState['jobs']) {
    return {
        type: SET_JOBS,
        payload: jobs
    }
}
=======
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
>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
