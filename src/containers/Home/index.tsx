import React from "react";

import "./Home.scss";
import Header from './Header/Header';
import Search from './Search/Search';
import Container from './Container/Container'
import { useSelector } from "react-redux";
import { RootStore } from "../../utils/TypeScripts";
import Loading from "../../utils/Loading/Loading";

const Home = () => {
    const alertType = useSelector((state:RootStore)=>state.alertType)
    return (
        <div className="App">
            <Header />
            <Search />
            {
                alertType.loading ===true? <Loading /> : <Container />
            }
            
        </div>
    );
}

export default Home;
