import React from "react";
import Navbar from "../Navbar/Navbar";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="bg-dark header">
      <Navbar />
    </div>
  );
};

export default Header;
