import React from "react";
import "./jobticket.scss";
import { JobTicketProps } from "../../type/type";

const JobTicket = ({ item }: JobTicketProps) => {
  const jobCreationDate = new Date(item.createdAt);
  const currentDate = new Date();

  const dateFormat = (jobCreationDate: Date) => {
    const distanceBetweenToDate = Math.abs((currentDate.getDate() - jobCreationDate.getDate()) * 24);
    const hours = Math.abs(currentDate.getDate() - jobCreationDate.getDate()) * 24 + " hour ago";
    const day = Math.abs((currentDate.getDate() - jobCreationDate.getDate()) * 24) / 24 + " day ago";
    const week = Math.ceil(Math.abs((currentDate.getDate() - jobCreationDate.getDate()) * 24) / 24 / 7) + " week ago";
    if (distanceBetweenToDate === 0) {
      return "Just now";
    }
    if (distanceBetweenToDate <= 24) {
      return hours;
    }
    if (Math.abs((currentDate.getDate() - jobCreationDate.getDate()) * 24) / 24 > 7) {
      return week;
    }
    return day;
  };
  return (
    <div className="job-ticket">
      <div className="job-ticket__left">
        <img src={item.avatar} alt={item.title} />
      </div>
      <div className="job-ticket__center">
        <h2>{item.title}</h2>
        <div className="job-ticket__center-more">
          <span>$</span>
          <p>
            Sign in to view
            <span>
              <i className="fa-sharp fa-solid fa-caret-right"></i>
            </span>
          </p>
        </div>
        <ul className="job-ticket__center-list-tag">
          <li>c++</li>
          <li>html</li>
        </ul>
      </div>
      <div className="job-ticket__right">
        <span
          className={`job-ticket__right-status ${
            item.status ? "bg-yellow" : ""
          }`}
        >
          Hot
        </span>
        <p className="job-ticket__right-address">{item.address}</p>
        <p className="job-ticket__right-time">{dateFormat(jobCreationDate)}</p>
      </div>
    </div>
  );
};

export default JobTicket;
