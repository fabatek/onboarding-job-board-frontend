import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJobs, jobsSelector } from "../../store/slices/JobsSlice";
import JobContainer from "../Pages";
import "./Home.scss";

function Home() {
  const dispatch = useDispatch();
  const jobs = useSelector(jobsSelector);
  console.log(jobs);

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);

  return (
    <div className="App">
      <JobContainer />
    </div>
  );
}

export default Home;
