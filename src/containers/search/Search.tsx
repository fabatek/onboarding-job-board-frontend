import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

type Props = {
  count: number;
  handleSearchInput: (e: {
    target: { value: React.SetStateAction<string> };
  }) => void;
  handleEnterSearch: (e: any) => void;
  handleSearch: () => void;
};

const Search: FC<Props> = (props) => {
  const { count, handleSearchInput, handleEnterSearch, handleSearch } = props;
  return (
    <>
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
            alt=""
          />
        </div>
        <div className="search">
          <div className="search__content">
            <div className="job__available">
              <h2>{count} Có Việc Làm IT Cho Developer "Chất"</h2>
            </div>
            <div className="search__bar">
              <div className="search-bar__icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>

              <input
                role="searchInput"
                aria-label="searchInput"
                type="text"
                className="search__input"
                placeholder="Search job by title"
                onChange={handleSearchInput}
                onKeyDown={handleEnterSearch}
              />
              <span>
                <button
                  type="submit"
                  className="btn__search"
                  onClick={() => {
                    handleSearch();
                  }}
                >
                  Search
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
