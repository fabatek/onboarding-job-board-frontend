import React from "react";
import Job from "../../../../types/types";
import JobCard from "../OneJob/JobCard";

interface Props {
  jobs: Job[];
  loading: boolean;
  error: boolean;
}

function JobList(props: Props) {
  const { jobs, loading, error } = props;

  const renderJobs = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Unable to load jobs!!!</p>;
    return (
      <div className="jobs">
        {jobs.map((job: Job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    );
  };

  return <>{renderJobs()}</>;
}

export default JobList;
