import React from "react";
import Moment from 'react-moment';
import { Job } from "../../types/Job";

interface JobItemProps {
    job: Job
}

const JobItem = (props: JobItemProps) => {
    const job = props.job;
    const calendarStrings = {
        lastDay : '[Yesterday at] LT',
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        lastWeek : '[last] dddd [at] LT',
        nextWeek : 'dddd [at] LT',
        sameElse : 'L'
    };

    return (
        <div className="job-item d-flex mb-3 pb-3 border-bottom">
            <div className="job-feature w-25">
                <img src="/faba-logo.png" width="150" alt="job feature" />
                <span className="company d-flex">{ job.company_name }</span>
            </div>
            <div className="job-content w-75">
                <h3 className="job-title d-flex align-items-center justify-content-between">
                   <a href={`/job/${ job.id }`} className="text-dark"><strong className="mr-4 w-75">{ job.title }</strong></a>
                    <sub className="date-time w-25"><Moment calendar={calendarStrings}>{ job.publication_date }</Moment></sub>
                </h3> 
                <span className="job-salary">Salary: <strong>{ job.salary ? `$${job.salary}` : null }</strong></span>
                <p className="job-description" dangerouslySetInnerHTML={{ __html: job.description }}></p>
                <div className="category"><strong>{ job.category }</strong></div>
            </div>
        </div>
    )
}

export default JobItem;