import { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../redux/actions/jobActions";
import JobComponent from "../JobComponent";
import { animated, useSpring } from "react-spring";

const JobList: React.FC = () => {
  const dispatch = useDispatch();

  //FetchJobs Data With Axios From MockAPI(jobs)
  //Use Hook useEffect
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  //Style Animated Element
  const AnimationTitle = (): ReactElement => {
    const styles = useSpring({
      loop: false,
      from: { opacity: 0, color: "#f1f1f1" },
      to: { opacity: 1, color: "#000" },
    });
    return (
      <animated.div style={styles}>Display The First 100 Jobs</animated.div>
    );
  };

  return (
    <section className="container container-fluid py-5">
      <div className="row py-5">
        <div className="fs-2 fw-normal mb-5 d-flex justify-content-center">
          <AnimationTitle />
        </div>
        <JobComponent />
      </div>
    </section>
  );
};

export default JobList;
