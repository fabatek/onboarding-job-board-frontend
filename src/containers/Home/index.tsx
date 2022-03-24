import React from "react";
import "./styles.scss";
import "../../customizes/customizes.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import JobLists from "../JobList/JobList";
import JobSearch from "../JobSearch/JobSearch";
import ScrollToTop from "../Scroll_To_Top/ScrollToTop";

function Home() {
  return (
    <div className="home">
      <Header />
      <JobSearch />
      <JobLists />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;
