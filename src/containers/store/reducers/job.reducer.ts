import Job from "../../models/jobModel"
import ActionTypes from "../actions/action-types"
import { Action } from "../actions/job.action"


interface JobState { 
  total:number;
  page:number;
  totalPage: number;
  perPage: number;
  jobs:Job[] | null;
  isLoading:boolean;
}
const initialState = {
    total:0,
    page:0,
    totalPage:0,
    perPage:0,
    jobs:null,
    isLoading:false
}
export const jobReducer = (state:JobState = initialState,action:Action):JobState => {
    switch (action.type) {
        case ActionTypes.GET_JOBS_REQUEST: 
            return {...state,isLoading:true}
        case ActionTypes.GET_JOBS_SUCCESS:
            let lengthJobs:number = action.payload.length;
            return {...state,jobs:action.payload,total:lengthJobs,isLoading:false}
        case ActionTypes.GET_JOBS_FAIL :
            return {...state,isLoading:false}
        default : 
        return state
    }
}