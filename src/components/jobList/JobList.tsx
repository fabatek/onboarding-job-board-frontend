/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './jobList.scss';

const JOB_PER_PAGE = 10;

const JobList: React.FC = () => {
  const jobState = useSelector((state: RootStore) => state.job);

  //Set Page Number
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);

  //Number of pages based on the number of items
  const pageOld: number = currentPageNumber * JOB_PER_PAGE;

  const jobLength: number = jobState.job?.length || 0;

  //Page Count
  const pageCount = Math.ceil(jobLength / JOB_PER_PAGE);

  //Change Page
  const changePage = (selectedItem: { selected: number }) => {
    setCurrentPageNumber(selectedItem.selected);
  };

  return jobState.loading ? (
    <div className='py-5 d-flex justify-content-center'>
      <button className='btn btn-primary ' type='button' disabled>
        <span
          className='spinner-border spinner-border-sm'
          role='status'
          aria-hidden='true'
        ></span>
        Loading...
      </button>
    </div>
  ) : (
    <>
      <div className='job__list container d-flex flex-wrap py-3 mx-5 '>
        {jobState.job?.slice(pageOld, pageOld + JOB_PER_PAGE).map((i) => {
          return (
            <div key={i.id} className='card m-2 job__list--item'>
              <img
                width='350px'
                className='card-img-top'
                src='https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/117346496_1791475914324372_7004050953908862177_n.png?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mPWK_uIVet0AX9TQ9te&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT9LRiCpxQ4ywVgqCNUUn8ZqBAQFvPxwp9_DoUt6ZWfb1w&oe=626358E8'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>{i.name}</h5>
                <p className='card-text'>{i.description}</p>
                <a href='#' className='btn btn-primary'>
                  View Detail
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        pageCount={pageCount}
        onPageChange={changePage}
        disabledClassName={'disable'}
        containerClassName={'pagination justify-content-center'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </>
  );
};

export default JobList;
