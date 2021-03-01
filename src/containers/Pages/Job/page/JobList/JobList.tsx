import React from 'react';
import JobHeader from '../../components/JobHeader/JobHeader';
import JobSearchBar from '../../components/JobSearchBar/JobSearchBar';
import JobCard from '../../components/JobCard/JobCard';
import { Job } from '../../../../../types/JobInterface';

interface Props {
    jobAmounts: string | number,
    jobs: Job[]
}
function JobList(props: Props) {
    const {jobAmounts, jobs} = props;
    return (
        <div className="job-section container">
            <JobHeader jobAmounts={jobAmounts}/>
            <JobSearchBar/>
            <div className="job-section__job-list">

                <div className="job-list__founded-amount">
                    <p>{jobAmounts} jobs found</p>
                </div>

                <ul className="job-list__list">
                    {
                        jobs.map( (job: Job, index: number)=> {
                            return <JobCard  key={index} job={job}/>
                        })
                    }
                </ul>

            </div>
        </div>
    );
}

export default JobList;