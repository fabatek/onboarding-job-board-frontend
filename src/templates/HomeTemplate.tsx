import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";

type Props = {};

const HomeTemplate = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default HomeTemplate;
