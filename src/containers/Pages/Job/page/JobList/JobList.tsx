import React from 'react';
import JobHeader from '../../components/JobHeader/JobHeader';
import JobSearchBar from '../../components/JobSearchBar/JobSearchBar';

import {useDispatch, useSelector} from 'react-redux';
import {jobAmount, fetchAllJob} from '../../jobSlice';
import JobCard from '../../components/JobCard/JobCard';


function JobList() {

    const jobAmounts = useSelector(jobAmount);
    const dispatch = useDispatch();
    dispatch(fetchAllJob({}));

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