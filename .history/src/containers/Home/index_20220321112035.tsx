import logo from '../../logo.svg';
import React from "react";

import "./styles.scss";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Faba onboarding project - Job board
        </p>
      </header>
    </div>
  );
}

export default Home;
