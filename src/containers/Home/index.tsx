import axios from "axios";
import React, { useEffect, useState } from "react";
import { isInterfaceDeclaration } from "typescript";
import { JobList } from '../components/header/header';
import { Content } from '../components/main/listjob';
import { getJobs } from "../../api";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";

// type JobsType = {
//   readonly id?: string,
//   readonly job_name?: string,
//   readonly salary?: number,
//   readonly avatar?: string,
//   readonly job_description?: string,
//   readonly location?: string,
//   readonly time?: string,
//   readonly skill?: string[],
// }

interface Job {
  jobs: [],
  error: null
  loading: boolean,
}

const Home: React.FC = () => {
  const jobs = useSelector((state: Job)=>{return state.jobs})
  const dispatch = useDispatch();

  console.log(jobs);

  useEffect(() => {
    dispatch(getJobs());
  }, [])

  return (
    <div className="App">
      <JobList jobs={jobs}/>
      <Content jobs={jobs}/>     
    </div>
  );
}

export default Home;
