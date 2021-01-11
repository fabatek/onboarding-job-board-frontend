import { Dispatch } from 'redux';
import { JobsDispatchType, JOBS_LOADING, JOBS_LOADING_FAIL, JOBS_LOADING_SUCCESS } from './JobsActionsType';
import { JobService } from '../services'

export const getJobs = () => async (dispatch: Dispatch<JobsDispatchType>) => {
    try {
        dispatch({
            type: JOBS_LOADING
        })

        const res = await JobService.getJobs('https://remotive.io/api/remote-jobs');

        dispatch({
            type: JOBS_LOADING_SUCCESS,
            payload: res.data
        })
    } catch(e) {
        dispatch({
            type: JOBS_LOADING_FAIL
        })
    }
};

