import React from 'react';
import { Job } from '../../../../../types/JobInterface';
import ENV_URL from '../../../../../constants/shortUrl';
import {Image} from 'react-bootstrap';

interface Props {
    job: Job
}
function JobCard(props: Props) {

    const {job} = props;
    
    return (
        <li className="job-card row">
            <div className="job-card__header col-3">
                <Image className="job-card__company-logo" src={`${ENV_URL.PUBLIC_URL}/logo.png`} rounded />
                <p className="job-card__company-name text-left"> { job.company_name } </p>
            </div>
            <div className="job-description col-9">
                <h3 className="job-title"> { "%job_title%" }</h3>
                <p className="job-salary">Salary: { "%job_salary%" }</p> 
            </div>
        </li>
    );
}

export default JobCard;