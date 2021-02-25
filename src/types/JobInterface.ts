
export type JobList = {
    job_amount: number,
    jobs: Job[]
}

export type Job = {
    id: string,
    title: string,
    description: string
    company_name: string,
    publication_date: string,
    salary: string,
}