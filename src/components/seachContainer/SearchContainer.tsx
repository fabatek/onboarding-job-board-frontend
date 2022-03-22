/* eslint-disable jsx-a11y/anchor-is-valid */
import './searchContainer.scss';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';

const SearchContainer = () => {
  const jobState = useSelector((state: RootStore) => state.job);

  return (
    <div
      id='searchContainer'
      className=' container-fluid px-5 mb-2 bg-dark text-white'
    >
      <h3 className='px-5 pt-5 pb-3 text-white fs-2 text-wrap'>
        {jobState.job?.length} IT Jobs For Chất Developers
      </h3>
      <div className='p-5 text-white fs-3 row g-3 form'>
        <div className=' col-md-8'>
          <input
            className='form-control form-input'
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
        <div className='col col-lg-2 '>
          <button
            type='submit'
            className='d-flex justify-content-center align-items-center btn btn-danger col w-100 fs-7 fw-bold'
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <ul className=' d-inline-flex '>
          <li className='nav-item list-inline-item'>
            <a
              href='#'
              className='nav-link col-auto ms-xl-2 p-2 bg-white-hover text-white'
            >
              Tester
            </a>
          </li>
          <li className='nav-item list-inline-item'>
            <a
              href='#'
              className='nav-link col-auto ms-xl-2 p-2 bg-white-hover text-white'
            >
              Java
            </a>
          </li>
          <li className='nav-item list-inline-item'>
            <a
              href='#'
              className='nav-link col-auto ms-xl-2 p-2 bg-white-hover text-white'
            >
              PHP
            </a>
          </li>
          <li className='nav-item list-inline-item'>
            <a
              href='#'
              className='nav-link col-auto ms-xl-2 p-2 bg-white-hover text-white'
            >
              Android
            </a>
          </li>
          <li className='nav-item list-inline-item'>
            <a
              href='#'
              className='nav-link col-auto ms-xl-2 p-2 bg-white-hover text-white'
            >
              .NET
            </a>
          </li>
          <li className='nav-item list-inline-item'>
            <a
              href='#'
              className='nav-link col-auto ms-xl-2 p-2 bg-white-hover text-white'
            >
              IOS
            </a>
          </li>
          <li className='nav-item list-inline-item'>
            <a
              href='#'
              className='nav-link col-auto ms-xl-2 p-2 bg-white-hover text-white'
            >
              Business Analyst
            </a>
          </li>
          <li className='nav-item list-inline-item'>
            <a
              href='#'
              className='nav-link col-auto ms-xl-2 p-2 bg-white-hover text-white'
            >
              QA QC
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchContainer;
