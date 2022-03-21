import React from "react";

import "./styles.scss";
import "../../customizes/customizes.scss";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import JobLists from "../Job_List/JobList";
import JobSearch from "../Job_Search/JobSearch";
import ScrollToTop from "../Scroll_To_Top/ScrollToTop";

function Home() {
  return (
    <div className="home">
      <Header/>
      <JobSearch/>
      <JobLists/>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default Home;
