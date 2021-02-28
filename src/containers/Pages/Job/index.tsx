import React from 'react';
import JobList from './page/JobList/JobList';

import {useDispatch} from 'react-redux';
import {fetchAllJob} from '../../Pages/Job/jobSlice';
import {jobAmount} from '../Job/jobSlice';
import {useSelector} from 'react-redux';

function JobFeature() {

    const dispatch = useDispatch();
    dispatch(fetchAllJob({}));
    const jobAmounts = useSelector(jobAmount);

    return (
        <JobList jobAmounts={jobAmounts}/>
    );
}

export default JobFeature;