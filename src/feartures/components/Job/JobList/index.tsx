import React, { useEffect, useState } from 'react';

import jobAPI from '../../../../api/jobAPI';
import './style.scss';

function JobList(props: any) {
  const [totalJobs, setTotalJobs] = useState('Loading...');

  useEffect(() => {
    const fecthJobs = async () => {
      const params = {
        // limit: 10,
      };

      const jobList = await jobAPI.getAll(params);
      setTotalJobs(jobList.data['job-count']);
    };
    fecthJobs();
  });

  return (
    <div>
      <h2>{totalJobs} IT jobs are available</h2>
      <div>
        <form>
          <input type="text" placeholder="Search.." className="input-search" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default JobList;
