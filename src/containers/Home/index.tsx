import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  jobErrorSelector,
  jobsSelector,
  jobStatusSelector,
} from "../../store/slices/JobsSlice";
import { jobsActions } from "../../store/slices/JobsSlice";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import JobList from "../Pages/JobList/JobList";
import Pagination from "../Pages/Pagination/Pagination";

const InputStyled = styled.input`
  width: 300px;
  padding: 15px;
  margin-top: 50px;

  outline: none;
  border-radius: 8px;

  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

function Home() {
  const dispatch = useAppDispatch();
  //selectors
  const jobs = useAppSelector(jobsSelector);
  const loading = useAppSelector(jobStatusSelector);
  const error = useAppSelector(jobErrorSelector);

  //pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const jobPerPage: number = 10;

  const indexOfLastJob = currentPage * jobPerPage;
  const indexOfFirstJob = indexOfLastJob - jobPerPage;

  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  //search
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(jobsActions.fetchJobs());
  }, [dispatch]);

  return (
    <React.Fragment>
      <InputStyled
        type="text"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
