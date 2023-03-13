import logo from '../../logo.svg';
import React, { useEffect } from "react";
import {useDispatch} from 'react-redux';
import "./styles.scss";
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import ShowAllJobs from '../../components/ShowAllJobs/ShowAllJobs';
import { DispatchType } from '../../redux/store/store';
import { getAllJobs } from '../../redux/reducer/jobs';

function Home() {
  const dispatch:DispatchType = useDispatch()
  useEffect(() =>{
    const getjobFromApi = () => {
      getAllJobs()
    }

    getjobFromApi()
  },[])
  return (
    <div className="App">
      <header >
        <Header/>
      </header>
      <main className="home__body">
        <Navbar/>
        <ShowAllJobs/>
      </main>
    </div>
  );
}

export default Home;
