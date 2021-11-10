import Job from "../../models/jobModel"
import ActionTypes from "../actions/action-types"
import { Action } from "../actions/job.action"


interface JobState { 
  total:number;
  page:number;
  totalPage: number;
  perPage: number;
  jobs:Job[] | null
}
const initialState = {
    total:0,
    page:0,
    totalPage:0,
    perPage:0,
    jobs:null
}
export const jobReducer = (state:JobState = initialState,action:Action):JobState => {
    switch (action.type) {
        case ActionTypes.GET_JOBS_REQUEST: 
            return {...state}
        case ActionTypes.GET_JOBS_SUCCESS:
            let lengJobs:number = action.payload.length;
            return {...state,jobs:action.payload,total:lengJobs}
        default : 
        return state
    }
}