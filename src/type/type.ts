export interface JobModal {
    address: string,
    avatar: string,
    createdAt: string,
    id: string,
    tag: string,
    title: string,
}
export interface Init {
    allJobs: JobModal[]
}