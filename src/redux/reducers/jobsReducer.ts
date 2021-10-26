import { GetJobs ,GETJOBS} from "../types/jobsType";

const jobsReducer = (state  = [], action: GetJobs )=>{
    switch(action.type){
        case GETJOBS:
            return action.payload
        default: return state
    }
}
export default jobsReducer