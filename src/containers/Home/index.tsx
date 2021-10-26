import React from "react";
import Header from './Header/Header';
import Search from './Search/Search';
import Container from './Container/Container'
import "./Home.scss";

const Home = () => {
    return (
        <div className="App">
            <Header />
            <Search />
            <Container />s
        </div>
    );
}

export default Home;
