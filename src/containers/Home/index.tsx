import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../api";
import { JobList } from '../components/header/header';
import { Content } from "../components/main/listjob";
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
  const [searchByKey,setSearchByKey] = useState({
    key: ''
  })

  useEffect(() => {
    dispatch(getJobs(searchByKey.key));
  }, [searchByKey])

  const indexLastPost = currentPage * jobPerPage;
  const indexFirstPost = indexLastPost - jobPerPage;
  const currentJob = jobs.slice(indexFirstPost,indexLastPost);
  const pagination = (pageNumber: number) =>{
    setCurrentPage(pageNumber);
  }

  const handleSubmitChange = (newSearchKey: any) =>{
    setSearchByKey({
      key: newSearchKey.searchKey
    });
    setCurrentPage(1);
  }

  return (
    <div className="App">
      <JobList onSubmit={(key: {})=> handleSubmitChange(key)}/>
      <Content jobs={currentJob} />
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
