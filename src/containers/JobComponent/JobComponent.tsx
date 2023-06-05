import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Job } from "../Home";

type Props = {
  job: Job;
  index: number;
};

const JobComponent: FC<Props> = (props) => {
  const { job, index } = props;

  return (
    <>
      <div>
        <NavLink to={`/detail/${job.id}`}>
          <div className="job" data-testid={`job${index}`} key={job.id}>
            <div className="job__content" data-testid="job__content">
              <div className="job__price">
                <p>Up to {job.price}$</p>
              </div>
              <div className="content__image" data-testid="content__image">
                <img
                  className="content__image-random"
                  data-testid="content__image-random"
                  src={job.image}
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://picsum.photos/id/1000/1000";
                  }}
                  alt="https://loremflickr.com/640/480/food"
                />
              </div>
              <div
                className={`content-tag job__content--${
                  job.status ? "green" : "red"
                }`}
                data-testid="content-tag"
              >
                <span data-testid="content__status" className="content__status">
                  {job.status ? "Available" : "Non-available"}
                </span>
              </div>
              <h2 className="content-name" data-testid="content-name">
                {job.name}
              </h2>
              <p className="content-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                adipisci deserunt amet eveniet delectus aliquid.
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default JobComponent;
