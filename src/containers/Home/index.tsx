import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../api";
import { JobList } from '../components/header/header';
import { Content } from '../components/main/listjob';
import { Pagination } from "../components/pagination/pagination";
import "./styles.scss";

interface Job {
  jobs: [],
  error: null
  loading: boolean,
}

const Home: React.FC = () => {
  const jobs = useSelector((state: any)=>{return state.jobs})
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [jobPerPage,setJobPerPage] = useState(10)

  useEffect(() => {
    dispatch(getJobs());
  }, [])

  const indexLastPost = currentPage * jobPerPage;
  const indexFirstPost = indexLastPost - jobPerPage;
  const currentJob = jobs.slice(indexFirstPost,indexLastPost);
  
  const pagination = (pageNumber: number) =>{
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App">
      <JobList />
      <Content jobs={currentJob}/> 
      <Pagination
          jobPerPage={jobPerPage}
          totalJobs={jobs.length}
          pagination={pagination}
          className="pagination"
      />
    
    </div>
  );
}

export default Home;
