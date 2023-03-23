import React, { useEffect } from "react";
import { DispatchType, RootState } from "../../redux/store/store";
import { getAllJobs } from "../../redux/reducer/jobs";
import { useDispatch, useSelector } from "react-redux";
import Loading from '../Loading/Loading'
import { JobModal } from "../../type/type";
import JobTicket from "../Job/JobTicket";
import "./showAllJobs.scss";

const ShowAllJobs = () => {
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
                  <ul
                    className="list-unstyled list-job"
                    data-testid="list-job"
                  >
                    {allJobs.map((job: JobModal, index: number) => (
                      <li  key={index} data-testid="list-item-test">
                        <JobTicket item={job} />
                      </li>
                    ))}
                  </ul>
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
