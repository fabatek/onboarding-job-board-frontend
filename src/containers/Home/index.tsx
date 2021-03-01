import logo from '../../logo.svg';
import React from 'react';

import './Home.scss';
import Header from '../Header';
import Footer from '../Footer';
import JobFeature from '../../feartures/pages/ListPage';

function Home() {
  return (
    <div className="container app">
      <Header />
      <JobFeature />
      <Footer />
    </div>
  );
}

export default Home;
