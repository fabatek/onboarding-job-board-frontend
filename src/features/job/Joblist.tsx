import React from "react";
import Job from "./Job";
// eslint-disable-next-line
import {JobSliceValue, Job as job} from '../../features/typeDefinition'

 const Joblist: React.FC<JobSliceValue> = (props: JobSliceValue) => {
  return (
    <div>
      {props.job.map((job: job) => {
        return <Job key={job.id} {...job}></Job>;
      })}
    </div>
  );
}
export default Joblist