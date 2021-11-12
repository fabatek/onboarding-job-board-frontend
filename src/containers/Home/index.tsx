import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../api";
import { JobList } from '../components/header/header';
import { Content } from '../components/main/listjob';
import "./styles.scss";

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

  useEffect(() => {
    dispatch(getJobs());
  }, [])

  return (
    <div className="App">
      <JobList />
      <Content jobs={jobs}/>     
    </div>
  );
}

export default Home;
