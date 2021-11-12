import React from "react";
import Header from "../../components/Header";
import SearchHeader from "../../components/SearchHeader";

import "./styles.scss";

function Home() {
  return (
    <div className="App">
      <Header />
      <SearchHeader />
    </div>
  );
}

export default Home;
