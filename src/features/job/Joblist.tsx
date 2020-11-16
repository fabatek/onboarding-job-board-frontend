import React from 'react'
import Job from './Job'
export default function Joblist({jobList}:any) {
    return (
        <div>
            {jobList.map((job:any)=>{
                return(
                    <div>
                        <Job key={job.id}
                             {...job}
                        ></Job>
                    </div>
                )
            })}
        </div>
    )
}
