import React from 'react';
import {Image} from 'react-bootstrap';
import ENV_URL from '../../../../../constants/shortUrl';
import './style.scss';

interface Props {
    jobAmounts: any
}
function JobHeader(props: Props) {

    const {jobAmounts} = props;

    return (
        <div className="job-section__job-header">
            <Image className="job-header__logo" src={`${ENV_URL.PUBLIC_URL}/logo.png`} rounded />
            <h3 className="job-header__amount"> {jobAmounts} IT jobs are available</h3>
        </div>
    );
}

export default JobHeader;