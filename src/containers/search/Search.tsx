import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";

type Props = {
  count: number;
  handleSearchInput: (e: {
    target: { value: React.SetStateAction<string> };
  }) => void;
  handleEnterSearch: (e: any) => void;
  handleSearch: () => void;
  handleTypeChange: (e: {
    target: { value: React.SetStateAction<string> };
  }) => void;
  typeJob: string;
  searchByType: () => void;
};

const Search: FC<Props> = (props) => {
  const {
    count,
    handleSearchInput,
    handleEnterSearch,
    handleSearch,
    handleTypeChange,
    searchByType,
    typeJob,
  } = props;

  const { jobType } = useSelector((state: RootState) => {
    return state.JobReducer;
  });

  return (
    <>
      <div>
        <div className="search">
          <div className="search__content">
            <div className="job__available">
              <h2>{count} Có Việc Làm IT Cho Developer "Chất" </h2>
            </div>
            <div className="search__bar">
              <label id="select-label">Select type</label>
              <select
                aria-labelledby="select-label"
                value={typeJob}
                onChange={handleTypeChange}
                onClick={() => {
                  searchByType();
                }}
                className="type__option"
              >
                <option value="All">All</option>
                {jobType.length > 0 &&
                  jobType.map((type: string, index: number) => {
                    return (
                      <option value={type} key={index}>
                        {type}
                      </option>
                    );
                  })}
              </select>
              {/* <div className="search-bar__icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div> */}
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
