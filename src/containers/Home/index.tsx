import React, { useEffect } from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { getJob } from '../../actions/JobsAction';
import Header from '../../components/header/Header';
import JobList from '../../components/jobList/JobList';
import Footer from '../../components/footer/Footer';
import SearchContainer from '../../components/searchContainer/SearchContainer';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJob(''));
  }, [dispatch]);

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
