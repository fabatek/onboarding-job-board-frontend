import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Page404 = (props: Props) => {
  return (
    <div className="not-found">
      <img
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
      />
      <NavLink to="" className="link-home" data-testid="home__link">
        Go Home
      </NavLink>
    </div>
  );
};

export default Page404;
