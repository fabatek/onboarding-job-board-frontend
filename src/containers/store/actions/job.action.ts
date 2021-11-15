import Job from '../../models/jobModel';
import ActionTypes from './action-types';

interface GetJobsRequestAction {
    type:ActionTypes.GET_JOBS_REQUEST
}

interface GetJobsSuccessAction {
    type:ActionTypes.GET_JOBS_SUCCESS;
    payload:Job[];
}

interface GetJobsFailureAction {
    type:ActionTypes.GET_JOBS_FAIL;
    payload:string;
}
export type Action =  
    | GetJobsRequestAction
    | GetJobsSuccessAction
    | GetJobsFailureAction