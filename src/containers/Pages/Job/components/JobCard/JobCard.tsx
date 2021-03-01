import React from 'react';
import { Job } from '../../../../../types/JobInterface';
import ENV_URL from '../../../../../constants/shortUrl';
import {Image} from 'react-bootstrap';
import moment from 'moment';

import "./style.scss";

interface Props {
    job: Job
}
function JobCard (props: Props) {

    const {job} = props;

    const publishDateFormated = moment(job.publication_date, "YYYYMMDD").fromNow();
    const descriptionFormated = job.description.replace(/<\/?[^>]+(>|$)/g, "").substr(0,300)+", . . .";

    return (
        <li className="job-card row">
            <div className="job-card__header col-3">
                <Image 
                    className="job-card__company-logo" 
                    src={ job.company_logo_url || `${ENV_URL.PUBLIC_URL}/logo.png`} rounded />
                <p className="job-card__company-name text-left"> { job.company_name }</p>
            </div>
            <div className="job-card__description col-9">
                <div className="row">
                    <div className="col-10">
                        <h3 className="job-title"> { job.title }</h3>
                    </div>
                    <div className="col-2">
                        <p className="job-publish-date"> { publishDateFormated } </p>
                    </div>
                </div>

                <p className="job-salary"> Salary: { job.salary || 'not mention' } </p>

                <p className="job-info"> { descriptionFormated } </p>

                <p className="job-salary"> { job.tags.join(' ') } </p>
            </div>
        </li>
    );
}

export default JobCard;