import React, { useEffect } from "react";
import { SystemState } from "../../Redux/type";

type Props = {
  onChangePage: (currentPage: number, jobsOfPage: SystemState["jobs"]) => void;
  pageSize: number;
  currentPage: number;
  countPage: number;
  jobList: SystemState["jobs"];
};
const Index: React.FC<Props> = ({
  onChangePage,
  pageSize,
  currentPage,
  countPage,
  jobList,
}) => {
  useEffect(() => {
    getPage(currentPage, pageSize, jobList);
  }, [jobList]);
  const getPage = (
    currentPage: number,
    pageSize: number,
    jobList: SystemState["jobs"]
  ): void => {
    if (currentPage < 1 || currentPage > countPage) {
      return;
    }
    const itemStart = (currentPage - 1) * pageSize;
    const itemEnd = itemStart + pageSize;
    const newJobsOfPage = jobList.slice(itemStart, itemEnd);
    onChangePage(currentPage, newJobsOfPage);
  };
  const onChangeIndexPage = (pageIndex: number) => {
    getPage(pageIndex, pageSize, jobList);
  };
  return (
    <div className="d-flex justify-content-center m-3 pagination-jobs">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            className={`page-item ${currentPage === 1 && "disabled"}`}
            onClick={() => onChangeIndexPage(currentPage - 1)}
          >
            <span className="page-link btn " aria-label="Previous">
              <span aria-hidden="true">«</span>
            </span>
          </li>
          {[...Array<number>(countPage).fill(0)].map((i, index) => {
            return (
              <li
                key={index}
                className={`page-item ${index + 1 === currentPage && "active"}`}
                onClick={() => onChangeIndexPage(index + 1)}
              >
                <span className="page-link btn">{index + 1}</span>
              </li>
            );
          })}

          <li
            className={`page-item ${currentPage >= countPage && "disabled"}`}
            onClick={() => onChangeIndexPage(currentPage + 1)}
          >
            <span className="page-link btn" aria-label="Next">
              <span aria-hidden="true">»</span>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Index;
