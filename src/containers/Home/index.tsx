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
  const jobs = useSelector((state: typeStates) => state.jobs);
  const dispatch = useDispatch();

  const requestJobs = useCallback(() => {
    dispatch(requestJobsAction());
  }, [dispatch]);

  useEffect(() => {
    requestJobs();
  }, [requestJobs]);
  useEffect(() => {
    setPage({ ...page, jobsOfPage: jobs.jobs });
  }, [jobs]);

  const onChangePage = (jobsOfPage: pageTypes["jobsOfPage"]) => {
    setPage({ ...page, jobsOfPage });
  };
  return (
    <div className="App">
      <Total totalJobs={jobs.jobs.length} />
      <Jobs jobs={page.jobsOfPage} />
      <Pagination
        onChangePage={onChangePage}
        pageSize={page.pageSize}
        currentPage={page.currentPage}
        conntPage={Math.ceil(jobs.jobs.length / page.pageSize)} //100 : pageSize
      />
    </div>
  );
};

export default Home;
