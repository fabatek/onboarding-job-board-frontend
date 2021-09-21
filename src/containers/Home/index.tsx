import React from "react";
import "./Home.scss";
import Header from './component/header/index'
import SearchBox from './component/SearchBox/index'

function Home() {
    return (
        <div className="App container-fluid">
            <Header/>
            <SearchBox/>
        </div>
    );
}

export default Home;
