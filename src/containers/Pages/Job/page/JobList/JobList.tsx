import React from 'react';
import JobHeader from '../../components/JobHeader/JobHeader';
import JobSearchBar from '../../components/JobSearchBar/JobSearchBar';
import {jobAmount} from '../../jobSlice';
import {useSelector} from 'react-redux';
import JobCard from '../../components/JobCard/JobCard';

function JobList() {
    const jobAmounts = useSelector(jobAmount);
    return (
        <div className="job-section container">
            <JobHeader/>
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