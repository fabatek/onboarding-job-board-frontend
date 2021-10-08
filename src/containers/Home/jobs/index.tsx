import React from "react";
import { SystemState } from "../../Redux/type";

interface Props {
  jobs: SystemState["jobs"];
}
const Index = ({ jobs }: Props) => {
  return (
    <div className="container-fluid">
      <div className="row mt-3 job">
        {jobs.map((job, index) => {
          return (
            <div
              key={index}
              data-testid="job-element"
              className="col-lg-3 col-md-6 col-sm-12 job__item"
            >
              <div className="item__card">
                <div className="header">
                  <img
                    src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN3dvREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--945efb2631cdc42ca1eae527cc42c8e62a40695f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--0ee2142826455db8f2c2c0595c4fa369c30c09c8/robert-bosch-engineering-and-business-solutions-logo.jpg"
                    alt=""
                    className="header__image"
                  />
                </div>
                <div className="body">
                  <div className="body__name-job">{job?.name}</div>
                </div>
                <div className="footer ">
                  <span className="footer__count-job footer__count-job--red ">
                    10 job
                  </span>
                  <span className="footer__area">{job?.city}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Index;
