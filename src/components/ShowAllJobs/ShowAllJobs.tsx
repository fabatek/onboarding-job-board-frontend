import React, { useEffect, useState } from "react";
import { DispatchType, RootState } from "../../redux/store/store";
import { getAllJobs } from "../../redux/reducer/jobs";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { JobModal } from "../../type/type";
import JobTicket from "../Job/JobTicket";
import "./showAllJobs.scss";
import Pagination from "../Pagination/Pagination";

const ShowAllJobs = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const jobsPerPage = 10
  const lastIndex = currentPage * jobsPerPage;
  const firstIndex = lastIndex - jobsPerPage;
  
  const { allJobs, loading } = useSelector(
    (state: RootState) => state.jobReducer
  );
  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  return (
    <div className="show-all-jobs" data-testid="total-jobs">
      <div className="container">
        <div className="row">
          <div className=" bg-white p-0">
            <div className="wrapper">
              {loading ? (
                <Loading />
              ) : (
                <>
                  <h2 className="p-3">
                    {allJobs.length} việc làm IT tại Việt Nam
                    <hr />
                  </h2>
                  <ul className="list-unstyled list-job" data-testid="list-job">
                    {allJobs
                      .slice(firstIndex, lastIndex)
                      .map((job: JobModal, index: number) => (
                        <li key={index} data-testid="list-item-test">
                          <JobTicket item={job} />
                        </li>
                      ))}
                  </ul>
                  <Pagination
                    pageSize={jobsPerPage}
                    totalJobs={allJobs.length}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowAllJobs;
