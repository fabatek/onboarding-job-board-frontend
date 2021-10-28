import { IJob, JOB,Job } from "../types/jobsType"

const detailReducer = (state:Job | null = {}, action: IJob)=>{
    switch(action.type){
        case JOB:
            if(action.payload)
                return action.payload 
            else return state
        default: return state
    }
}

export default detailReducer