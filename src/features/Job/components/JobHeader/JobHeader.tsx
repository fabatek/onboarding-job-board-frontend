import React from 'react';
import {Image} from 'react-bootstrap';
import ENV_URL from '../../../../containers/App/constants';
import './style.scss';

import {useDispatch, useSelector} from 'react-redux';
import {jobAmount, fetchAllJob} from '../../jobSlice';

function JobHeader() {
    const jobAmounts = useSelector(jobAmount);
    const dispatch = useDispatch();
    dispatch(fetchAllJob({'limit': 100}));

    return (
        <div className="job-header">
            <Image className="job-header__logo" src={`${ENV_URL.PUBLIC_URL}/logo.png`} rounded />
            <h3 className="job-header__amount"> {jobAmounts} IT jobs are available</h3>
        </div>
    );
}

export default JobHeader;