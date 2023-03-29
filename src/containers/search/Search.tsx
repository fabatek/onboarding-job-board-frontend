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
        <div className="search">
          <div className="search__content">
            <div className="job__available">
              <h2>{count} Có Việc Làm IT Cho Developer "Chất" </h2>
            </div>
            <div className="search__bar">
              <div className="search-bar__icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <label id="search-label">Search input</label>
              <input
                aria-labelledby="search-label"
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
