import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store';
import { getJobs } from '../../actions/JobsActions';
import JobList from '../../components/JobList';
import Pagination from '../../components/Pagination';

import "./Home.scss";

function Home() {
  const dispatch = useDispatch();
  const jobState = useSelector((state: RootStore) => state.jobs);
  const totalItem = jobState.job_count;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;

  const onClickPagination = (currentPage: number) => {
      setCurrentPage(currentPage);
  };

  useEffect(()=>{
    dispatch(getJobs());
  },[dispatch]);

  return (
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-8 col-lg-12">
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
                    { jobState.loading === true 
                      ? "Loading..."
                      : <JobList 
                      jobs={jobState.jobs}
                      firstItem={firstItem}
                      lastItem={lastItem} />
                    }
                </div>
                <Pagination 
                totalItem={totalItem} 
                itemsPerPage={itemsPerPage} 
                currentPage={currentPage}
                onClickPagination={ onClickPagination } />
            </div>
        </div>
    </div>
  );
}

export default Home;
