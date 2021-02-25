import React from 'react';
import JobList from './page/JobList/JobList';

import {useDispatch} from 'react-redux';
import {fetchAllJob} from '../../Pages/Job/jobSlice';

function JobFeature() {

    const dispatch = useDispatch();
    dispatch(fetchAllJob({}));
    
    return (
        <JobList/>
    );
}

export default JobFeature;