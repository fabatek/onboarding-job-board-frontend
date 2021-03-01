import React from 'react';
import './style.scss';

function JobsFound(props: { jobFound: number | string }) {
  const { jobFound } = props;
  return <p className="job-found">{jobFound} jobs found</p>;
}

export default JobsFound;
