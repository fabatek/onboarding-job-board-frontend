import React, { ReactElement } from "react";
import { CustomListItem } from "../Interfaces";
import "./header.scss";

const Header: React.FC = () => {
  const menuListLeft: CustomListItem[] = [
    {
      id: 1,
      title: "All jobs",
    },
    {
      id: 2,
      title: "IT Companies",
    },
    {
      id: 3,
      title: "Blog",
    },
  ];
  const menuListRight: CustomListItem[] = [
    {
      id: 1,
      title: "Sign in",
    },
    {
      id: 2,
      title: "PhuongTM",
    },
    {
      id: 3,
      title: "Employers",
    },
  ];

  const RenderMenuItem = ({
    props,
  }: {
    props: CustomListItem[];
  }): ReactElement => {
    return (
      <>
        {props.map((item) => {
          return (
            <li className="nav-item ms-xl-4" key={item.id}>
              <a
                className="nav-link fs-15 text-shadow-white"
                aria-current="page"
                href="/#"
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </>
    );
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg m-auto fixed-top navbar-dark bg-dark h-auto px-5">
        <div className="container container-fluid">
          <img
            width="100x"
            height="40px"
            src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
            alt="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 pl-4 mb-lg-0">
              <RenderMenuItem props={menuListLeft} />
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <RenderMenuItem props={menuListRight} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
