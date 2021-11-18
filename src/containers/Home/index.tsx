
import React,{FC, useEffect} from "react";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";

import { SearchHeader } from "../components/SearchHeader";
import { useDispatch } from "react-redux";
import { useSelector } from "../hooks/useTypeSelector";
import { jobActions } from "../store";

import "./styles.scss";
import JobList from "../components/JobList";

const Home:FC  = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobActions.getJobs());
  }, []);
  const { isLoading} = useSelector((state) => state.jobs);
 
  return (
    <div className="App">
      {isLoading && <Loading/>}
      <Header/>
      <div id="container">
        <SearchHeader/>
        <JobList/>
      </div>
    </div>
  );
}
export default Home;
