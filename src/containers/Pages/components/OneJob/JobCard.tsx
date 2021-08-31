import Job from "../../../../types/types";
import React from "react";
import "./JobCard.scss";
import { Link } from "react-router-dom";

interface Props {
  job: Job;
}

function JobCard(props: Props) {
  const { job } = props;

  return (
    <div className="job">
      <img src="https://picsum.photos/300" className="job__logo" alt="logo" />
      <div className="job__info">
        <Link to="/" className="title">
          {job.title}
        </Link>
        <p className="companyname">{job.company_name}</p>
        <div className="salary-location">
          <p className="salary">$ {job.salary}</p>
          <p className="location">{job.candidate_required_location}</p>
        </div>
        <p className="category">{job.category}</p>
        <p className="jobtype">{job.job_type}</p>
      </div>
    </div>
  );
}

export default JobCard;
