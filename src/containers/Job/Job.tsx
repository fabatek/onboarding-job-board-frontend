import React from "react";
import JobList from "../../components/Jobs/JobList/JobList";
import SearchBar from "../../components/SearchBar/SearchBar";

type Props = {};

const Job = (props: Props) => {
  return (
    <div>
      <SearchBar />
      <JobList />
    </div>
  );
};

export default Job;
