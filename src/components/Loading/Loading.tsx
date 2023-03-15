import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="text-center">
      <div className="spinner-grow" role="status"></div>
      <div className="spinner-grow" role="status"></div>
      <div className="spinner-grow" role="status"></div>
    </div>
  );
};

export default Loading;
