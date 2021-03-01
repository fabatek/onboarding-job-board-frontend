import React from 'react';

function JobInfoTotal(props: { totalJobs: number | string }) {
  const { totalJobs } = props;
  return (
    <div>
      <h3>{totalJobs} IT jobs are available</h3>
    </div>
  );
}

export default JobInfoTotal;
