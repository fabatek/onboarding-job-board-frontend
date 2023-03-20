import React from "react";
import JobList from "../../components/Jobs/JobList/JobList";
import SearchBar from "../../components/SearchBar/SearchBar";

type Props = {};

const Job = (props: Props) => {
  return (
    <>
      <SearchBar />
      <JobList />
    </>
  );
};

export default Job;
