import axios from 'axios';
import { Dispatch } from 'react';
import { JobDispatchTypes, JOBS_FAIL, JOBS_LOADING, JOBS_SUCCESS, } from './jobs-action-types';


const getJobs = () => async (dispatch:Dispatch<JobDispatchTypes>):Promise<void>=>{
    try{
        dispatch({
            type:JOBS_LOADING
        });

        const jobUrl="https://623804ad0a54d2ceab6f951b.mockapi.io/api/jobs";
        const response=await axios.get(jobUrl);

        dispatch({
            type:JOBS_SUCCESS,
            payload:response.data,
        });
    }catch(err){
        dispatch({
            type:JOBS_FAIL,
        });
    }
};

export default getJobs;
