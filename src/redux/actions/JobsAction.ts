import { Dispatch } from "redux"

import { getAPI } from "../../api/FetchData"
import { ALERT, IAlertType } from "../types/alertType"
import { GETJOBS, Job, GetJobs, IJob, JOB, JOBSPERPAGE } from "../types/jobsType"

export const getJobs = () => async (dispatch: Dispatch<GetJobs | IAlertType>) => {
    try {
        dispatch({
            type: ALERT,
            payload: {
                loading: true
            }
        })
        const res = await getAPI('jobs')
        dispatch({
            type: GETJOBS,
            payload: res.data
        })
        dispatch({
            type: ALERT,
            payload: {
                loading: false
            }
        })
    } catch (error) {
        alert(error)
    }
}

export const setJobsPerPage = (currentPage: number) => async (dispatch: Dispatch<GetJobs | IAlertType>) => {
    const jobsPerPage = 10
    const jobIndexStart = (currentPage - 1) * jobsPerPage
    const jobIndexEnd = (currentPage - 1) * jobsPerPage + jobsPerPage
    try {
        dispatch({
            type: ALERT,
            payload: {
                loading: true
            }
        })
        const res = await getAPI('jobs')
        var jobs = res.data.slice(jobIndexStart, jobIndexEnd)
        dispatch({
            type: JOBSPERPAGE,
            payload: jobs
        })
        dispatch({
            type: ALERT,
            payload: {
                loading: false
            }
        })
    } catch (error) {
        alert('Error')
    }
}

export const setDetailJob = (job: Job) => async (dispatch: Dispatch<IJob | IAlertType>) => {
    dispatch({
        type: JOB,
        payload: job
    })
}