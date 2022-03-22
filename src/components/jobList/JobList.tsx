import React from 'react';
import JobItem from '../jobItem/JobItem';

const JobList = () => {
  return (
    <div className='d-flex justify-content-center'>
      <JobItem />
    </div>
    //   <div>
    //   {jobState.job?.map((i) => {
    //     return i.name + ' ';
    //   })}
    // </div>
  );
};

export default JobList;
