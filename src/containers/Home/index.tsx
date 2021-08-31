import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJobs, jobErrorSelector, jobsSelector, jobStatusSelector } from "../../store/slices/JobsSlice";
import JobList from "../Pages/components/JobList/JobList";
import "./Home.scss";

function Home() {
  const dispatch = useDispatch();
  const jobs = useSelector(jobsSelector);
  const loading = useSelector(jobStatusSelector);
  const error = useSelector(jobErrorSelector);

  // console.log("currentJobs:", currentJobs);

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);

  return (
    <React.Fragment>
      <JobList jobs={jobs} loading={loading} error={error} />
    </React.Fragment>
  );
}

export default Home;
