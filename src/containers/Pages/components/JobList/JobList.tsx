import React from "react";
import Job from "../../../../types/types";
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
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Unable to load jobs!!!</p>;
    return (
      <div className="jobs">
        {jobs
          .filter((val) =>
            searchTerm === ""
              ? val
              : val.title
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ? val
              : null
          )
          .map((job: Job) => (
            <JobCard key={job.id} job={job} />
          ))}
      </div>
    );
  };

  return <>{renderJobs()}</>;
}

export default JobList;
