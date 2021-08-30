import React from "react";
import Job from "../../../../types/types";
import JobCard from "../OneJob/JobCard";

interface Props {
  jobs: Job[];
}

function JobList(props: Props) {
  const { jobs } = props;
  return (
    <div className="jobs">
      {jobs.map((job: Job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
