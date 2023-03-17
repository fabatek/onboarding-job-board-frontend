
import React from "react";
import Navbar from '../components/Navbar';
import "./styles.scss";
import Search from './Search';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
    </div>
  );
}

export default Home;
