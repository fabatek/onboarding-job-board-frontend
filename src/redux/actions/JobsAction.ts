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

export const setJobsPerPage = (currentPage: number = 2) => async (dispatch: Dispatch<GetJobs>) => {
    const jobsPerPage = 10
    const jobIndexStart = (currentPage - 1) * jobsPerPage
    const jobIndexEnd = (currentPage - 1) * jobsPerPage + jobsPerPage
    try {
        const res = await getAPI('jobs')
        var jobs = res.data.slice(jobIndexStart, jobIndexEnd)
        dispatch({
            type: GETJOBS,
            payload: jobs
        })
    } catch (error) {
        alert('Error')
    }
}

export const filterTitleJob = (filter: string) => async (dispatch: Dispatch<GetJobs>) => {
    try {
        try {
            const res = await getAPI('jobs')
            const jobs = res.data.filter((job) => {
                if(job.title) return job.title.toLowerCase().indexOf(filter) !== -1
            })
            dispatch({
                type: GETJOBS,
                payload: jobs
            })
            console.log(jobs)
        } catch (error) {
            alert('Error')
        }
    } catch (error) {

    }
}

export const setDetailJob = (job: Job) => async (dispatch: Dispatch<IJob>) => {
    dispatch({
        type: JOB,
        payload: job
    })
}