import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootStore } from "../redux/store";
import "./jobcomponent.scss";

const JobComponent: React.FC = () => {
  const jobs = useSelector((state: RootStore) => state.allJobs);
  const RenderListJobs = (): ReactElement => {
    return (
      <>
        {jobs.allJobs?.map((job) => {
          return (
            <>
              <section className="col-md-3" key={job.id}>
                <Link to={`job/${job.id}`}>
                  <div className="card mb-4 card__custom">
                    <img
                      className="card-img-top card__image"
                      src={job.image}
                      alt={job.image}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-lg-center fs-4 fw-bold text-warning">
                        {job.company}
                      </h5>
                      <p className="card-text mb-4 text-dark">{job.name}</p>
                      <p className="card-text mb-4 text-black fw-bold">
                        {job.status.toString() === "1" ? (
                          <div className="text-success">Đang hoạt động</div>
                        ) : (
                          <div className="text-danger">Tạm ngưng</div>
                        )}
                      </p>
                      <Link
                        to={`job/${job.id}`}
                        className="btn btn-primary w-100"
                      >
                        See more
                      </Link>
                    </div>
                  </div>
                </Link>
              </section>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <RenderListJobs />
    </>
  );
};
export default JobComponent;
