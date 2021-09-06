import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  paginate: (pageNumber: number) => void;
  jobPerPage: number;
  totalJobs: number;
}

const NavStyled = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function Pagination(props: Props) {
  const { paginate, jobPerPage, totalJobs } = props;

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <NavStyled className="nav">
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
    </NavStyled>
  );
}

export default Pagination;
