import React, { FC, useEffect } from 'react'
import './_AllJobs.scss'
<<<<<<< HEAD
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../../data/api'
import { Job } from '../../types/jobsType';
import { RootState } from '../../reducer/reducer';

const AllJobs: FC = () => {
    const jobs = useSelector((state: RootState) => state.allJobs);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch])

    return (

        <div className='alljobs'>

            <h2>All Jobs</h2>

            {jobs.map((jobVal: Job) => (
                <div key={jobVal.id} className="jobsCard">
=======

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
        <div className = 'alljobs'>
            
            <h2>All Jobs</h2>
            {jobs.map((jobs:any) => (       
                <div key={jobs.id} className="jobsCard">
>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
                    <div className="jobsCard__left">
                        <img src={jobVal.jobImg} alt="image job" />
                    </div>
<<<<<<< HEAD
                    <div className="jobsCard__center">
                        <p className="name">{jobVal.jobName}</p>
                        <p className="company">{jobVal.jobCompany}</p>
                        <p className="type">{jobVal.jobType}</p>
=======
                    <div className = "jobsCard__center">
                        <a href="" className="name">{jobs.jobName}</a>
                        <a href="" className="company">{jobs.jobCompany}</a>
                        <a href="" className="type">{jobs.jobType}</a>
>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
                    </div>
                    <div className="jobsCard__right">
                        <p>{jobVal.jobArea}</p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default AllJobs
