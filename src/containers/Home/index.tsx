import React from "react";

import "./Home.scss";
import Header from './Header/Header';
import Search from './Search/Search';
import Container from './Container/Container'

const Home = () => {
    return (
        <div className="App">
            <Header />
            <Search />
            <Container />
        </div>
    );
}

export default Home;
