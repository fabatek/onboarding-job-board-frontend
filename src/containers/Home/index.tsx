import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.scss";
import Joblist from "../../features/job/Joblist";
import {JobList} from '../../features/typeDefinition'

import {
  selectJob,
  fetchJobs,
} from "../../features/job/jobSlice";

function Home() {
  const {job} = useSelector(selectJob);
  const dispatch = useDispatch();

  const [jobList, setJobList] = useState<JobList[]>([]);

  useEffect(() => {
    dispatch(fetchJobs(setJobList));
  }, [dispatch]);

  return (
    <div className="App container">
      <div>
        <h1 className="job-title" ><span data-testid="job-number">{job.length ? job.length:'loading...'} </span>jobs are available</h1>
      </div>
      <div>
        <Joblist jobList={jobList}/>
      </div>
    </div>
  );
}

export default Home;
