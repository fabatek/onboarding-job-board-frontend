import React from 'react';
import './style.scss';

function Panigation(props: {
  jobsPerPage: any;
  totalJobs: any;
  paginate: any;
}) {
  const pageNumbers = [];
  const { jobsPerPage, totalJobs, paginate } = props;
  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Panigation;
