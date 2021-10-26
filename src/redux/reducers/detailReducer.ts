import { IJob, JOB,Job } from "../types/jobsType"

const detailReducer = (state:Job = {}, action: IJob )=>{
    switch(action.type){
        case JOB:
            return action.payload
        default: return state
    }
}
export default detailReducer