import React from "react";
import "./styles.scss";
import "../../customizes/customizes.scss";
import Header from "../Header";
import Footer from "../Footer";
import JobLists from "../JobList";
import JobSearch from "../JobSearch";
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
