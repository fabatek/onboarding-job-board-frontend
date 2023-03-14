import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DispatchType, RootState } from "../../../redux/configStore";
import { getAllJobsApi, JobModel } from "../../../redux/reducer/jobReducer";
import Loading from "../../Loading/Loading";
import JobCard from "../JobCard/JobCard";

type Props = {};

const JobList = (props: Props) => {
  const { jobList, isLoading } = useSelector(
    (state: RootState) => state.jobReducer
  );
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(getAllJobsApi());
  }, [dispatch]);

  return (
    <div className="container my-5">
      <div className="row">
        {isLoading ? (
          <Loading />
        ) : (
          jobList?.map((item: JobModel) => {
            return (
              <div className="col-lg-4" key={item.id}>
                <JobCard item={item} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default JobList;
