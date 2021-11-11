interface Job {
    job: [],
    error: string,
    loading: boolean
}

export const fetchDataLoading = () => {
    return {
        type: "FETCH_JOBS_REQUEST"
    }
}

export const fetchDataSuccess = (jobs: Job) =>{
    return {
        type: "FETCH_JOBS_SUCCESS",
        payload: jobs
    }
}

export const fetchDataError = (error: Job) =>{
    return {
        type: "FETCH_JOBS_ERROR",
        payload: error
    }
}