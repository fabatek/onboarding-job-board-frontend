import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DispatchType, RootState } from "../../redux/configStore";
import { getJobDetailAPI } from "../../redux/reducer/JobReducer";

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
      <div className="job-detail" data-testid="job-detail">
        <div className="job-detail__content" data-testid="job-detail__content">
          <div className="job-detail__img" data-testid="job-detail__img">
            <img
              src={jobDetail.image}
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://picsum.photos/id/1000/1000";
              }}
              alt=""
            />
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
              Laboriosam commodi, consectetur aut dolore non, cumque doloremque
              fugit magni sequi reprehenderit explicabo numquam nesciunt quo id
              atque perferendis aspernatur laborum! Incidunt rerum sequi porro
              iste nemo sed reiciendis odit minus eius.
            </p>
            <p style={{ color: "green" }}>Start date: {jobDetail.dateStart} </p>
            <p style={{ color: "red" }}>End date: {jobDetail.dateEnd}</p>
            <p>Please contact to {jobDetail.email} to get more information.</p>
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
      <div className="job__information">
        <div className="job-information__description">
          <div className="job-information__requirement">
            <h3 className="job-requirement__title">JOB REQUIREMENTS</h3>
            <h4>What are we looking for</h4>
            <ul className="job-requirement__list">
              <li className="job-requirement__item">
                Proven experience as an Office Manager, Front Office Manager, or
                Administrative Assistant
              </li>
              <li className="job-requirement__item">
                Experience in organizing events and training is preferred
              </li>
              <li className="job-requirement__item">
                Good English writing skill
              </li>
              <li className="job-requirement__item">
                Computer skills and experience in formatting/editing documents
                (Excel, Word, PowerPoint, Outlook) are essential
              </li>
              <li className="job-requirement__item">
                Knowing how to use Pts, Ai, Adobe premiere or other related
                software is an advantage
              </li>
              <li className="job-requirement__item">
                Strong organizational and planning skills in a fast-paced
                environment
              </li>
              <li className="job-requirement__item">
                Cheerful attitude, detail-oriented, excellent interpersonal and
                communication skills and ability to work in a team
              </li>
              <li className="job-requirement__item">
                Ability to work independently, prioritize tasks and take
                initiatives
              </li>
            </ul>
          </div>
          <div className="job-information__other">
            <h3 className="job-other__title">OTHER INFORMATION</h3>
            <ul className="job-other__list">
              <li className="job-other__item">Age: No age limit</li>
              <li className="job-other__item">Salary: Compete</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
