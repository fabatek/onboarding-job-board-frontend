import React from 'react';
import Job from '../../../../types/Job';
import JobInfoTotal from '../JobInfoTotal';
import JobsFound from '../JobInfoTotal/JobsFound';
import JobItem from '../JobItem';
import './style.scss';


function JobList(props: { totalJobs: string | number; displayListJob: Job[] }) {
  const { totalJobs, displayListJob } = props;

  return (
    <div>
      {/* custom hook */}
      <JobInfoTotal totalJobs={totalJobs} />
      <div>
        <form>
          <input type="text" placeholder="Search.." className="input-search" />
          <button type="submit">Search</button>
        </form>
      </div>
      <JobsFound jobFound={'20'} />
      <div>
        {displayListJob.map((item, index) => (
          <JobItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default JobList;
