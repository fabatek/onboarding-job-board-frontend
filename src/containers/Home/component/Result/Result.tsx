import React from "react";
import Logo from "../../../../logo.svg";
import "./result.scss";
import { useAppSelector } from '../../../redux/hook'
import { Job } from '../Jobs'

interface props {
    job:Job
}

export const Box: React.FC<props> = ({
    job
}) => {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 card__container" data-testid='job_result'>
            <div className="card">
                <img className="card-img-top" src={Logo} alt="Card img" />
                <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <p className="card-text">
                        {job.company} is looking for {job.jobType}
                    </p>
                    <p className="card-text">
                        <b>Location:</b> {job.location}
                    </p>
                    <p className="card-text">
                        <b>Salary</b>: Up to {`${Math.round(job.salary * 10)}`}$
                    </p>
                    {job.available ? 
                    (
                        <button className="btn btn-primary card__btn--detail">Read more</button>
                    ) 
                    : 
                    (
                        <button className="btn btn-danger card__btn--expired">Expired</button>
                    )}
                </div>
            </div>
        </div>
  );
};

const Result = () => {
    const totalJobs = useAppSelector((state) => state.jobs.totalJobList)

    return (
        <div className="container result__container">
            <h4>Detail Jobs</h4>
            <div className="row result__detail">
                {totalJobs ? 
                (
                    totalJobs.slice(0, 100).map((job, index) => {
                        return (
                        <Box
                            key={index}
                            job={job}
                        />
                        );
                    })
                )
                :
                (
                    <div>
                        <h3>No Jobs Found</h3>
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default Result;
