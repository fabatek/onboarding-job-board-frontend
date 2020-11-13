import {JobAPI} from '../interface'
import axios from 'axios'
import { RootStateOrAny } from 'react-redux';
export const FETCH_JOBS = 'FETCH_JOBS';
export function fetchJobsRequest() {
    return (dispatch: RootStateOrAny) => {
        axios.get<JobAPI>('https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs')
            .then( (res) => {
                dispatch( fetchJobs(res.data) )
            })
            .catch( err => {
                console.log( err )
            })
    }
}
export function fetchJobs(jobs: JobAPI) {
    return {
        type: FETCH_JOBS,
        jobs
    }
}