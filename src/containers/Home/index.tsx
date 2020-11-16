import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.scss";

import {
  selectJob,
  fetchJobs,
} from "../../features/job/jobSlice";

function Home() {
  const {job} = useSelector(selectJob);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchJobs())
  }, [dispatch]);

  return (
    <div className="App container">
      <div>
        <span data-testid="job-number">{job.length ? job.length:'loading...'} </span>jobs are available 
      </div>
    </div>
  );
}

export default Home;
