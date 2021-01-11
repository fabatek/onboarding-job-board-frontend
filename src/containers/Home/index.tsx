import logo from '../../logo.svg';
import React from "react";

import "./Home.scss";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Faba onboarding project - Job board
        </p>
        <a href="/">Learn react</a>
      </header>
    </div>
  );
}

export default Home;
