import React from "react";
import { Job } from "../../../types/types";
import JobCard from "../OneJob/JobCard";

interface Props {
  jobs: Job[];
  loading: boolean;
  error: boolean;
  searchTerm: string;
}

function JobList(props: Props) {
  const { jobs, loading, error, searchTerm } = props;

  const renderJobs = () => {
    if (loading) return <p data-testid="loading">Loading...</p>;
    if (error) return <p data-testid="error">Unable to load jobs!!!</p>;
    return (
      <>
        {jobs
          .filter(
            (val) =>
              val.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
          )
          .map((job: Job) => (
            <JobCard key={job.id} job={job} />
          ))}
      </>
    );
  };

  return <>{renderJobs()}</>;
}

export default JobList;
