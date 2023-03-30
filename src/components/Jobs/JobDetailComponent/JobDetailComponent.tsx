import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineAttachMoney, MdPlace } from "react-icons/md";
import { JobModel } from "../../../types/types";

type Props = {
  jobItem: JobModel;
};

const JobDetailComponent = (props: Props) => {
  const { jobItem } = props;
  return (
    <div>
      <div className="row px-2">
        <h2 className="job-title">{jobItem?.jobTitle}</h2>
        <button className="btn btn-danger w-100">Apply Now</button>
      </div>
      <hr />
      <div className="row px-2">
        <p>
          <MdOutlineAttachMoney className="mb-1" />
          <span className="job-salary">{jobItem?.salary}</span>
        </p>
        <p>
          <MdPlace className="mb-1 me-1" />
          <span className="job-place">{jobItem?.place}</span>
        </p>
        <p>
          <BiCategoryAlt className="mb-1 me-1" />
          <span className="job-category">{jobItem?.category}</span>
        </p>
      </div>
      <div className="row px-2">
        <h5 className="mb-0">Job Description</h5>
        <span className="job-description mb-3">{jobItem?.jobDescription}</span>
        <h5 className="mb-0">Job Requirement</h5>
        <span className="job-requirement">{jobItem?.jobRequirement}</span>
      </div>
    </div>
  );
};

export default JobDetailComponent;
