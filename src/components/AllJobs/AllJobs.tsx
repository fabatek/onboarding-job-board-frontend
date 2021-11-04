import React, { FC, useEffect } from 'react'
import './_AllJobs.scss'
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../../data/api'
import { Job } from '../../types/jobsType';
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
        <div className='alljobs'>

            <h2>All Jobs</h2>

            {jobs.map((jobs: Job) => (
                <div key={jobs.id} className="jobsCard">
                    <div className="jobsCard__left">
                        <img src={jobs.jobImg} alt="" />
                    </div>
                    <div className="jobsCard__center">
                        <p className="name">{jobs.jobName}</p>
                        <p className="company">{jobs.jobCompany}</p>
                        <p className="type">{jobs.jobType}</p>
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
