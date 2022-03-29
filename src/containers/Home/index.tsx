import React, { ReactElement, useEffect, useState } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import getJobs from "../../redux/jobs/jobs-action";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import MainContent from "../../components/Main/MainContent";

const Home = (): ReactElement => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async (): Promise<void> => {
      await dispatch(getJobs());
      setLoading(false);
    };
    fetchJob();
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <div className="main">
          <MainContent loading={loading} />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
