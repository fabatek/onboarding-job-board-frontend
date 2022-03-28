/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';
import './jobList.scss';

const JobList: React.FC = () => {
  const jobState = useSelector((state: RootStore) => state.job);

  return (
    <div className='d-flex flex-wrap justify-content-center job__list'>
      {jobState.job?.map((i) => {
        return (
          <>
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
          </>
        );
      })}
    </div>
  );
};

export default JobList;
