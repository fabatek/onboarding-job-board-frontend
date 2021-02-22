
import React from 'react';
import JobCard from '../JobCard';

import './Style.scss';

function JobList(prop: any) {

    const jobs = prop.jobs;    
    return (
        <ul>
        {
            jobs.map( (job: any) => {
                return <JobCard 
                jobCompany={job.company_name}
                jobTitle = {job.title}
                jobSalary = {job.salary}
                jobDescription = {job.description}
                jobCategories = {job.category}
                
                />;
            })
        }
        </ul>
    )
}

export default JobList;