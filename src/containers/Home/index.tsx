import React from 'react';
import JobFeature from '../../feartures/pages/ListPage';
import Footer from '../Footer';
import Header from '../Header';
import './Home.scss';
import {Provider} from 'react-redux';
import {store} from '../../store/store';


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
