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
  const { jobList, isLoading, jobPaginationList, jobSearchList } = useSelector(
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

  if (isLoading) {
    return (
      <div className="my-5">
        <Loading />
      </div>
    );
  }

  if (jobSearchList.length > 0) {
    return (
      <div className="container my-5">
        <div className="row">
          {jobSearchList?.map((item: JobModel) => {
            return (
              <div className="col-lg-6" key={item.id}>
                <JobCard item={item} />
              </div>
            );
          })}
        </div>
        <div className="row">
          <Pagination
            totalJobs={jobSearchList.length}
            itemsPerPage={ITEM_PER_PAGE}
            handleChangeCurrentPage={handleChangeCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
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
  );
};

export default JobList;
