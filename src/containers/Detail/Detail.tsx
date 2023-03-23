import React, { SetStateAction, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DispatchType, RootState } from "../../redux/configStore";
import JobReducer, { getJobDetailAPI } from "../../redux/reducer/JobReducer";
import Search from "../search/Search";

type Props = {};

const Detail = (props: Props) => {
  const { jobDetail } = useSelector((state: RootState) => {
    return state.JobReducer;
  });
  const dispatch: DispatchType = useDispatch();
  const params = useParams();
  useEffect(() => {
    if (params.id !== undefined) {
      console.log("paramsid", params.id);
      dispatch(getJobDetailAPI(parseInt(params.id)));
    }
  }, [params.id]);

  return (
    <div>
      <Search
        count={0}
        handleSearchInput={function (e: {
          target: { value: SetStateAction<string> };
        }): void {
          throw new Error("Function not implemented.");
        }}
        handleEnterSearch={function (e: any): void {
          throw new Error("Function not implemented.");
        }}
        handleSearch={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div>
        <div className="job-detail">
          <div className="job-detail__content">
            <div className="job-detail__img">
              <img src={jobDetail.image} alt="" />
            </div>
            <div className="job-detail__description">
              <h3>{jobDetail.name}</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam commodi, consectetur aut dolore non, cumque
                doloremque fugit magni sequi reprehenderit explicabo numquam
                nesciunt quo id atque perferendis aspernatur laborum! Incidunt
                rerum sequi porro iste nemo sed reiciendis odit minus eius.
              </p>
            </div>
            <div className="job-detail__action">
              <button className="job-detail__btn--review">Review</button>
              <button className="job-detail__btn--follow">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
