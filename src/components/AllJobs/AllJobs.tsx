import React, { FC, useEffect, useState } from 'react'
import './_AllJobs.scss'
import axios from 'axios';
import { jobs } from '../../types/jobsType'


const AllJobs: FC = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get('https://6176370c03178d00173daae3.mockapi.io/api/api')
        .then(res => {
            setJobs(res.data)
        }).catch(err => {
            console.log(err);
        })
    },[])
    
    return (
        <div className = "allJobs">
            <h2>All Jobs({jobs.length} Jobs)</h2>
            {jobs.map((jobs:any) => (       
                <div key={jobs.id} className="jobsCard" >
                    <div className="jobsCard__left">
                        <img src={jobs.jobImg} alt="" />
                    </div>
                    <div className = "jobsCard__center">
                        <a href="" id="name" >{jobs.jobName}</a>
                        <a href="" id="company">{jobs.jobCompany}</a>
                        <a href="" id="type">{jobs.jobType}</a>
                    </div>
                    <div className="jobsCard__right">
                        <p>{jobs.jobArea}</p>
                    </div>
                    
                </div>
        ))}
        </div>
        
    )
}

export default AllJobs
