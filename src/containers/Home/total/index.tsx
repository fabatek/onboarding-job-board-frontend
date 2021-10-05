// @flow
import * as React from "react";
type Props = {
  totalJobs: number;
};
export default function index({ totalJobs }: Props) {
  return (
    <div className="total">
      <div className="d-flex justify-content-start  align-items-center h-100 total__number">
        <p className=" text-white total__number__contain ">
          {totalJobs} IT Job For Chất Developer
        </p>
      </div>
    </div>
  );
}
