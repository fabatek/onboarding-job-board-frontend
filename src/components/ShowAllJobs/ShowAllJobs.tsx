import React, { useEffect } from "react";
import { DispatchType, RootState } from "../../redux/store/store";
import { getAllJobs } from "../../redux/reducer/jobs";
import { useDispatch, useSelector } from "react-redux";
const ShowAllJobs = () => {
  const { allJobs } = useSelector((state: RootState) => state.jobReducer);
  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
      dispatch(getAllJobs());
  },[]);
  return (
    <div className="show-all-jobs">
      <div className="container d-grid">
        <div className="row">
          <div className="col bg-white p-0 overflow-scroll h-full" >
            <div className="">
              <h2 className="p-3" data-testid="total-job">{allJobs.length} It jobs in viet nam</h2>
            </div>
          </div>
          <div className="col p-0">
            JobDetail
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowAllJobs;