import Job from '../../models/jobModel';
import ActionTypes from './action-types';

interface GetJobsRequestAction {
    type:ActionTypes.GET_JOBS_REQUEST
}

interface GetJobsSuccessAction {
    type:ActionTypes.GET_JOBS_SUCCESS;
    payload:{
        jobs:Job[];
        jobsPage:Job[];
        page:number;
    };
}

interface GetJobsFailureAction {
    type:ActionTypes.GET_JOBS_FAIL;
    payload:string;
}
export type Action =  
    | GetJobsRequestAction
    | GetJobsSuccessAction
    | GetJobsFailureAction