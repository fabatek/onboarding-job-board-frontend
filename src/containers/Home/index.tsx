import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import "./Home.scss";
import "./Search";
import Search from "./Search";
import Joblist from "../../features/job/Joblist";

import {
  incrementByAmount,
  selectJob,
  fetchJobs,
} from "../../features/job/jobSlice";

function Home() {
  const {job} = useSelector(selectJob);
  const dispatch = useDispatch();

  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    dispatch(fetchJobs(setJobList));
  }, []);

  //Search
  // const handleSearch = (searchString:string)=>{
  //   let result = fullJobList.filter((job:any)=> job.title.includes(searchString));
  //   setJoblist(result)
  // }

  return (
    <div className="App container">
      <div>
        <span data-testid="job-number">{job.length ? job.length:'loading...'} </span>jobs are available 
      </div>
      {/* <div> <Search handleSearch={handleSearch}/></div> */}
      <div>
        <Joblist jobList={jobList}/>
      </div>
    </div>
  );
}

export default Home;
