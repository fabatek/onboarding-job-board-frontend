import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DispatchType, RootState } from "../../../redux/configStore";
import {
  changeIsLoading,
  getAllJobsApi,
  paginationApi,
} from "../../../redux/reducer/jobReducer";
import { ITEM_PER_PAGE } from "../../../static/data";
import { JobModel } from "../../../types/types";
import Loading from "../../Loading/Loading";
import Pagination from "../../Pagination/Pagination";
import JobCard from "../JobCard/JobCard";

type Props = {};

const JobList = (props: Props) => {
  const { jobList, isLoading, jobPaginationList } = useSelector(
    (state: RootState) => state.jobReducer
  );
  const dispatch: DispatchType = useDispatch();

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    dispatch(getAllJobsApi());
    dispatch(paginationApi(currentPage));
  }, [dispatch, currentPage]);

  const handleChangeCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
    dispatch(changeIsLoading(true));
  };

  if (isLoading)
    return (
      <div className="my-5">
        <Loading />
      </div>
    );

  return (
    <div className="container my-5 job-list">
      {jobPaginationList.length ? (
        <div className="job-list__content">
          <div className="row">
            {jobPaginationList?.map((item: JobModel) => {
              return (
                <div className="col-lg-6" key={item.id}>
                  <JobCard item={item} />
                </div>
              );
            })}
          </div>
          <div className="row">
            <Pagination
              totalJobs={jobList.length}
              itemsPerPage={ITEM_PER_PAGE}
              handleChangeCurrentPage={handleChangeCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      ) : (
        <div className="row text-center job-list__content">
          <p>Ops..! The job was not found !!</p>
          <p>
            Back to home: <a href="/">Home</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default JobList;
