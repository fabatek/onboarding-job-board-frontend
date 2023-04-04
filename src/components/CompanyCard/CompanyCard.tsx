import React from "react";
import { JobModel } from "../../types/types";
import { Button } from "../../assets/styles/style";

type Props = {
  jobItem: JobModel;
};

const CompanyCard = (props: Props) => {
  const { jobItem } = props;
  return (
    <div className="card shadow-sm p-3 mb-5 bg-white rounded">
      <img
        src={jobItem?.image}
        className="card__img-top p-3 rounded"
        alt="company__img"
        loading="lazy"
      />
      <div className="card__body text-center">
        <h5 className="card__title">{jobItem?.companyName}</h5>
        <p className="card__text">{jobItem?.companyDescription}</p>
        <Button href="/" type="danger">
          View Our Company Page
        </Button>
      </div>
    </div>
  );
};

export default CompanyCard;
