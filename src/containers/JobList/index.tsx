import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../redux/actions/jobActions";
import JobComponent from "../JobComponent";
const JobList: React.FC = () => {
  const dispatch = useDispatch();

  //FetchJobs Data With Axios From MockAPI(jobs)
  //Use Hook useEffect
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  return (
    <section className="container container-fluid py-5">
      <div className="row py-5">
        <div className="fs-2 fw-normal mb-4">Display The First 100 Jobs</div>
        <JobComponent />
      </div>
    </section>
  );
};

export default JobList;
