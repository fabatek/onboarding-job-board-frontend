import axios from "axios"
import { Dispatch } from "redux"
import { getAPI } from "../../api/FetchData"
import { GETJOBS, Job, GetJobs, IJob, JOB } from "../types/jobsType"

export const getJobs = () => async (dispatch: Dispatch<GetJobs>) => {
    try {
        const res = await getAPI('jobs')
        dispatch({
            type: GETJOBS,
            payload: res.data
        })
    } catch (error) {
        alert('Error')
    }
}

export const setJobsPerPage = (currentPage: number) => async (dispatch: Dispatch<GetJobs>) => {
    return currentPage
}
export const setDetailJob = (job: Job) => async (dispatch: Dispatch<IJob>) => {
    dispatch({
        type: JOB,
        payload: job
    })
   
}