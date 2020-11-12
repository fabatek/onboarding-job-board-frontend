import axios from "axios";
import React, {useState, useEffect} from "react";
import {JobAPI, Job} from '../../interface/index'
import "./Home.scss";
function Home() {
  const [jobcount, setJobcount] = useState<number>(0)
  const [jobdata, setJobdata] = useState<Array<any>>([])
  useEffect(() => {
    axios.get<JobAPI>('https://remotive.io/api/remote-jobs')
    .then( (res) => {
      setJobcount(res.data['job-count'])
    })
    .catch( (err) => {
      console.log(err)
    })
  })
  return (
    <div className="home">
      <img src={window.location.origin + '/faba.png'} />
      <p>{jobcount} IT Jobs are available</p> 
    </div>
  );
}

export default Home;
