import React from "react";
import './Pagination.scss';
import { Link } from "react-router-dom";

interface Props {
  paginate: (pageNumber: number) => void;
  jobPerPage: number;
  totalJobs: number;
}

function Pagination(props: Props) {
  const { paginate, jobPerPage, totalJobs } = props;

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <nav className="nav">
        <ul className="pagination">
          {pageNumber.map((number: number) => (
            <li className="page-item" key={number}>
              <Link
                to={`/jobs/${number}`}
                data-testid="pagination"
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
