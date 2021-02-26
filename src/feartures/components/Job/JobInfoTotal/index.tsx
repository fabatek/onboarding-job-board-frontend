import React from 'react';

function JobInfoTotal(props: any) {
  const { totalJobs } = props;
  return (
    <div>
      <h2>{totalJobs} IT jobs are available</h2>
    </div>
  );
}

export default JobInfoTotal;
