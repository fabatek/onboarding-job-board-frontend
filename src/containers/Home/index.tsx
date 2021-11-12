import React from "react";
import Header from "../../components/Header";
import ListJob from "../../components/JobList";
import SearchHeader from "../../components/SearchHeader";

import "./styles.scss";

function Home() {
  return (
    <div className="App">
      <Header />
      <SearchHeader />
      <ListJob />
    </div>
  );
}

export default Home;
