export const GETJOBS = 'GETJOBS'

export interface Job {
    id?: string,
    title?: string,
    salary?: number,
    reason?: Array<string>,
    skills?: Array<string>,
    desc?: Array<string>
}

export interface GetJobs  {
    type: typeof GETJOBS,
    payload: Job[]
}