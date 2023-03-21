import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Job } from "../Home";

type Props = {
  job: Job[];
  count: number;

  handleSearchInput: (e: {
    target: { value: React.SetStateAction<string> };
  }) => void;
  handleEnterSearch: (e: any) => void;
  handleSearch: () => void;
};

const Search: FC<Props> = (props) => {
  const { job, count, handleSearchInput, handleEnterSearch, handleSearch } =
    props;
  return (
    <>
      <div>
        <div className="header">
          <img
            src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
            className="header__logo"
            alt=""
          />
        </div>
        <div className="search">
          <div className="search--content">
            <div className="job--available">
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
