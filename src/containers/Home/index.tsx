import React, { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
import { jobAPI } from "../../redux/reducer/JobReducer";
import { DispatchType, RootState } from "../../redux/configStore";

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
  const [searchInput, setSearchInput] = useState("");
  const [currentJobs, setCurrentJobs] = useState<Job[]>([]);
  const jobsPerPage = 10;

  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    if (jobs.length <= 0) {
      dispatch(jobAPI());
    }
    countAvailableJob();
    let current = jobs.slice(
      (currentPage - 1) * jobsPerPage,
      currentPage * jobsPerPage
    );

    setCurrentJobs(current);
  }, [jobs]);

  useEffect(() => {
    let current = jobs.slice(
      (currentPage - 1) * jobsPerPage,
      currentPage * jobsPerPage
    );

    setCurrentJobs(current);
  }, [currentPage]);

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

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };
  const handleSearch = () => {
    if (searchInput === "".trim()) {
      let current = jobs.slice(
        (currentPage - 1) * jobsPerPage,
        currentPage * jobsPerPage
      );

      setCurrentJobs(current);
    } else {
      let jobFind = jobs.filter((job) => job.name === searchInput);
      setCurrentJobs(jobFind);
    }
  };
  return (
    <div className="App">
      <div className="header">
        <img
          src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
          className="header__logo"
          alt=""
        />
      </div>
      <div className="search">
        <div className="search__content">
          <div className="job--available">
            <h2>{count} Có Việc Làm IT Cho Developer "Chất"</h2>
          </div>
          <div className="search__bar">
            <div className="search--icon">
              <i className="fa fa-search"></i>
            </div>
            <input
              type="text"
              className="search__input"
              placeholder="Search job by title"
              onChange={handleSearchInput}
            />
            <span>
              <button
                className="btn__search"
                onClick={() => {
                  handleSearch();
                }}
              >
                Search
              </button>
            </span>
          </div>
        </div>
      </div>
      <h1
        style={{ textAlign: "left", marginLeft: "50px" }}
        data-testid="title"
        className="title"
      >
        Nhà tuyển dụng hàng đầu
      </h1>
      <div className="loading">
        <LoadingOverlay
          active={loadingContent}
          spinner={true}
          text="Loading your content..."
          className="loading__overlay"
        >
          {currentJobs.length > 0 && (
            <div className="job__list" data-testid="job-list">
              {currentJobs.map((job: Job, index) => {
                return (
                  <div
                    className="job"
                    data-testid={`job-${index}`}
                    key={job.id}
                  >
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Unde adipisci deserunt amet eveniet delectus
                        aliquid.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {currentJobs.length > 0 && (
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
                  (currentJobs.length < jobs.length / 10
                    ? currentJobs.length
                    : jobs.length) / jobsPerPage
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
          )}
        </LoadingOverlay>
      </div>
    </div>
  );
}

export default Home;
