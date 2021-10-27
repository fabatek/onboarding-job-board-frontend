import { GetJobs ,GETJOBS ,Job} from "../types/jobsType";

const jobsReducer = (state: Job[]  = [], action: GetJobs )=>{
    switch(action.type){
        case GETJOBS:
            return action.payload
        default: return state
    }
}
export default jobsReducer