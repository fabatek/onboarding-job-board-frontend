import logo from '../../logo.svg';
import React, { useEffect, useState } from "react";
import JobList from './Axios/home';
import { getJobs } from './Axios/Jobs';

import "./styles.scss";

function Home() {
  const [count, setCount] = useState();

  useEffect(() => {
    const data = getJobs() as any;
    console.log(data);
    setCount(data);
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Faba onboarding project - Job board
        </p>
        <JobList/>
        <p>
          {count}
        </p>
      </header>
    </div>
  );
}

export default Home;
