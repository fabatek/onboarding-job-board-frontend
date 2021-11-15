
import React,{FC, useEffect} from "react";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { JobContent } from "../components/JobContent";

import  SearchHeader  from "../components/SearchHeader";
import { useDispatch } from "react-redux";
import { useSelector } from "../hooks/useTypeSelector";
import { jobActions } from "../store";

import "./styles.scss";

const Home:FC  = () => {
  const dispatch = useDispatch();
  const { isLoading, perPage } = useSelector((state) => state.jobs);
  
  
  useEffect(() => {
    dispatch(jobActions.getJobs(perPage));
  }, []);
 

  
  return (
    <div className="App">
      {isLoading && <Loading/>}
      <Header/>
      <div id="container">
        <SearchHeader/>
        <JobContent/>
      </div>
    </div>
  );
}

export default Home;
