import React from "react";
import './loading.scss'

const Loading = () => {
  return (
    <div className="loading" data-testid='loading-testid'>
        <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};

export default Loading;
