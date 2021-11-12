import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../api";
import { JobList } from '../components/header/header';
import { Content } from '../components/main/listjob';
import "./styles.scss";

interface Job {
  jobs: [],
  error: null
  loading: boolean,
}

const Home: React.FC = () => {
  const jobs = useSelector((state: Job)=>{return state.jobs})
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, [])

  return (
    <div className="App">
      <JobList />
      <Content />     
    </div>
  );
}

export default Home;
