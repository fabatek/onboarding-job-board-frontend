import React from "react";
import "./JobCard.scss";

type Props = {
  item: any;
};

const JobCard = (props: Props) => {
  const { item } = props;
  return (
    <div
      className="container p-2 my-2 overflow-hidden"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#FFF0BA",
      }}
    >
      <div className="row align-items-center">
        <div className="col-4">
          <div className="logo-company">
            <img
              src={item.image}
              alt=""
              className="w-100"
              style={{ border: "1px solid #ccc", borderRadius: "4px" }}
            />
          </div>
        </div>
        <div className="col-8">
          <h5 className="job-title mb-1 text-truncate">
            <i className="fa-solid fa-circle-info"></i> {item.jobTitle}
          </h5>
          <span className="company-name text-truncate">
            <i className="fa-solid fa-building"></i> {item.companyName}
          </span>
          <div className="my-1">
            <span className="salary display-inline me-2">{item.salary} $</span>
            <span className="place">{item.place}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
