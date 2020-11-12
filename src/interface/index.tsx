export interface Job{
    id: number
    url: string
    title: string
    company_name: string
    category: string
    tags: Array<string | null>
    job_type: string
    publication_date: string
    candidate_required_location: string
    salary: string
    description: string
}
export interface JobAPI {
    "0-legeal-notice": string
    "job-count": number
    jobs: Array<Job>
}