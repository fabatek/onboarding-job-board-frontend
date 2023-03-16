import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DispatchType, RootState } from "../../../redux/configStore";
import {
  getAllJobsApi,
  JobModel,
  paginationApi,
} from "../../../redux/reducer/jobReducer";
import { ITEM_PER_PAGE } from "../../../static/data";
import Loading from "../../Loading/Loading";
import Pagination from "../../Pagination/Pagination";
import JobCard from "../JobCard/JobCard";

type Props = {};

const JobList = (props: Props) => {
  const { jobList, isLoading, jobPaginationList } = useSelector(
    (state: RootState) => state.jobReducer
  );
  const dispatch: DispatchType = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllJobsApi());
    dispatch(paginationApi(currentPage));
  }, [dispatch, currentPage]);

  const handleChangeCurrentPage = (currentPage: number) =>
    setCurrentPage(currentPage);

  return (
    <div className="container my-5">
      <div className="row">
        {isLoading ? (
          <Loading />
        ) : (
          jobPaginationList?.map((item: JobModel) => {
            return (
              <div className="col-lg-6" key={item.id}>
                <JobCard item={item} />
              </div>
            );
          })
        )}
      </div>
      <div className="row">
        <Pagination
          totalJobs={jobList.length}
          itemsPerPage={ITEM_PER_PAGE}
          handleChangeCurrentPage={handleChangeCurrentPage}
        />
      </div>
    </div>
  );
};

export default JobList;
