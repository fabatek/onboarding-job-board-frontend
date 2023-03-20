import React from "react";
import "../../assets/styles/Navbar/Navbar.scss";
import { navbarItemLeft, navbarItemRight } from "../../static/data";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <img src="../../assets/img/logo.png" alt="" />
          {navbarItemLeft?.map((item) => (
            <a
              href="/"
              className="item-link"
              key={item.key}
              data-testid="item-link"
            >
              {item.value}
            </a>
          ))}
        </div>
        <div className="col-4 text-end">
          {navbarItemRight?.map((item) => (
            <a
              href="/"
              className="item-link"
              key={item.key}
              data-testid="item-link"
            >
              {item.value}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
