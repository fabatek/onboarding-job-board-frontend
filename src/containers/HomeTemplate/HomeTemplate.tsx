import React from "react";
import { Outlet } from "react-router-dom";
import FooterTemplate from "../FooterTemplate/FooterTemplate";
import HeaderTemplate from "../Header/HeaderTemplate";
type Props = {};

const HomeTemplate = (props: Props) => {
  return (
    <>
      <HeaderTemplate />
      <div className="outlet__template">
        <Outlet />
      </div>
      <FooterTemplate />
    </>
  );
};

export default HomeTemplate;
