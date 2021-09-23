import React from "react";
import Logo from "../../../../logo.svg";
import "./result.scss";
import { useAppSelector } from '../../../redux/hook'
import { Jobs } from '../Jobs'

interface Job {
    job:Jobs
}

export const Box: React.FC<Job> = ({
    job
}) => {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 card_container" data-testid='job_result'>
            <div className="card">
                <img className="card-img-top" src={Logo} alt="Card img" />
                <div className="card-body">
                    <h5 className="card-title">{job.Title}</h5>
                    <p className="card-text">
                        {job.Company} is looking for {job.jobType}
                    </p>
                    <p className="card-text">
                        <b>Location:</b> {job.Location}
                    </p>
                    <p className="card-text">
                        <b>Salary</b>: Up to {`${Math.round(job.Salary * 10)}`}$
                    </p>
                    {job.Available ? 
                    (
                        <button className="btn btn-primary card_btn-detail">Read more</button>
                    ) 
                    : 
                    (
                        <button className="btn btn-danger card_btn-expired">Expired</button>
                    )}
                </div>
            </div>
        </div>
  );
};

const Result = () => {
    const totalJobs = useAppSelector((state) => state.jobs.totalJobList)

    return (
        <div className="container result_container">
            <h4>Detail Jobs</h4>
            <div className="row result_detail">
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
