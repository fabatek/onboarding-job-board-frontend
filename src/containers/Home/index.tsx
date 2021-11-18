import { FC, useEffect } from "react";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { SearchHeader } from "../components/SearchHeader";
import { useDispatch } from "react-redux";
import { useSelector } from "../hooks/useTypeSelector";
import { jobActions } from "../store";
import "./styles.scss";
import JobList from "../components/JobList";
import { useParams } from "react-router-dom";

const Home: FC = () => {
  const dispatch = useDispatch();
  const { isLoading, perPage } = useSelector((state) => state.jobs);
  const { pageNumber } = useParams();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      window.scrollTo(0, 0);
      const page = pageNumber ? Number(pageNumber) : undefined;
      dispatch(jobActions.getJobs(perPage, page));
    }
    return () => {
      isMounted = false;
    };
  }, [pageNumber]);

  return (
    <div className="App">
      {isLoading && <Loading />}
      <Header />
      <div id="container">
        <SearchHeader />
        <JobList />
      </div>
    </div>
  );
};
export default Home;
