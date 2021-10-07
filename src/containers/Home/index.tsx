import React, { useEffect, useCallback } from "react";
import "./Home.scss";
import Total from "./total";
import Jobs from "./jobs";
import { typeStates } from "../Redux/type";
import { requestJobsAction } from "../Redux/Action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Home: React.FC = () => {
  const jobs = useSelector((state: typeStates) => state.jobs);
  const dispatch = useDispatch();

  const requestJobs = useCallback(() => {
    dispatch(requestJobsAction());
  }, [dispatch]);

  useEffect(() => {
    requestJobs();
  }, [requestJobs]);

  return (
    <div className="App">
      <Total totalJobs={jobs.jobs.length} />
      <Jobs jobs={jobs.jobs} />
    </div>
  );
};

export default Home;
