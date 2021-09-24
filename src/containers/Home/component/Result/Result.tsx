import React, {useState, useEffect} from "react";
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
                        <b>Salary</b>: Up to {`${Math.round(job.salary * 10)}$`}
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
    const dataLimit: number = 10;
    const pageLimit: number = 5;

    const [pages] = useState<number>(Math.round(totalJobs.length / dataLimit));
    const [currentPage, setCurrentPage] = useState<number>(1);
  
    function goToNextPage() {
       setCurrentPage((page) => page + 1);
    }
  
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }
  
    function changePage(event: any) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
  
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return totalJobs.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill(0).map((_, idx) => start + idx + 1);
    };

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
      }, [currentPage]);

    return (
        <div className="container result__container">
            <h4>Detail Jobs</h4>
            <div className="row result__detail">
                {getPaginatedData().map((job, index) => {
                    return (
                        <Box key={index} job={job}/>
                    )
                })}
            </div>
            <div className='row result__pagination d-flex justify-content-center align-items-center'>
                <div className='btn-group' role='group' aria-label="pagination">
                <button
                    onClick={goToPreviousPage}
                    type='button'
                    className={
                        `btn btn-outline-primary result__pagination__btn ${currentPage === 1 ? 'disabled result__pagination__btn--disable' : ''}`
                    }
                >
                    Prev
                </button>

                {getPaginationGroup().map((item, index) => (
                <button
                    key={index}
                    onClick={changePage}
                    type='button'
                    className={
                        `btn btn-outline-primary result__pagination__btn ${currentPage === item ? 'result__pagination__btn--active' : null}`
                    }
                >
                    <span>{item}</span>
                </button>
                    ))
                }

                <button
                    onClick={goToNextPage}
                    type='button'
                    className={
                        `btn btn-outline-primary result__pagination__btn ${currentPage === pages ? 'disabled result__pagnation__btn--disable' : ''}`
                    }
                >
                    Next
                </button>
                </div>
            </div>
        </div>
    );
};

export default Result;
