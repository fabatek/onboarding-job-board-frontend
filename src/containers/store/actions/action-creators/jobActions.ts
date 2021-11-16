import axios from 'axios';
import { Dispatch} from 'redux'
import Job from '../../../models/jobModel';
import ActionTypes from '../action-types'
import { Action } from '../job.action';
export const getJobs = () => async (dispatch: Dispatch<Action>)  => {
    try {
        dispatch({
            type: ActionTypes.GET_JOBS_REQUEST
        })

        const {data} = await axios.get<Job[]>("https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs");
        dispatch({
            type: ActionTypes.GET_JOBS_SUCCESS,
            payload: data
        })
    }catch (err:any) {
        dispatch({
            type: ActionTypes.GET_JOBS_SUCCESS,
            payload: err.message
        })
    }


}