import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store';
import { getJobs } from '../../actions/JobsActions';
import JobList from '../../components/JobList';

import "./Home.scss";

function Home() {
  const dispatch = useDispatch();
  const jobState = useSelector((state: RootStore) => state.jobs);

  useEffect(()=>{
    dispatch(getJobs());
  },[dispatch]);

  return (
    <div className="container">
        <div className="row">
            <div className="col col-md-8">
                <div className="jobs">
                    <h2 className="mt-4 mb-4 d-flex align-items-center">
                      <img src="/faba-logo.png" width="150" alt="job feature" />
                      <span className="company d-flex">Faba Technology</span>
                    </h2>
                    <h3 className="mb-3">{ jobState.job_count } IT jobs are available</h3>
                    <form className="mb-5">
                      <div className="form-group d-flex">
                        <input type="email" className="form-control" placeholder="Enter job title..." />
                        <button type="submit" className="btn btn-dark ml-2">Search</button>
                       </div>
                    </form>
                    { jobState.loading === true ? "Loading..." : <JobList jobs={jobState.jobs} /> }
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
