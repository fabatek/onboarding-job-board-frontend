import { GetJobs, Job, JOBSPERPAGE } from "../types/jobsType";

const jobsPerPageReducer = (state:Job[]  = [], action: GetJobs )=>{
    switch(action.type){
        case JOBSPERPAGE:
            return action.payload
        default: return state
    }
}
export default jobsPerPageReducer