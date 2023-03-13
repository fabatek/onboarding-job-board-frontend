import React from "react";
import "./Navbar.scss";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <img src="../../assets/img/logo.png" alt="" />
          <a href="/#" className="item-link">
            All Jobs
          </a>
          <a href="/#" className="item-link">
            IT Companies
          </a>
          <a href="/#" className="item-link">
            Blog
          </a>
          <a href="/#" className="item-link">
            IT Story
          </a>
        </div>
        <div className="col-4">
          <a href="/#" className="item-link">
            For Employee
          </a>
          <a href="/#" className="item-link">
            Sign In
          </a>
          <a href="/#" className="item-link">
            EN | VI
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
