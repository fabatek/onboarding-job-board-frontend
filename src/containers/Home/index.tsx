import React,{useState} from "react";
import Header from "../../components/Header";
import JobList from "../../components/JobList";
import SearchHeader from "../../components/SearchHeader";

import "./styles.scss";

function Home() {
  const [text, setText] = useState<String>("");
  const setSearch = (text :String) =>{
    setText(text);
  }
  return (
    <div className="App">
      <Header />
      <SearchHeader text={text} handleSearch={setSearch}  />
      <JobList text={text} />
    </div>
  );
}

export default Home;
