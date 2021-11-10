
import React,{FC,useEffect} from "react";
import {useDispatch} from 'react-redux';
import {useSelector} from '../hooks/useTypeSelector'
import { jobActions } from "../store";

import "./styles.scss";

const Home:FC  = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobActions.getJobs());
  },[])

  const { total,jobs } = useSelector(state => state.jobs)
  return (
    <div className="App">
      <h1>{total}</h1>
      <ul>
        {jobs && jobs.map(job => (<li key={job.id}>{job.title}</li>))}
      </ul>
    </div>
  );
}

export default Home;
