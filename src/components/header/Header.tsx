/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './header.scss';

const Header: React.FC = () => {
  return (
    <header
      className='navbar navbar-expand-lg m-auto navbar-dark bg-dark h-auto px-5 '
      id='header'
    >
      <img
        width='100x'
        height='40px'
        src='https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png'
        className='App-logo'
        alt='logo'
      />
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav me-auto mb-2 pl-4 mb-lg-0'>
          <li className='nav-item ms-xl-4'>
            <a href='#' className='nav-link fs-15 text-white'>
              All Jobs
            </a>
          </li>
          <li className='nav-item ms-xl-4'>
            <a href='#' className='nav-link fs-15 text-white'>
              IT Companies
            </a>
          </li>
          <li className='nav-item ms-xl-4'>
            <a href='#' className='nav-link fs-15 text-white'>
              Blog
            </a>
          </li>
        </ul>
        <ul className='navbar-nav mb-2 mb-lg-0'>
          <li className='nav-item ms-xl-4'>
            <a href='#' className='nav-link fs-15 text-white'>
              Sign In
            </a>
          </li>
          <li className='nav-item ms-xl-4'>
            <a href='#' className='nav-link fs-15 text-white'>
              EN/VN
            </a>
          </li>
          <li className='nav-item ms-xl-4'>
            <a href='#' className='nav-link fs-15 text-white'>
              Employers
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
