import * as React from "react";
import Search from "./search";
type Props = {
  totalJobs: number;
};
export default function index({ totalJobs }: Props) {
  return (
    <div className="header total">
      <div className="d-flex justify-content-around m-3  align-items-center h-100 total__number">
        <p className=" text-white number__contain ">
          {totalJobs} IT Job For Chất Developer
        </p>
        <Search />
      </div>
    </div>
  );
}
