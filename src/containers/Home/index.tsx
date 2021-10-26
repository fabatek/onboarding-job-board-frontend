import logo from '../../logo.svg';
import React from "react";

import "./Home.scss";
import Header from './Header/Header';
import Search from './Search/Search';
import Container from './Container/Container'

function Home() {
  return (
    <div className="App">

      <Header />
      <Search />
      <Container />


      <div className="container">

      </div>
    </div>
  );
}

export default Home;
