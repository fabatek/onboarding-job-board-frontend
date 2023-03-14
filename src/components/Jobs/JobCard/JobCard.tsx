import React from "react";
import "../../../assets/styles/JobCard/JobCard.scss";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { MdOutlineAttachMoney, MdPlace } from "react-icons/md";

type Props = {
  item: any;
};

const JobCard = (props: Props) => {
  const { item } = props;
  return (
    <div className="container p-2 my-2 overflow-hidden job-card-container">
      <div className="row align-items-center">
        <div className="col-4">
          <div className="logo-company ">
            <img src={item.image} alt="" className="w-100 logo-company-img" />
          </div>
        </div>
        <div className="col-8">
          <h6 className="job-title mb-1 text-truncate">
            <AiFillInfoCircle className="mb-1 me-1" />
            {item.jobTitle}
          </h6>
          <span className="company-name text-truncate">
            <AiFillHome className="mb-1 me-1" /> {item.companyName}
          </span>
          <div className="mt-2">
            <span className="salary display-inline me-2">
              <MdOutlineAttachMoney className="mb-1" />
              {item.salary}
            </span>
            <span className="place">
              <MdPlace className="mb-1 me-1" />
              {item.place}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
