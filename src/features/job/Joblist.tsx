import React from "react";
import Job from "./Job";
import {JobList} from '../../features/typeDefinition'
export default function Joblist({ jobList }: JobList ) {
  return (
    <div>
      {jobList.map((job: any) => {
        return <Job key={job.id} {...job}></Job>;
      })}
    </div>
  );
}
