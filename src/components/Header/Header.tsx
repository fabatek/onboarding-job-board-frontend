import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header bg-black">
      <div className="container">
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item text-light">All Jobs</li>
                <li className="nav-item text-light">It Companies</li>
                <li className="nav-item text-light">Blog</li>
                <li className="nav-item text-light">It Story</li>

                <li>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Hồ Chí Minh</option>
                    <option value={1}>All Cities</option>
                    <option value={2}>Hồ Chí Minh</option>
                    <option value={3}>Hà nội</option>
                    <option value={4}>Đà Nẵng</option>
                    <option value={5}>Others</option>
                  </select>
                </li>

                <li>
                  <form className="d-flex mx-2" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-danger" type="submit">
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                  </form>
                </li>
              </ul>
              <ul className="d-flex navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item text-light">For Employers</li>
                <li className="nav-item text-light">Sign In</li>
                <li className="nav-item text-light">EN | VI</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
