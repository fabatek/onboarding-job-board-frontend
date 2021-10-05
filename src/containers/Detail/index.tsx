// @flow
import * as React from "react";
import "./Detail.scss";
type Props = {};

const index = (props: Props) => {
  return (
    <div className="detail">
      <div className="detail__item detail__logo">
        <img
          src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN3dvREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--945efb2631cdc42ca1eae527cc42c8e62a40695f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--0ee2142826455db8f2c2c0595c4fa369c30c09c8/robert-bosch-engineering-and-business-solutions-logo.jpg"
          alt=""
          className="image border"
        />
      </div>
      <div className="detail__item flex-column justify-content-between  detail__info ">
        <p className="detail__info__name">
          LG Vehicle Component Solutions Development Center Vietnam (LG VS DCV)
        </p>
        <div className="row align-self-start detail__info__item">
          <div className="col-4">
            <div className="detail__info__item__icon location">
              <i className="fas fa-cog"></i>
              <span className="text">Product</span>
            </div>
            <div className="detail__info__item__icon product">
              {" "}
              <i className="fas fa-cog"></i>
              <span className="text">Product</span>
            </div>
            <div className="detail__info__item__icon time-work">
              {" "}
              <i className="fas fa-cog"></i>
              <span className="text">Product</span>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center">
            <div className="detail__info__item__icon member">
              {" "}
              <i className="fas fa-cog"></i>
              <span className="text">Product</span>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center">
            <div className="detail__info__item__icon nation">
              {" "}
              <i className="fas fa-cog"></i>
              <span className="text">Product</span>
            </div>
          </div>
        </div>
      </div>
      <div className="detail__item flex-column justify-content-center detail__action">
        <button type="button" className="btn btn-danger detail__action--btn">
          Review
        </button>
        <button
          type="button"
          className="btn btn-light border detail__action--btn"
        >
          Follow
        </button>
      </div>
    </div>
  );
};
export default index;
