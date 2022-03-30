import logo from '../../logo.svg';
import React, { useEffect } from 'react';

import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store';
import axios from 'axios';
import { GetJob } from '../../actions/JobsAction';
import Header from '../../components/header/Header';
import SearchContainer from '../../components/seachContainer/SearchContainer';
import JobList from '../../components/jobList/JobList';
import Footer from '../../components/footer/Footer';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const jobState = useSelector((state: RootStore) => state.job);

  useEffect(() => {
    dispatch(GetJob(''));
  }, []);

  console.log(jobState);

  return (
    <div className='home'>
      <Header />
      <SearchContainer />
      <JobList />
      <Footer />
    </div>
  );
};

export default Home;
