import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJobs, jobsSelector } from "../../store/slices/JobsSlice";
import JobList from "./components/JobList/JobList";

function JobContainer() {
  const dispatch = useDispatch();
  dispatch(fetchAllJobs());
  const jobsList = useSelector(jobsSelector);

  return <JobList jobs={jobsList} />;
}

export default JobContainer;
