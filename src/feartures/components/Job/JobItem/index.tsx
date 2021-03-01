import moment from 'moment';
import React from 'react';
import { envURL } from '../../../../constants/envURL';
import Job from '../../../../types/Job';
import './style.scss';

function JobItem(props: { item: Job; index: number }) {
  const { item, index } = props;
  const publishDesc = item.description
    .replace(/<\/?[^>]+(>|$)/g, '')
    .substr(0, 300)
    .concat('...');
  const publishDate = item.publication_date;
  return (
    <div className="container job-item" key={item.id}>
      <div className="row">
        <div className="col-2">
          <img
            className="job-item__company-logo"
            src={envURL + '/faba.png'}
            alt=""
          />
          <p className="job-item__company-name">{item.company_name}</p>
        </div>
        <div className="col-8 job-item__job-info">
          <h2>{item.title}</h2>
          <p>Salary: {item.salary}</p>
          <p>{publishDesc}</p>

          <div className="tags">
            <p>ReactJS</p>
            <p>Javascript</p>
            <p>NodeJS</p>
          </div>
        </div>
        <div className="col-2 text-right">
          {moment(publishDate, 'YYYYMMDD').fromNow()}
        </div>
      </div>
    </div>
  );
}

export default JobItem;
