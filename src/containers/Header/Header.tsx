import React from 'react'
import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg m-auto fixed-top navbar-dark bg-dark h-auto px-5">
        <div className="container container-fluid">
          {/* <a className="navbar-brand fs-2" href="/#"><span className="bg-danger border-rounded">it</span>viec</a> */}
          <img width="100x" height="40px" src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png" alt="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 pl-4 mb-lg-0">
              <li className="nav-item ms-xl-4">
                <a className="nav-link fs-15 text-shadow-white" aria-current="page" href="/#">All Jobs</a>
              </li>
              <li className="nav-item ms-xl-4">
                <a className="nav-link fs-15 text-shadow-white" href="/#">IT Companies</a>
              </li>
              <li className="nav-item ms-xl-4">
                <a className="nav-link fs-15 text-shadow-white" href="/#">Blog</a>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item ms-xl-3">
                <a className="nav-link fs-15 text-shadow-white" href="/#">Sign in</a>
              </li>
              <li className="nav-item ms-xl-3">
                <a className="nav-link fs-15 text-shadow-white" href="/#">IT Companies</a>
              </li>
              <li className="nav-item ms-xl-3">
                <a className="nav-link fs-15 text-shadow-white" href="/#">Employers</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header