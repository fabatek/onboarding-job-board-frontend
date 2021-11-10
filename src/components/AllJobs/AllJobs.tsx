import React, { FC, useEffect } from 'react'
import './_AllJobs.scss'
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
                    <div className="jobsCard__left">
                        <img src={jobVal.jobImg} alt="image job" />
                    </div>
                    <div className="jobsCard__center">
                        <p className="name">{jobVal.jobName}</p>
                        <p className="company">{jobVal.jobCompany}</p>
                        <p className="type">{jobVal.jobType}</p>
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
