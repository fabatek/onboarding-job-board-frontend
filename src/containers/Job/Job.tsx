import React from "react";
import Header from "../../components/Header/Header";
import JobList from "../../components/Jobs/JobList/JobList";
import SearchBar from "../../components/SearchBar/SearchBar";

type Props = {};

const Job = (props: Props) => {
  return (
    <div>
      <Header />
      <SearchBar />
      <JobList />
    </div>
  );
};

export default Job;
