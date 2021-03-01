import React from 'react';
import JobList from './page/JobList/JobList';

import {useDispatch} from 'react-redux';
import {fetchAllJob} from '../../Pages/Job/jobSlice';
import {jobAmount, jobList} from '../Job/jobSlice';
import {useSelector} from 'react-redux';

function JobFeature() {

    const dispatch = useDispatch();
    
    dispatch(fetchAllJob({limit: 100}));
    const jobAmounts = useSelector(jobAmount);
    const jobs = useSelector(jobList);

    return (
        <JobList jobAmounts={jobAmounts} jobs={jobs}/>
    );
}

export default JobFeature;