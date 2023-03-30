import React from "react";
import { JobModel } from "../../types/types";

type Props = {
  jobItem: JobModel;
};

const CompanyCard = (props: Props) => {
  const { jobItem } = props;
  return (
    <div className="card shadow-sm p-3 mb-5 bg-white rounded">
      <img
        src={jobItem?.image}
        className="card-img-top p-3 rounded"
        alt="company__img"
        loading="lazy"
      />
      <div className="card-body text-center">
        <h5 className="card-title">{jobItem?.companyName}</h5>
        <p className="card-text">{jobItem?.companyDescription}</p>
        <a href="/" className="btn btn-outline-danger">
          View Our Company Page
        </a>
      </div>
    </div>
  );
};

export default CompanyCard;
