 interface JobModal {
    address: string,
    avatar: string,
    createdAt: string,
    id: string,
    tag: string,
    title: string,
}
 interface JobInitReducer {
    allJobs: JobModal[]
}
export type {
    JobModal,
    JobInitReducer,
}