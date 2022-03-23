import React from 'react'
import "./header.scss"

const Header = () => {
  const menuItemLeft = [
    {
      id: 1,
      title: "All Jobs",
    },
    {
      id: 2,
      title: "IT Companies",
    },
    {
      id: 3,
      title: "Blog",
    }
  ]
  const renderMenuItemLeft = menuItemLeft.map((menuItem)=> {
      return(<>
        <li className="nav-item ms-xl-4" key={menuItem.id}>
                  <a className="nav-link fs-15 text-shadow-white" aria-current="page" href="/#">{menuItem.title}</a>
                </li>
      </>)
    })
  const menuItemRight = [
    {
      id: 1,
      title: "Sign in",
    },
    {
      id: 2,
      title: "IT Companies",
    },
    {
      id: 3,
      title: "Employers",
    }
  ]
  const renderMenuItemRight = menuItemRight.map((menuItem)=> {
      return(<>
        <li className="nav-item ms-xl-4" key={menuItem.id}>
                  <a className="nav-link fs-15 text-shadow-white" aria-current="page" href="/#">{menuItem.title}</a>
                </li>
      </>)
    })
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg m-auto fixed-top navbar-dark bg-dark h-auto px-5">
        <div className="container container-fluid">
          <img width="100x" height="40px" src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png" alt="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 pl-4 mb-lg-0">
              {renderMenuItemLeft}
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              {renderMenuItemRight}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header