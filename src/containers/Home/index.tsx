
import React,{FC} from "react";
import { Header } from "../components/Header";
import { SearchHeader } from "../components/SearchHeader";


import "./styles.scss";

const Home:FC  = () => {


  
  return (
    <div className="App">
      <Header/>
      <div id="container">
        <SearchHeader/>
      </div>
    </div>
  );
}

export default Home;
