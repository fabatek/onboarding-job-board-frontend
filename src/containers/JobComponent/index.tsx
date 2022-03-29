import React, { ReactElement, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { HiOutlineCursorClick } from "react-icons/hi";
import "./jobcomponent.scss";
import RenderLoading from "../CustomReuse/Loading";

//Default Job Number Appear in Page is 10
const JOBS_PER_PAGE: number = 10;

const JobComponent: React.FC = () => {
  //get Data Jobs
  const jobs = useSelector((state: RootStore) => state.allJobs);

  //Set Default Page number
  const [pageNumber, setPageNumber] = useState<number>(0);

  //Example PageNumber
  const pageVisited: number = pageNumber * JOBS_PER_PAGE;

  //Page Count
  //Create ItemPageCount receive length jobs....
  const jobLength: number = jobs.allJobs?.length!;

  // const pageCount = Math.ceil(jobs.allJobs?.length / jobPerPage);
  const pageCount: number = Math.ceil(jobLength / JOBS_PER_PAGE);

  //Change page when click button
  const pageChange = ({ selected }: { selected: number }): void => {
    setPageNumber(selected);
  };

  //Render List Jobs
  const RenderListJobs = (): ReactElement => {
    return (
      <>
        {jobs.allJobs
          ?.slice(pageVisited, pageVisited + JOBS_PER_PAGE)
          .map((job) => {
            return (
              <>
                <section className="col-md-3" key={job.id}>
                  <div className="card mb-4 card__custom">
                    <img
                      className="card-img-top card__image"
                      src={job.image}
                      alt={job.image}
                    />
                    <div className="card-body">
                      <h5 className="card-heading d-flex justify-content-center text-lg-center fs-4 fw-bold text-danger">
                        {job.company}
                      </h5>
                      <div className="fw-normal text-center px-2 d-inline py-1 text-danger mb-2 border border-danger rounded-circle">
                        {job.id}
                      </div>
                      <div className="card-text my-4 text-dark fw-normal">
                        {job.name}
                      </div>
                      <div className="card-text mb-4 text-black fw-bold">
                        {job.status.toString() === "1" ? (
                          <div className="text-success">Đang hoạt động</div>
                        ) : (
                          <div className="text-danger">Tạm ngưng</div>
                        )}
                      </div>
                      <button className="btn btn-outline-primary d-flex justify-content-center align-items-center w-100 fw-normal fs-5">
                        <HiOutlineCursorClick />
                        See detail
                      </button>
                    </div>
                  </div>
                </section>
              </>
            );
          })}
      </>
    );
  };

  return (
    <>
      {jobLength > 0 ? (
        <>
          <RenderListJobs />
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={pageChange}
            breakLabel="..."
            previousClassName={"pagination__item"}
            previousLinkClassName={"pagination__item--link"}
            pageClassName={"pagination__item"}
            pageLinkClassName={"pagination__item--link"}
            nextClassName={"pagination__item"}
            nextLinkClassName={"pagination__item--link"}
            activeClassName={"active"}
            previousLabel={<GrFormPreviousLink />}
            nextLabel={<GrFormNextLink />}
            disabledClassName={"disable"}
            containerClassName={"pagination justify-content-center"}
          />
        </>
      ) : (
        <RenderLoading />
      )}
    </>
  );
};
export default JobComponent;
