import React, { FC, useEffect } from 'react'
import './_AllJobs.scss'

import { useSelector, useDispatch } from 'react-redux';
import {fetchJobs} from '../../data/api'
interface RootState {
    Job: [],
    loading: boolean,
    error: null
  }

const AllJobs: FC = () => {
    const jobs = useSelector((state: RootState) => state.Job);
    const dispatch = useDispatch()
     useEffect(() => {
        dispatch(fetchJobs())
        }, [dispatch])
        
    return (
        <div>
            
            <h2>All Jobs</h2>
            {jobs.map((jobs:any) => (       
                <div key={jobs.id} className="jobsCard">
                    <div className="jobsCard__left">
                        <img src={jobs.jobImg} alt="" />
                    </div>
                    <div className = "jobsCard__center">
                        <a href="" className="name">{jobs.jobName}</a>
                        <a href="" className="company">{jobs.jobCompany}</a>
                        <a href="" className="type">{jobs.jobType}</a>
                    </div>
                    <div className="jobsCard__right">
                        <p>{jobs.jobArea}</p>
                    </div>
                </div>
            ))}
        </div>
        
    )
}

export default AllJobs
