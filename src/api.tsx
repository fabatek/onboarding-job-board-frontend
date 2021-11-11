import axios from "axios"
import { Dispatch } from "redux"
import {fetchDataLoading, fetchDataSuccess, fetchDataError} from './redux/actions'

export const getJobs = () =>{

    return ((dispatch: Dispatch) =>{
        dispatch(fetchDataLoading())
        axios.get("https://618b2d6b3013680017343f68.mockapi.io/api/v1/jobList")
            .then(res=>{
                const jobList = res.data
                dispatch(fetchDataSuccess(jobList))
            })
            .catch(err=>{
                console.log(err)
                dispatch(fetchDataError(err))
            })
    })
}