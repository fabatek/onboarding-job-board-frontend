import React from 'react';
import './pagination.scss';

export const Pagination = ({ jobPerPage, totalJobs, pagination }: any) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalJobs / jobPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => pagination(number)} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
