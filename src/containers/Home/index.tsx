
import React from "react";
import Navbar from '../components/Navbar';
import "./styles.scss";
import Search from './Search';
import Jobs from './Jobs';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <Jobs/>
    </div>
  );
}

export default Home;
