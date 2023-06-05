/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

type Props = {};

const HeaderTemplate = (props: Props) => {
  return (
    <div>
      <div className="header__nav">
        <div className="nav__left">
          <ul className="nav-left__list">
            <li>
              <a href="#" className="nav-item__left">
                All Jobs
              </a>
              <ul className="dropdown__menu">
                <li>
                  <a href="#" className="dropdown__item">
                    Jobs By Skill
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__item">
                    Jobs By Title
                  </a>
                </li>

                <li>
                  <a href="#" className="dropdown__item">
                    Jobs By Company
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__item">
                    Jobs By City
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="nav-item__left">
                IT Companies
              </a>
              <ul className="dropdown__menu">
                <li>
                  <a href="#" className="dropdown__item">
                    Vietnam Best IT Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__item">
                    Company Reviews
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="nav-item__left">
                Blog
              </a>
              <ul className="dropdown__menu">
                <li>
                  <a href="#" className="dropdown__item">
                    IT Salary Report
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__item">
                    IT Career
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__item">
                    Applying and Career Up
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__item">
                    IT Expertise
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="nav-item__left">
                IT Story
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__right">
          <ul className="nav-right__list">
            <li>
              <a href="#" className="nav-item__right">
                For Employers
              </a>
            </li>
            <li>
              <a href="#" className="nav-item__right">
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header">
        <img
          src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
          className="header__logo"
          alt="đá"
        />
      </div>
    </div>
  );
};

export default HeaderTemplate;
