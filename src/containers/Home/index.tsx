import React from "react";
import Header from "../../components/Header";
import JobList from "../../components/JobList/index";
import SearchHeader from "../../components/SearchHeader";

import "./styles.scss";

function Home() {
  return (
    <div className="App">
      <Header />
      <SearchHeader />
      <JobList />
    </div>
  );
}

export default Home;
