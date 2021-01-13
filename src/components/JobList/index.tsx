import React from "react";
import JobItem from '../JobItem';

interface JobProps {
    jobs: [],
    firstItem: number,
    lastItem: number,
    filterJobCount: number | null,
    isFilter: boolean
}

const JobList = (props: JobProps) => {
    const jobs = props.jobs;
    
    return (
        <div className="job-list">
            <h4 className="mb-3">{props.isFilter === true ? `${props.filterJobCount} jobs found` : 'Job list'}</h4>
            {
                jobs && jobs.slice(props.firstItem, props.lastItem).map((item: any, index: number | undefined) => {
                    return (
                        <JobItem key={index} job={item}/>
                    )
                })
            }
        </div>
    )
}

export default JobList;