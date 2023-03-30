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
    <div className="container p-2 my-2 overflow-hidden job-card-container">
      <div className="row align-items-center">
        <div className="col-4">
          <div className="logo-company">
            <img
              src={item.image}
              alt=""
              className="w-100 logo-company__img"
              loading="lazy"
            />
          </div>
        </div>
        <div className="col-8 job-card-info">
          <h4 className="job-card-info__job-title mb-1 text-truncate">
            <AiFillInfoCircle className="mb-1 me-1" />
            {item.jobTitle}
          </h4>
          <span className="job-card-info__company-name text-truncate fs-5">
            <AiFillHome className="mb-1 me-1" /> {item.companyName}
          </span>
          <div className="mt-2">
            <span className="job-card-info__salary display-inline me-2">
              <MdOutlineAttachMoney className="mb-1" />
              {item.salary}
            </span>
            <span className="job-card-info__place">
              <MdPlace className="mb-1 me-1" />
              {item.place}
            </span>
            <span className="job-card-info__category ms-2">
              <BiCategoryAlt className="mb-1 me-1" />
              {item.category}
            </span>
          </div>
          <div className="row px-2 mt-2 text-center">
            <button className="btn btn-success view-detail-btn">
              <NavLink
                to={`/jobs/${item.id}`}
                className="text-decoration-none text-white"
              >
                View Detail
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
