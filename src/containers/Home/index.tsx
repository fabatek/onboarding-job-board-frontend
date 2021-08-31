import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllJobs,
  jobErrorSelector,
  jobsSelector,
  jobStatusSelector,
} from "../../store/slices/JobsSlice";
import JobList from "../Pages/components/JobList/JobList";
import Pagination from "../Pages/components/Pagination/Pagination";
import "./Home.scss";

function Home() {
  const dispatch = useDispatch();
  const jobs = useSelector(jobsSelector);
  const loading = useSelector(jobStatusSelector);
  const error = useSelector(jobErrorSelector);

  //pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const jobPerPage = 10;

  const indexOfLastJob = currentPage * jobPerPage;
  const indexOfFirstJob = indexOfLastJob - jobPerPage;

  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  //search
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);

  return (
    <React.Fragment>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <JobList
        jobs={currentJobs}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
      />
      <Pagination
        paginate={paginate}
        jobPerPage={jobPerPage}
        totalJobs={jobs.length}
      />
    </React.Fragment>
  );
}

export default Home;
