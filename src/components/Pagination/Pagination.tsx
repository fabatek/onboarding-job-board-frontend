import React from "react";
import "./pagination.scss";
import { PaginationProps } from "../../type/type";

const Pagination = ({ totalPages,currentPage,setCurentPage,}: PaginationProps) => {
  let total: number = Math.min(totalPages / 10);
  if (currentPage < 1) {
    setCurentPage(1);
  }
  if (currentPage > 10) {
    setCurentPage(10);
  }

  const range = (firstIndex: number, lastIndex: number): number[] => {
    let range: number[] = [];
    for (let i = firstIndex; i < lastIndex; i++) {
      range.push(i);
    }
    return range;
  };

  const pagination = (total: number, page: number, truncateTwoSide: number) => {
    let totalIndex = 7 + truncateTwoSide;
    if (totalIndex >= total) {
      return range(1, total + 1);
    }
    let left: number = Math.max(page - truncateTwoSide, 1);
    let showLeftDot: boolean = left > 2;
    let showRightDot: boolean = left < total - 2;

    if (!showLeftDot && showRightDot) {
      let leftItemCount: number = 3 + 2 * truncateTwoSide;
      let leftRange: number[] = range(1, leftItemCount + 1);
      return [...leftRange, "...", total];
    } else if (showLeftDot && !showRightDot) {
      let rightRange: number[] = range(left, total + 1);
      return [1, "...", ...rightRange];
    } else {
      let middleRange: number[] = range(left, left + 3);
      return [1, "...", ...middleRange, "...", total];
    }
  };

  let arr = pagination(total, currentPage, 1);

  const handleClickItem = (page: string | number | number[]) => {
    if (page === "...") {
      setCurentPage(total);
      return;
    }
    setCurentPage(Number(page));
  };
  return (
    <div className="pagination" data-testid="pagination">
      <ul className="d-flex list-unstyled justify-content-center align-items-center    pagination__list">
        <li
          className={`px-3 py-1' pagination__list__item ${
            currentPage === 1 ? "disabled" : ""
          }`}
          onClick={() => setCurentPage(currentPage - 1)}
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
            data-testid={`${page === "..." ? "" : "page"}`}
            onClick={() => handleClickItem(page)}
          >
            {page}
          </li>
        ))}
        <li
          className={`px-3 py-1' pagination__list__item ${
            currentPage === 10 ? "disabled" : ""
          }`}
          onClick={() => setCurentPage(currentPage + 1)}
          data-testid="next-page"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
