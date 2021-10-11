import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { requestJobAction } from "../Redux/Action";
import { typeStates } from "../Redux/type";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "./Detail.scss";
type Props = {};

const Index: React.FC = (props: Props) => {
  const dispatch = useDispatch(); //dispatch
  const jobs = useSelector((state: typeStates) => state.jobs); //reducer
  const { job } = jobs;

  const { id }: any = useParams(); //get params router
  let { pathname } = useLocation(); //get url

  //when url change
  useEffect(() => {
    dispatch(requestJobAction(id));
  }, [pathname]);

  return (
    <div className="detail">
      <div className="detail__item detail__logo">
        <img
          src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN3dvREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--945efb2631cdc42ca1eae527cc42c8e62a40695f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--0ee2142826455db8f2c2c0595c4fa369c30c09c8/robert-bosch-engineering-and-business-solutions-logo.jpg"
          alt=""
          className="image border"
        />
      </div>
      <div className="detail__item flex-column justify-content-around  detail__info ">
        <p className="info__name" data-testid="name">
          {job?.name}
        </p>
        <div className="row align-self-start info__item w-100">
          <div className="col-4 justify-content-center align-items-center">
            <div className="item__icon location">
              <i className="fas fa-city"></i>
              <span className="text" data-testid="city">
                {job?.city}
              </span>
            </div>
            <div className="item__icon product">
              <i className="fas fa-cog"></i>
              <span className="text">Product</span>
            </div>
            <div className="item__icon time-work">
              <i className="fas fa-clock"></i>
              <span className="text" data-testid="dateWork">
                {job?.dateWork}
              </span>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div className="item__icon member">
              <i className="fas fa-cog"></i>
              <span className="text" data-testid="member">
                {job?.memberMin} - {job?.memberMax}
              </span>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div className="item__icon nation">
              <i className="fas fa-location-arrow"></i>
              <span className="text" data-testid="nation">
                {job?.nation}
              </span>
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
export default Index;
