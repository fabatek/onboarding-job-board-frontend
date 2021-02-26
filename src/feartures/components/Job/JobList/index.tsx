import React, { useEffect, useState } from 'react';

import jobAPI from '../../../../services/jobAPI';
import JobInfoTotal from '../JobInfoTotal';
import JobItem from '../JobItem';
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
  }, []);

  return (
    <div>
      <JobInfoTotal totalJobs={totalJobs} />
      <div>
        <form>
          <input type="text" placeholder="Search.." className="input-search" />
          <button type="submit">Search</button>
        </form>
      </div>

      <JobItem />
    </div>
  );
}

export default JobList;
