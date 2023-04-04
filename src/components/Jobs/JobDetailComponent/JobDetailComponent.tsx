import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineAttachMoney, MdPlace } from "react-icons/md";
import { JobModel } from "../../../types/types";
import { Button } from "../../../assets/styles/style";

type Props = {
  jobItem: JobModel;
};

const JobDetailComponent = (props: Props) => {
  const { jobItem } = props;
  return (
    <div className="job-detail-wrapper">
      <div className="row px-2">
        <h2 className="job-detail-wrapper__job-title">{jobItem?.jobTitle}</h2>
        <Button type="danger">Apply Now</Button>
      </div>
      <hr />
      <div className="row px-2">
        <p>
          <MdOutlineAttachMoney className="mb-1" />
          <span className="job-detail-wrapper__salary">{jobItem?.salary}</span>
        </p>
        <p>
          <MdPlace className="mb-1 me-1" />
          <span className="job-detail-wrapper__place">{jobItem?.place}</span>
        </p>
        <p>
          <BiCategoryAlt className="mb-1 me-1" />
          <span className="job-detail-wrapper__category">
            {jobItem?.category}
          </span>
        </p>
      </div>
      <div className="row px-2">
        <h5 className="mb-0">Job Description</h5>
        <span className="job-detail-wrapper__descriptionn mb-3">
          {jobItem?.jobDescription}
        </span>
        <h5 className="mb-0">Job Requirement</h5>
        <span className="job-detail-wrapper__requirement">
          {jobItem?.jobRequirement}
        </span>
      </div>
    </div>
  );
};

export default JobDetailComponent;
