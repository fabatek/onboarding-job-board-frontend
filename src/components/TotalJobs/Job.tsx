
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {fetchJobs} from '../../data/api'
import {Job} from '../../types/jobsType'
interface RootState {
    Job: [],
    loading: boolean,
    error: null
  }
export function JobTotal() {
    const jobs = useSelector((state: RootState) => state.Job);
    const [lists, setLists] = useState<Job[]>()
   
    const dispatch = useDispatch()
     useEffect(() => {
        dispatch(fetchJobs())
        }, [dispatch])
        
    return (
        <div>
            <h1>Có tất cả {jobs?.length} IT Jobs For Chất Developers</h1>

        </div>

    
    )
}
