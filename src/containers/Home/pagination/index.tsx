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
  // detect jobs was change, call getPage() to set jobOfpage
  //default page 1
  useEffect(() => {
    getPage(currentPage, pageSize, jobList);
  }, [jobList]);
  console.log(jobList, "jobList");
  //handle logic page
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

  //handle click page
  const onChangeIndexPage = (pageIndex: number) => {
    getPage(pageIndex, pageSize, jobList);
  };
  return (
    <div className="d-flex justify-content-center m-3 pagination-jobs">
      <span title="Delete" id="2"></span>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            title="pagination-jobs"
            className={`page-item ${currentPage === 1 && "disabled"}`}
            onClick={() => onChangeIndexPage(currentPage - 1)}
          >
            <span className="page-link btn " aria-label="Previous">
              <span data-testid="prev" aria-hidden="true">
                prev
              </span>
            </span>
          </li>
          {[...Array<number>(countPage).fill(0)].map((i, index) => {
            return (
              <div key={index}>
                <li
                  className={`page-item ${
                    index + 1 === currentPage && "active"
                  }`}
                  onClick={() => onChangeIndexPage(index + 1)}
                >
                  <span className="page-link btn">{index + 1}</span>
                </li>
                <span hidden>page-jobs</span>
              </div>
            );
          })}

          <li
            title="pagination-jobs"
            className={`page-item ${currentPage >= countPage && "disabled"}`}
            onClick={() => onChangeIndexPage(currentPage + 1)}
          >
            <span className="page-link btn" aria-label="Next">
              <span aria-hidden="true" data-testid="next">
                next
              </span>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Index;
