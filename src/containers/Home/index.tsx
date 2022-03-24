import React, { useEffect } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import getJobs from "../../redux/jobs/jobs-action";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import MainContent from "../../components/Main/MainContent";

function Home(): JSX.Element {
  const dispatch = useDispatch();
  //const jobState = useSelector((state:RootStore)=>state.job);

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <div className="main">
          <MainContent />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
