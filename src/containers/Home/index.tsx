import React from "react";
import Header from './Header/Header';
import Search from './Search/Search';
import Container from './Container/Container'
import "./Home.scss";

const Home = () => {
    return (
        <div className="App" >
            <Header />
            <Search />
            <Container />
        </div>
    );
}

export default Home;
