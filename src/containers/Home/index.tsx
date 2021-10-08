import React, { useEffect, useCallback, useState } from "react";
import "./Home.scss";
import Total from "./total";
import Jobs from "./jobs";
import Pagination from "./pagination";
import { typeStates } from "../Redux/type";
import { requestJobsAction } from "../Redux/Action";
import { SystemState } from "../Redux/type";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

type pageTypes = {
  pageSize: number;
  jobsOfPage: SystemState["jobs"];
  currentPage: number;
};

const Home: React.FC = () => {
  const [page, setPage] = useState<pageTypes>({
    pageSize: 10,
    jobsOfPage: [],
    currentPage: 1,
  });

  const jobs = useSelector((state: typeStates) => state.jobs); //reducer
  const dispatch = useDispatch(); //dispatch

  //request jobs
  const requestJobs = useCallback(() => {
    dispatch(requestJobsAction());
  }, [dispatch]);

  // when the component is first render  that call requestJobs()
  useEffect(() => {
    requestJobs();
  }, [requestJobs]);

  //set jobsOfPage
  const onChangePage = (
    currentPage: number,
    jobsOfPage: pageTypes["jobsOfPage"]
  ) => {
    setPage({ ...page, currentPage, jobsOfPage });
  };
  return (
    <div className="App">
      <Total totalJobs={jobs.totalJobs} />
      <Jobs jobs={page.jobsOfPage} />
      <Pagination
        onChangePage={onChangePage}
        pageSize={page.pageSize}
        currentPage={page.currentPage}
        countPage={Math.ceil(jobs.jobs.length / page.pageSize)} //100 : pageSize
        jobList={jobs.jobs}
      />
    </div>
  );
};

export default Home;
