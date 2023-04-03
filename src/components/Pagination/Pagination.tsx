import React, { memo, useEffect, useState } from "react";
import "../../assets/styles/Pagination/Pagination.scss";

type Props = {
  totalJobs: number;
  itemsPerPage: number;
  currentPage: number;
  handleChangeCurrentPage: any;
};

const Pagination = (props: Props) => {
  const { totalJobs, itemsPerPage, currentPage, handleChangeCurrentPage } =
    props;

  const [pageNumbers, setPageNumbers] = useState<any[]>([]);

  useEffect(() => {
    const tempPageNumbers: number[] = [];
    for (let i = 0; i < Math.ceil(totalJobs / itemsPerPage); i++) {
      tempPageNumbers.push(i);
    }
    setPageNumbers(tempPageNumbers);
  }, [totalJobs, itemsPerPage]);

  if (pageNumbers.length === 1) {
    return (
      <div className="pagination justify-content-center">
        {pageNumbers.map((item) => (
          <span
            key={item}
            onClick={() => handleChangeCurrentPage(item + 1)}
            className={
              currentPage === item + 1
                ? "pagination__item active"
                : "pagination__item"
            }
          >
            {item + 1}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="pagination justify-content-center">
      {currentPage === 1 ? (
        ""
      ) : (
        <span
          onClick={() => handleChangeCurrentPage(currentPage - 1)}
          className="pagination__prev-button"
        >
          &laquo;
        </span>
      )}
      {pageNumbers.map((item) => (
        <span
          key={item}
          onClick={() => handleChangeCurrentPage(item + 1)}
          className={
            currentPage === item + 1
              ? "pagination__item active"
              : "pagination__item"
          }
        >
          {item + 1}
        </span>
      ))}
      {currentPage === 10 ? (
        ""
      ) : (
        <span
          onClick={() => handleChangeCurrentPage(currentPage + 1)}
          className="pagination__next-button"
        >
          &raquo;
        </span>
      )}
    </div>
  );
};

export default memo(Pagination);
