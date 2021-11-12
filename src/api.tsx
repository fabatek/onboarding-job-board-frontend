import axios from "axios"
import { Dispatch } from "redux"
import {fetchDataLoading, fetchDataSuccess, fetchDataError} from './redux/actions'

export const getJobs = (key: string) =>{

    return (async (dispatch: Dispatch) =>{
        dispatch(fetchDataLoading())
        await axios.get(`https://618b2d6b3013680017343f68.mockapi.io/api/v1/jobList`)
            .then(res=>{
                const jobList = res.data
                const result = jobList.filter((job: any) =>{
                    return job.job_name.toLowerCase().includes(key.toLowerCase())
                })
                dispatch(fetchDataSuccess(result))
            })
            .catch(err=>{
                console.log(err)
                dispatch(fetchDataError(err))
            })
    })
}