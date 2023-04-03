import React, { useState } from "react";
import { searchValueReducer } from "../../redux/reducer/jobs";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux/store/store";

const Header = () => {
  const [searchInput,setSearchInput] = useState<string>('')
  const [valueCity,setValueCity] = useState<string>('default')
  const dispatch:DispatchType = useDispatch()
  const handleSearch = (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const action = {
      searchInput,
      valueCity
    }
    dispatch(searchValueReducer(action))   
  }

  const handleInputValueSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleCityValue = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setValueCity(e.target.value)
  }
  return (
    <div className="header bg-black">
      <div className="container px-0">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid p-0">
            <a href="nav-link">
              <img
                src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
                alt="123"
                className="w-50"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                <li className="nav-item text-light mx-2">All Jobs</li>
                <li className="nav-item text-light mx-2">It Companies</li>
                <li className="nav-item text-light mx-2">Blog</li>
                <li className="nav-item text-light mx-2">It Story</li>
                <li>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={valueCity}
                    onChange={handleCityValue}
                  >
                    <option value='default'>All Cities</option>
                    <option value='Ho Chi Minh'>Hồ Chí Minh</option>
                    <option value='Ha Noi'>Hà nội</option>
                    <option value='Hue'>Huế</option>
                  </select>
                </li>
                <li>
                  <form className="d-flex mx-2" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={searchInput}
                      onChange={handleInputValueSearch}
                    />
                    <button data-testid="button-search" className="btn btn-danger" type="button" onClick={handleSearch} >
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                  </form>
                </li>
              </ul>
              <ul className="d-flex navbar-nav me-0 mb-2 mb-lg-0">
                <li className="nav-item text-light ms-4">For Employers</li>
                <li className="nav-item text-light ms-4">Sign In</li>
                <li className="nav-item text-light ms-4">EN | VI</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
