/* eslint-disable jsx-a11y/anchor-is-valid */
import './searchContainer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store';
import React, { ReactElement, useState } from 'react';
import { getJob } from '../../actions/JobsAction';

const SearchContainer: React.FC = () => {
  const jobState = useSelector((state: RootStore) => state.job);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState<string>('');

  const listItem = [
    'Tester',
    'Java',
    'PHP',
    'Android',
    '.NET',
    'IOS',
    'Business Analyst',
    'QA QC',
  ];

  const RenderList = (): ReactElement => {
    return (
      <>
        {listItem.map((e, i) => (
          <li key={i} className='nav-item list-inline-item'>
            <a
              href='#'
              className='nav-link col-auto ms-xl-2 p-2 bg-white-hover text-white'
            >
              {e}
            </a>
          </li>
        ))}
      </>
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    return setSearchText(e.target.value);
  };

  const handleSubmit = () => dispatch(getJob(searchText));

  return (
    <div className='search__container container-fluid px-5 my-5 bg-dark text-white'>
      <h3 className='px-5 pt-5 pb-3 text-white fs-2 text-wrap'>
        {jobState.job?.length} IT Jobs For Chất Developers
      </h3>
      <div className='search__container--item p-5 text-white fs-3 row g-3 form'>
        <div className='col-lg-8'>
          <input
            onChange={handleChange}
            className='form-control form-input col-lg-2'
            type='text'
            placeholder='Keyword skill (Java, iOS...), Job Title, Company...'
          />
        </div>
        <div className='col-lg-2'>
          <select
            defaultValue={'default'}
            name=''
            id=''
            className='form-select'
          >
            <option value='default' disabled>
              All Cities
            </option>
            <option value='1'>Ho Chi Minh</option>
            <option value='2'>Ha Noi</option>
            <option value='3'>Da Nang</option>
          </select>
        </div>
        <div className='col col-lg-2'>
          <button
            onClick={handleSubmit}
            type='submit'
            className='d-flex justify-content-center align-items-center btn btn-danger col w-100 fs-7 fw-bold'
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <ul>
          <RenderList />
        </ul>
      </div>
    </div>
  );
};

export default SearchContainer;
