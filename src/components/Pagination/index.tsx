import React from 'react'

type paginationProps = {
  jobsPerPage: number,
  totalJob: number,
  paginate: (x: number) => void,
  pageIsActive: number
}

function Pagination(props: paginationProps) {
  let pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(props.totalJob / props.jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li
          data-testid={`page-item-${number}`}
          key={number}
          className={number === props.pageIsActive ? "page-item active" : "page-item"}
          style={{ cursor: "pointer" }}
        >
          <span
            className="page-link"
            onClick={() => { props.paginate(number) }}
          >{number}</span>
        </li>
      ))}
    </ul>
  )
}

export default Pagination
