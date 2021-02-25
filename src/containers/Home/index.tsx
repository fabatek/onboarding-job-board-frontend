import logo from '../../logo.svg';
import React from 'react';

import './Home.scss';
import Header from '../Header';
import Footer from '../Footer';
import JobList from '../../feartures/components/Job/JobList';

function Home() {
  return (
    <div className="container">
      <Header />
      <JobList />
      <Footer />
    </div>
  );
}

export default Home;
