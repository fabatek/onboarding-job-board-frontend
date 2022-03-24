import React, { useEffect } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import getJobs from "../../redux/jobs/jobs-action";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

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
        <h1>Main Here</h1>
        <Footer />
      </div>
    </>
  );
}

export default Home;
