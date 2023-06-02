import React, { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { filterAction, jobAPI, search, updateLoading } from "../../redux/reducer/JobReducer";
import { DispatchType, RootState } from "../../redux/configStore";
import JobComponent from "../JobComponent/JobComponent";
import Search from "../search/Search";

export interface Job {
  id: number;
  name: string;
  status: boolean;
  image: string;
  dateStart: string;
  dateEnd: string;
  email: string;
  price: number;
  type: string;
}

function Home() {
  const { jobs, jobsBase, loading } = useSelector((state: RootState) => {
    return state.JobReducer;
  });

  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [currentJobs, setCurrentJobs] = useState<Job[]>([]);
  const [typeJob, setTypeJob] = useState("All");
  const jobsPerPage = 10;

  const dispatch: DispatchType = useDispatch();

  useEffect(() => {

    if (jobsBase.length < 100) {
      dispatch(jobAPI());
      dispatch(updateLoading(false))
    }

    countAvailableJob();
    let current = jobs.slice(
      (currentPage - 1) * jobsPerPage,
      currentPage * jobsPerPage
    );

    setCurrentJobs(current);
  }, [jobs]);
  useEffect(() => {
    const inputSearch: search = {
      searchInput: searchInput,
      typeJob: typeJob,
    };
    dispatch(filterAction(inputSearch));
  }, []);
  useEffect(() => {
    let current = jobs.slice(
      (currentPage - 1) * jobsPerPage,
      currentPage * jobsPerPage
    );

    setCurrentJobs(current);
  }, [currentPage]);

  const countAvailableJob = () => {
    let arr = jobsBase.filter((job: Job) => job.status);
    setCount(arr.length);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const changePage = (number: number) => {
    setCurrentPage(currentPage + number);
  };
  const validCurrentPageNext = !!(currentPage >= 10);
  const validCurrentPagePrevious = !!(currentPage <= 1);

  const handleSearchInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchInput(e.target.value);
    setCurrentPage(1);
  };
  function handleTypeChange(e: {
    target: { value: React.SetStateAction<string> };
  }) {
    setTypeJob(e.target.value);
    setCurrentPage(1);
  }

  function handleSearch() {
    const inputSearch: search = {
      searchInput: searchInput,
      typeJob: typeJob,
    };
    dispatch(filterAction(inputSearch));
    setCurrentPage(1);
  }
  function handleEnterSearch(e: KeyboardEvent) {
    const inputSearch: search = {
      searchInput: searchInput,
      typeJob: typeJob,
    };
    if (e.key === "Enter") {
      {
        dispatch(filterAction(inputSearch));
      }
    }
  }
  function searchByType() {
    const inputSearch: search = {
      searchInput: searchInput,
      typeJob: typeJob,
    };
    dispatch(filterAction(inputSearch));
    setCurrentPage(1);
  }

  return (
    <div className="App">
      <Search
        count={count}
        handleSearchInput={handleSearchInput}
        handleEnterSearch={handleEnterSearch}
        handleSearch={handleSearch}
        handleTypeChange={handleTypeChange}
        typeJob={typeJob}
        searchByType={searchByType}
      />
      <h1 data-testid="title" className="title">
        Top Employers
      </h1>
      <div className="loading">
        <LoadingOverlay
          active={loading}
          spinner={true}
          text="Content is loading..."
          className="loading__overlay"
        >
          {currentJobs.length === 0 ? (
            <div className="job__notFound">
              No such job match your searching
            </div>
          ) : (
            <div className="job__list" data-testid="job-list">
              {currentJobs.map((job: Job, index) => {
                return (
                  <div key={index}>
                    <JobComponent job={job} index={index} />
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
          )}
        </LoadingOverlay>
      </div>
    </div>
  );
}

export default Home;
