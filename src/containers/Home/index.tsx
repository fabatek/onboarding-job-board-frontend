import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store';
import { getJobs } from '../../actions/JobsActions';
import JobList from '../../components/JobList';
import Pagination from '../../components/Pagination';

import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const jobState = useSelector((state: RootStore) => state.jobs);
  const [filterJobList, setFilterJobList] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const totalItem = isFilter === false ? jobState.job_count : filterJobList.length;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const [jobTitle, setJobTitle] = useState('');

  const onClickPagination = (currentPage: number) => {
      setCurrentPage(currentPage);
  };

  const onChangeJobTitle = (e: any) => {
    setJobTitle(e.target.value)
  }

  const handleSearchJobByTitle = (e: any) => {
    e.preventDefault();
    const searchResult = jobState.jobs.filter((job: any) => job && job.title.toLowerCase().startsWith(jobTitle.toLowerCase()));

    setIsFilter(true);
    setFilterJobList(searchResult);
  }

  useEffect(() => {
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
                        <input 
                        type="text" 
                        onChange={(e) => onChangeJobTitle(e)} 
                        value={ jobTitle } 
                        className="form-control" 
                        placeholder="Enter job title..." />
                        <button 
                        className="btn btn-dark ml-2" 
                        onClick={(e) => handleSearchJobByTitle(e)}
                        >Search</button>
                       </div>
                    </form>
                    { jobState.loading === true 
                      ? "Loading..."
                      : <JobList 
                        jobs={isFilter === false ? jobState.jobs : filterJobList}
                        firstItem={firstItem}
                        lastItem={lastItem}
                        isFilter={isFilter}
                        filterJobCount={isFilter === true ? filterJobList.length : null} 
                        />
                    }
                </div>
                <Pagination 
                totalItem={totalItem} 
                itemsPerPage={itemsPerPage} 
                currentPage={currentPage}
                onClickPagination={ onClickPagination } 
                />
            </div>
        </div>
    </div>
  );
}

export default Home;
