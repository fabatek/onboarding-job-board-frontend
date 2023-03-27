import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DispatchType, RootState } from "../../redux/configStore";
import { getJobDetailAPI } from "../../redux/reducer/JobReducer";
import HeaderTemplate from "../Header/HeaderTemplate";

type Props = {};

const Detail = (props: Props) => {
  const { jobDetail } = useSelector((state: RootState) => {
    return state.JobReducer;
  });
  const dispatch: DispatchType = useDispatch();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      dispatch(getJobDetailAPI(parseInt(params.id)));
    }
  }, [params.id]);

  return (
    <div>
      <HeaderTemplate />
      <div>
        <div className="job-detail" data-testid="job-detail">
          <div
            className="job-detail__content"
            data-testid="job-detail__content"
          >
            <div className="job-detail__img" data-testid="job-detail__img">
              <img src={jobDetail.image} alt="" />
            </div>
            <div
              className="job-detail__description"
              data-testid="job-detail__description"
            >
              <h3 data-testid="job-detail__name" className="job-detail__name">
                {jobDetail.name}
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam commodi, consectetur aut dolore non, cumque
                doloremque fugit magni sequi reprehenderit explicabo numquam
                nesciunt quo id atque perferendis aspernatur laborum! Incidunt
                rerum sequi porro iste nemo sed reiciendis odit minus eius.
              </p>
              <p style={{ color: "green" }}>
                Start date: {jobDetail.dateStart}{" "}
              </p>
              <p style={{ color: "red" }}>End date: {jobDetail.dateEnd}</p>
              <p>
                Please contact to {jobDetail.email} to get more information.
              </p>
            </div>
            <div className="job-detail__action">
              <button
                className="job-detail__btn--review"
                data-testid="job-detail__btn--review"
              >
                Review
              </button>
              <button
                className="job-detail__btn--follow"
                data-testid="job-detail__btn--follow"
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
