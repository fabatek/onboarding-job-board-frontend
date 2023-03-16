import React, { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
import { jobAPI } from "../../redux/reducer/JobReducer";
import { DispatchType, RootState } from "../../redux/configStore";
import BounceLoader from "react-spinners/BounceLoader";
export interface Job {
  id: number;
  name: string;
  status: string;
  image: string;
}

function Home() {
  const { jobs } = useSelector((state: RootState) => {
    return state.JobReducer;
  });

  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  const currentJobs = jobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(jobAPI());
    countAvailableJob();
  });

  const countAvailableJob = () => {
    let arr = jobs.filter((job) => job.status);
    setCount(arr.length);
  };

  const loadingContent = !!(jobs.length <= 0);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const changePage = (number: number) => {
    setCurrentPage(currentPage + number);
  };
  const validCurrentPageNext = !!(currentPage >= 10);
  const validCurrentPagePrevious = !!(currentPage <= 0);
  return (
    <div className="App">
      <h1 style={{ textAlign: "left" }} data-testid="title" className="title">
        Nhà tuyển dụng hàng đầu
      </h1>
      <h2>{count} Có Việc Làm IT Cho Developer "Chất"</h2>
      <LoadingOverlay
        active={loadingContent}
        spinner={<BounceLoader className="loading" />}
        text="Loading your content..."
      >
        {currentJobs.length > 0 && (
          <div className="job__list" data-testid="job-list">
            {currentJobs.map((job: Job, index) => {
              return (
                <div className="job" data-testid={`job${index}`} key={job.id}>
                  <div className="job__content" data-testid="job__content">
                    <div
                      className="content__image"
                      data-testid="content__image"
                    >
                      <img
                        className="content__image-random"
                        data-testid="content__image-random"
                        src={job.image}
                        alt=""
                      />
                    </div>
                    <div
                      className={`content-tag job__content--${
                        job.status ? "green" : "red"
                      }`}
                      data-testid="content-tag"
                    >
                      <span
                        data-testid="content__status"
                        className="content__status"
                      >
                        {job.status ? "Available" : "Non-available"}
                      </span>
                    </div>
                    <h2 className="content-name" data-testid="content-name">
                      {job.name}
                    </h2>
                    <p className="content-description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Unde adipisci deserunt amet eveniet delectus aliquid.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
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
          {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }).map(
            (_, index) => (
              <button
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
            )
          )}
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
      </LoadingOverlay>
    </div>
  );
}

export default Home;
