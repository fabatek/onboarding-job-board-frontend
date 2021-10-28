import { Dispatch } from "redux"

import { getAPI } from "../../api/FetchData"
import { ALERT, IAlertType } from "../types/alertType"
import { GETJOBS, Job, GetJobs, IJob, JOB, JOBSPERPAGE } from "../types/jobsType"
import { Page, PAGECURRENT } from "../types/pageType"

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

export const setJobsPerPage = (currentPage: number, jobsCurrent: Job[]) => async (dispatch: Dispatch<GetJobs | IAlertType | Page>) => {
    const jobsPerPage = 10
    const jobIndexStart = (currentPage - 1) * jobsPerPage
    const jobIndexEnd = (currentPage - 1) * jobsPerPage + jobsPerPage
    if (Object.keys(jobsCurrent).length > 0) {
        const newJobsCurrent = jobsCurrent.slice(jobIndexStart,jobIndexEnd)
        dispatch({
            type: GETJOBS,
            payload: newJobsCurrent
        })
    }
    else {
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
                type: PAGECURRENT,
                payload: currentPage
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

}

export const setDetailJob = (job: Job) => async (dispatch: Dispatch<IJob | IAlertType>) => {
    if (job.id) {
        dispatch({
            type: JOB,
            payload: job
        })
    }
    else {
        try {
            const res = await getAPI('jobs')
            dispatch({
                type: JOB,
                payload: res.data[0]
            })
        } catch (error) {

        }
    }

}

export const filterTitleJob = (filter: string, jobs: Job[]) => async (dispatch: Dispatch<GetJobs | IAlertType>) => {
    dispatch({
        type: ALERT,
        payload: {
            loading: true
        }
    })
    const searchJobs = await jobs.filter((job) => {
        if (job.title) return job.title.toLowerCase().indexOf(filter) !== -1
    })
    dispatch({
        type: GETJOBS,
        payload: searchJobs
    })
    dispatch({
        type: ALERT,
        payload: {
            loading: false
        }
    })
}
