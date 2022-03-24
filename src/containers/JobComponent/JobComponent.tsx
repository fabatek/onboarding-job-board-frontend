import React, { ReactElement } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./jobcomponent.scss";

const JobComponent: React.FC = () => {
  const jobs = useSelector((state: RootStateOrAny) => state.allJobs.jobs);
  const RenderListJobs = (): ReactElement => {
    return (
      <>
        {jobs.map((job: any) => {
          const { id, name, company, image, status } = job;
          return (
            <section className="col-md-3" key={id}>
              <Link to={`job/${id}`}>
                <div className="card mb-4 card-custom">
                  <input
                    type="image"
                    src={image}
                    width="120px"
                    height="180px"
                    className="card-img-top"
                    alt={image}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-lg-center fs-4 fw-bold text-warning">
                      {company}
                    </h5>
                    <p className="card-text mb-4 text-dark">{name}</p>
                    <p className="card-text mb-4 text-black fw-bold">
                      {status === 1 ? (
                        <div className="text-danger">Tạm ngưng</div>
                      ) : (
                        <div className="text-success">Đang hoạt động</div>
                      )}
                    </p>
                    <Link to={`job/${id}`} className="btn btn-primary w-100">
                      See more
                    </Link>
                  </div>
                </div>
              </Link>
            </section>
          );
        })}
      </>
    );
  };
  return (
    <>
      {jobs.length > 0 ? (
        <RenderListJobs />
      ) : (
        //Using Loading.. with h1 ta because RenderListJobs => Asynchronous
        <h1 className="fs-5">Loading...</h1>
      )}
    </>
  );
};
export default JobComponent;
