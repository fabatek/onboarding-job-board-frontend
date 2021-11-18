import { memo } from "react";
import { useSelector } from "../../hooks/useTypeSelector";
import Job from "../../models/jobModel";
import JobItem from "../JobItem";
import Pagination from "../Pagination";
import "./style.scss";
const JobList = () => {
  const { total, jobs, totalPage, page } =
    useSelector((state) => state.jobs) || [];
  return (
    <div className="job__content">
      <h1 className="job__content__title">{total} việc làm IT tại Việt Nam</h1>
      <div className="job__list">
        {jobs?.length === 0 ? (
          <h1>Không tìm thấy việt làm nào !</h1>
        ) : (
          jobs?.map((job: Job) => <JobItem key={job.id} job={job} />)
        )}
      </div>
      <div className="py-2 mb-5">
        {totalPage > 1 && (
          <Pagination url={`/page/`} pageCount={totalPage} currentPage={page} />
        )}
      </div>
    </div>
  );
};
export default memo(JobList);
