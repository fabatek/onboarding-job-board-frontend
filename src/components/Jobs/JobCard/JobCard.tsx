import React from "react";
import "../../../assets/styles/JobCard/JobCard.scss";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { MdOutlineAttachMoney, MdPlace } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { JobModel } from "../../../types/types";
import { NavLink } from "react-router-dom";

type Props = {
  item: JobModel;
};

const JobCard = (props: Props) => {
  const { item } = props;
  return (
    <div
      className="container p-2 my-2 overflow-hidden job-card-container"
      data-testid="job-card"
    >
      <div className="row align-items-center">
        <div className="col-4">
          <div className="logo-company">
            <img
              src={item.image}
              alt=""
              className="w-100 logo-company__img"
              loading="lazy"
              data-testid="job-card__img"
            />
          </div>
        </div>
        <div className="col-8 job-card-info">
          <h4
            className="job-card-info__job-title mb-1 text-truncate"
            data-testid="job-card__title"
          >
            <AiFillInfoCircle className="mb-1 me-1" />
            {item.jobTitle}
          </h4>
          <span
            className="job-card-info__company-name text-truncate fs-5"
            data-testid="job-card__company-name"
          >
            <AiFillHome className="mb-1 me-1" /> {item.companyName}
          </span>
          <div className="mt-2">
            <span
              className="job-card-info__salary display-inline me-2"
              data-testid="job-card__salary"
            >
              <MdOutlineAttachMoney className="mb-1" />
              {item.salary}
            </span>
            <span
              className="job-card-info__place"
              data-testid="job-card__place"
            >
              <MdPlace className="mb-1 me-1" />
              {item.place}
            </span>
            <span
              className="job-card-info__category ms-2"
              data-testid="job-card__category"
            >
              <BiCategoryAlt className="mb-1 me-1" />
              {item.category}
            </span>
          </div>
          <div className="row px-2 mt-2 text-center">
            <NavLink to={`/jobs/${item.id}`} className="btn btn-success">
              View Detail
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
