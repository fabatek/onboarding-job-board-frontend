

export const GETJOBS = 'GETJOBS'
export interface Job {
    id: string,
    jobName: string,
    jobCompany:string,
    jobType: string,
    jobArea: string,
    jobImg: string
   }
   export interface GetJobs  {
    type: typeof GETJOBS,
    payload: Job[]
}