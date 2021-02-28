import React from 'react';
import JobHeader from '../../components/JobHeader/JobHeader';
import JobSearchBar from '../../components/JobSearchBar/JobSearchBar';
import JobCard from '../../components/JobCard/JobCard';

interface Props {
    jobAmounts: string,
}
function JobList(props: Props) {
    const {jobAmounts} = props;
    return (
        <div className="job-section container">
            <JobHeader jobAmounts={jobAmounts}/>
            <JobSearchBar/>
            <div className="job-section__job-list">

                <div className="job-list__founded-amount">
                    <p>{jobAmounts} jobs found</p>
                </div>

                <div className="job-list__list">
                    <JobCard />
                </div>

            </div>
        </div>
    );
}

export default JobList;