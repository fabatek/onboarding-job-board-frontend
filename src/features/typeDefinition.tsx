export type Job = {
    id: number,
    url: string,
    title: string,
    company_name: string,
    category: string,
    tags: string[],
    job_type: string,
    publication_date: string,
    candidate_required_location: string,
    salary: string,
    description: string
}
export type JobSliceValue={
    job: Job[]
}
export type JobList = Job[]

export type TagList = {
    tag: string[]
}