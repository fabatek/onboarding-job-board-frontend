import { FC, memo } from "react";
import { JobProps } from "./interface";
import { BiDollarCircle } from "react-icons/bi";
import vi from "javascript-time-ago/locale/vi.json";
import moment from "moment";
import TimeAgo from "javascript-time-ago";
import './style.scss'
TimeAgo.addDefaultLocale(vi);

const JobItem: FC<JobProps> = ({ job }) => {
  const getTimeAgo = (time: string) => {
    const timeAgo = new TimeAgo("vi");
    return timeAgo.format(
      Date.now() - new Date(moment(time).utc().format("LLLL")).getTime() / 1000
    );
  };
  const formatString = (str: string) => {
    const arrString: string[] = str.split(" ");
    const newString = arrString
      .map((title) => title[0].toUpperCase() + title.slice(1))
      .join(" ")
      .trim();
    return newString;
  };
  return (
    <div className="job-item">
      <div className="row">
        <div className="job-item__image col-2 d-flex justify-content-center">
          <img src={job.image} alt="" width={80} height={80} />
        </div>
        <div className="col-8 job-item__content">
          <p className="content__title">{formatString(job.title)}</p>
          <p className="content__price d-flex align-items-center">
            <BiDollarCircle /> <span className="ml-1">{job.salary}</span> USD
          </p>
          <ul className="content__description">
            <li>{job.description}</li>
          </ul>
        </div>
        <div className="content__preview col-2 d-flex flex-column justify-content-between">
          <span
            className={`content__preview__hot  ${job.is_hot ? "active" : ""}`}
          >
            Hot
          </span>
          <pre className="content__preview__city">{job.city}</pre>
          <span className="content__preview__timer">
            {getTimeAgo(job.create_at)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default memo(JobItem);
