import React from "react";
import './loading.scss'

const Loading = () => {
  return (
    <div className="loading" data-testid='loading-testid'>
        <div className="lds-ellipsis">
      <div className="lds-ellipsis__item"></div>
      <div className="lds-ellipsis__item"></div>
      <div className="lds-ellipsis__item"></div>
      <div className="lds-ellipsis__item"></div>
    </div>
    </div>
  );
};

export default Loading;
