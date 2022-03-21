import logo from '../../logo.svg';
import axios from 'axios';
import React, { useEffect, useState } from "react";

import "./styles.scss";

function Home() {
  const [count, setCount] = useState();

  async function getData() {
    try {
      const res = await axios.get('https://6238236700ed1dbc5aaedc08.mockapi.io/api/jobs');
      setCount(res.data?.count);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData()
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Faba onboarding project - Job board
        </p>
        <p>
          {count} Jobs For You
        </p>
      </header>
    </div>
  );
}

export default Home;
