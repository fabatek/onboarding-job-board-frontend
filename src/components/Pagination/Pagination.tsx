import React from "react";
import "./pagination.scss";
import { PaginationProps } from "../../type/type";
import pagination from "../../util/pagination";

const Pagination = ({
  totalJobs,
  currentPage,
  pageSize = 10,
  setCurrentPage,
}: PaginationProps) => {
  let total: number = Math.ceil(Number(totalJobs) / pageSize);

  let arrNumberOfPagination = pagination(total, currentPage, 1);

  const handleClickItem = (page: string | number | number[],control: string = "") => {
    page !== "..." && setCurrentPage(Number(page));

    if (control === "next") {
      currentPage < total && setCurrentPage(currentPage + 1);
    }
    if (control === "prev") {
      currentPage > 1 && setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pagination" data-testid="pagination">
      <ul className={`d-flex list-unstyled justify-content-center align-items-center pagination__list ${arrNumberOfPagination.length === 0 && 'd-none'}`}>
        <a
          href={`${ currentPage > 1 ? '#top' : '#t'}`}
          className={`px-3 py-1' pagination__list-item ${
            currentPage === 1 ? "disabled" : ""
          }`}
          onClick={() => handleClickItem(currentPage, "prev")}
        >
          <li data-testid="previous-page">
            <i className="fa-solid fa-chevron-left"></i>
          </li>
        </a>
        {arrNumberOfPagination.map(
          (page: string | number | number[], index: number) => (
            <a
              href={`${page !== '...'? '#top' : '#t'}`}
              key={index}
              className={`px-3 py-1 ${
                currentPage === page ? "active" : ""
              } pagination__list-item ${page === '...' && 'disable'}`}
              onClick={() => handleClickItem(page, "")}
            >
              <li data-testid="page">{page}</li>
            </a>
          )
        )}
        <a
          href={`${ currentPage < total ? '#top' : '#t'}`}
          className={`px-3 py-1' pagination__list-item ${
            currentPage === total ? "disabled" : ""
          }`}
          onClick={() => handleClickItem(currentPage, "next")}
        >
          <li data-testid="next-page">
            <i className="fa-solid fa-chevron-right"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};
export default Pagination;
