export const GETJOBS = 'GETJOBS'
export const JOB = 'DETAILJOB'
export const PAGE = 'PAGE'
export const JOBSPERPAGE = 'JOBS_PER_PAGE'

export interface Job {
    id?: string,
    title?: string,
    image?:string,
    salary?: number,
    reason?: Array<string>,
    skills?: Array<string>,
    desc?: Array<string>
}

export interface IJob{
    type: typeof JOB,
    payload: Job
}

export interface GetJobs  {
    type: typeof GETJOBS | typeof JOBSPERPAGE,
    payload: Job[]
}