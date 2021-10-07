import * as React from "react";
import { SystemState } from "../../Redux/type";

type Props = {
  onChangePage: (jobsOfPage: SystemState["jobs"]) => void;
  pageSize: number;
  currentPage: number;
  conntPage: number;
};
const index = ({ onChangePage, pageSize, currentPage, conntPage }: Props) => {
  return (
    <div className="d-flex justify-content-center m-3 pagination-jobs">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item ">
            <span className="page-link btn " aria-label="Previous">
              <span aria-hidden="true">«</span>
            </span>
          </li>
          {[...Array<number>(conntPage).fill(0)].map((i, index) => {
            return (
              <li className="page-item  ">
                <span className="page-link btn">{index + 1}</span>
              </li>
            );
          })}

          <li className="page-item  ">
            <span className="page-link btn" aria-label="Next">
              <span aria-hidden="true">»</span>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default index;
