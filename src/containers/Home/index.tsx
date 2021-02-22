import Image from 'react-bootstrap/Image';

import React, { useEffect, useState } from "react";
import JobHeading from "../../components/JobHeading";
import SearchBar from "../../components/SearchBar";
import JobList from '../../components/JobList';

import "./Home.scss";
import axios from 'axios';

function Home() {

  const [jobAmount, setJobAmount] = useState("Loading...");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    axios.get('https://remotive.io/api/remote-jobs?limit=5')
      .then( res => {
          const data = res.data;
          const jobAmount = data["job-count"];
          const jobList = data["jobs"];
          setJobAmount(jobAmount);
          setJobs(jobList);
      })  
  });
  return (
    <div className="App">
      <div className="container-md">
      <Image src={process.env.PUBLIC_URL  + '/logo.png'} className="round d-block"/>

      <JobHeading jobAmount={jobAmount}/>
      
      <SearchBar matchedJobAmount={jobAmount}/>

      <JobList jobs={jobs} />
      

      </div>
    </div>
  );
}

export default Home;
