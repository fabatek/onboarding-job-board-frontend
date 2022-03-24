import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/actions/jobActions";

const JobList: React.FC = () => {
  const dispatch = useDispatch();

  //jobs =>  #t02
  const jobs = useSelector((state) => state);

  //FetchJobs Data With Axios From MockAPI(jobs)
  //Use Hook useEffect
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);
  return (
    <section className="container container-fluid py-5">
      <div className="row py-5">
        <div className="card-body">
          <div className="card-heading d-flex justify-content-center align-content-center">
            This is Top Jobs
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobList;
