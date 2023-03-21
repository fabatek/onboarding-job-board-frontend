import React, { FC } from "react";
import { Job } from "../Home";

type Props = {
  job: Job;
  index: number;
};

const JobComponent: FC<Props> = (props) => {
  const { job, index } = props;

  return (
    <>
      <div>
        <div className="job" data-testid={`job-${index}`} key={job.id}>
          <div className="job__content" data-testid="job__content">
            <div className="content__image" data-testid="content__image">
              <img
                className="content__image-random"
                data-testid="content__image-random"
                src={job.image}
                alt="https://loremflickr.com/640/480/food"
              />
            </div>
            <div
              className={`content-tag job__content--${
                job.status ? "green" : "red"
              }`}
              data-testid="content-tag"
            >
              <span data-testid="content__status" className="content__status">
                {job.status ? "Available" : "Non-available"}
              </span>
            </div>
            <h2 className="content-name" data-testid="content-name">
              {job.name}
            </h2>
            <p className="content-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              adipisci deserunt amet eveniet delectus aliquid.
            </p>
          </div>
        </div>
      </div>
      {/* {currentJobs.length > 0 && (
        <div className="page">
          <button
            onClick={() => {
              changePage(-1);
            }}
            disabled={validCurrentPagePrevious}
            className="page__change"
          >
            Previous
          </button>
          {Array.from({
            length: Math.ceil(
              (currentJobs.length < jobsBase.length
                ? jobs.length
                : jobsBase.length) / jobsPerPage
            ),
          }).map((_, index) => (
            <button
              data-testid={`btn__page`}
              className={
                currentPage === index + 1
                  ? "btn__page btn__page--focus"
                  : "btn__page "
              }
              key={index}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => {
              changePage(1);
            }}
            disabled={validCurrentPageNext}
            className="page__change"
          >
            Next
          </button>
        </div>
      )} */}
    </>
  );
};

export default JobComponent;
