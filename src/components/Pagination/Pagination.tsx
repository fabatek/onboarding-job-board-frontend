import React, { memo } from "react";
import "../../assets/styles/Pagination/Pagination.scss";

type Props = {
  totalJobs: number;
  itemsPerPage: number;
  handleChangeCurrentPage: any;
};

const Pagination = (props: Props) => {
  const { totalJobs, itemsPerPage, handleChangeCurrentPage } = props;

  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(totalJobs / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination justify-content-center">
      {pageNumbers.map((item) => (
        <span
          key={item}
          onClick={() => handleChangeCurrentPage(item + 1)}
          className="pagination-item"
        >
          {item + 1}
        </span>
      ))}
    </div>
  );
};

export default memo(Pagination);
