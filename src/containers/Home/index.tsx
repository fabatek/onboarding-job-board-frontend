import logo from '../../logo.svg';
import React, { useEffect } from "react";

import "./styles.scss";
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import ShowAllJobs from '../../components/ShowAllJobs/ShowAllJobs';


function Home() {
 
  return (
    <div className="App">
      <header >
        <Header/>
      </header>
      <main className="home__body">
        <Navbar/>
        <ShowAllJobs/>
      </main>
    </div>
  );
}

export default Home;
