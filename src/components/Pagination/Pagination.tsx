import React from "react";
import "./pagination.scss";
import { PaginationProps } from "../../type/type";
import pagination from "../../util/pagination";

const Pagination = ({totalJobs, currentPage, pageSize = 10, setCurentPage}: PaginationProps) => {
  let total: number = Math.ceil(Number(totalJobs) / pageSize);

  let arr = pagination(total, currentPage, 1);

  const handleClickItem = (page: string | number | number[]) => {
    if (page === "...") {
      setCurentPage(total);
      return;
    }
    setCurentPage(Number(page));
    window.scrollTo(0, 0);
  };

  const handleClickNext = (currentPage: number) => {
    if (currentPage >= total) {
      setCurentPage(total);
      return;
    }
    setCurentPage(currentPage + 1);
    window.scrollTo(0, 0);
  };

  const handleClickPrev = (currentPage: number) => {
    if (currentPage <= 1) {
      setCurentPage(1);
      return;
    }
    setCurentPage(currentPage - 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pagination" data-testid="pagination">
      <ul className="d-flex list-unstyled justify-content-center align-items-center    pagination__list">
        <li
          className={`px-3 py-1' pagination__list__item ${
            currentPage === 1 ? "disabled" : ""
          }`}
          onClick={() => handleClickPrev(currentPage)}
          data-testid="previous-page"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </li>
        {arr.map((page: string | number | number[], index: number) => (
          <li
            key={index}
            className={`px-3 py-1 ${
              currentPage === page ? "active" : ""
            } pagination__list__item`}
            data-testid="page"
            onClick={() => handleClickItem(page)}
          >
            {page}
          </li>
        ))}
        <li
          className={`px-3 py-1' pagination__list__item ${
            currentPage === total ? "disabled" : ""
          }`}
          onClick={() => handleClickNext(currentPage)}
          data-testid="next-page"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
