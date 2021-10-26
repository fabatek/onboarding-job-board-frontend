import { Dispatch } from "redux"
import { getAPI } from "../../api/FetchData"
import { GETJOBS, GetJobs} from "../types/jobsType"

export const getJobs = () => async(dispatch : Dispatch <GetJobs>)=>{
    
    try {
        const res = await getAPI('jobs')
        dispatch({
            type: GETJOBS,
            payload: res.data 
        })
        
    } catch (error) {
        alert('Error')
    }
}

export const setJobsPerPage = (currentPage:number)=> async(dispatch: Dispatch <GetJobs>)=>{
    return currentPage
}