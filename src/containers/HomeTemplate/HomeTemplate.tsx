import React from "react";
import { Outlet } from "react-router-dom";
import HeaderTemplate from "../Header/HeaderTemplate";
type Props = {};

const HomeTemplate = (props: Props) => {
  return (
    <>
      <HeaderTemplate />
      <div className="outlet__template">
        <Outlet />
      </div>
    </>
  );
};

export default HomeTemplate;
