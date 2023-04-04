import React from "react";
import "../../assets/styles/Navbar/Navbar.scss";
import { navbarItemLeft, navbarItemRight } from "../../static/data";
import navbarLogo from "../../assets/img/logo.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col-8">
          <a href="/">
            <img src={navbarLogo} alt="navbar__logo" className="navbar__logo" />
          </a>
          {navbarItemLeft?.map((item) => (
            <a href="/" className="navbar__item-link" key={item.key}>
              {item.value}
            </a>
          ))}
        </div>
        <div className="col-4 text-end">
          {navbarItemRight?.map((item) => (
            <a href="/" className="navbar__item-link" key={item.key}>
              {item.value}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
