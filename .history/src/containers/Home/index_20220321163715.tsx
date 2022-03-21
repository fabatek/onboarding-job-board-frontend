import logo from '../../logo.svg';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import JobList from './Axios/home';
import { getJobs } from './Axios/Jobs';

import "./styles.scss";

function Home() {
  const [count, setCount] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get('https://6238236700ed1dbc5aaedc08.mockapi.io/api/jobs');
        setCount(res.data?.count);
      } catch (err) {
        console.log(err);
      }
    }
    getData()
    // const data = getJobs() as any;
    // console.log("data: ", data);
    // setCount(data);
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
