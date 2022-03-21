import logo from '../../logo.svg';
import React, { useEffect, useState } from "react";
import JobList from './Axios/home';

import "./styles.scss";

function Home() {

  const [count, setCount] = useState();

  useEffect(() => {

  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Faba onboarding project - Job board
        </p>
        <JobList/>
      </header>
    </div>
  );
}

export default Home;
